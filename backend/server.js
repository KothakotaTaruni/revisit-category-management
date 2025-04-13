const express = require('express')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const path = require('path')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const dbPath = path.join(__dirname, 'users.db')

let db = null
const initalizeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    console.log("Database connected")
    app.listen(3000, () => {
      console.log('Server Running at http://localhost:3000')
    })
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
    process.exit(1)
  }
}

initalizeDBAndServer()

// API for user sign up
app.post("/register", async (request, response) => {
  const { username, email, password } = request.body
  if (!username || !email || !password) {
    response.status(400)
    response.send({ message: "Please fill in all fields" })
    return
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  const selectUserQuery = `SELECT * FROM users WHERE username = '${username}'`
  const dbUser = await db.get(selectUserQuery)
  try{
  if (dbUser === undefined) {
    const createNewUserQuery = `
      INSERT INTO users(username, email, password) 
      VALUES 
        (
          '${username}', 
          '${email}',
          '${hashedPassword}'
        )`
    await db.run(createNewUserQuery)
    response.status(200)
    response.send({message: "User created successfully"})
  } else {
    response.status(400)
    response.send({message: "User already exists"})
  }
}catch(error){
    response.status(500)
    response.send(`Error: ${error.message}`)
  }
})

// API for user login in 
function authenticateToken(request, response, next) {
  let jwtToken
  const authHeader = request.headers['authorization']
  if (authHeader !== undefined) {
    jwtToken = authHeader.split(' ')[1]
  }
  if (jwtToken === undefined) {
    response.status(401)
    response.send('Invalid JWT Token')
  } else {
    jwt.verify(jwtToken, 'MY_SECRET_TOKEN', async (error, payload) => {
      if (error) {
        response.status(401)
        response.send('Invalid JWT Token')
      } else {
        request.username = payload.username
        next()
      }
    })
  }
}

app.post('/login', async (request, response) => {
  const {username, password} = request.body
  if (!username || !password) {
    response.status(400);
    response.send({ message: "Please fill in both username and password" })
    return
  }
  
  const selectUserQuery = `SELECT * FROM users WHERE username = '${username}';`
  const dbUser = await db.get(selectUserQuery)
  if (dbUser === undefined) {
    response.status(400)
    response.send('Invalid user')
  } else {
    const isPasswordMatched = await bcrypt.compare(password, dbUser.password)
    try{
    if (isPasswordMatched === true) {
      const payload = {
        username: username,
      }
      const jwtToken = jwt.sign(payload, 'MY_SECRET_TOKEN')
      response.send({jwtToken})
    } else {
      response.status(400)
      response.send('Invalid password')
    }
  }catch(error){
    response.status(500)
    response.send("Error logging in user")
  }
  }
})

// API for protected route
app.get("/protected", authenticateToken, async (request, response) => {
  try{
    response.status(200)
    response.send("Welcome to protected route")
  }
  catch(error){
    response.status(500)
    response.send("Error accessing protected route")
  }
})

// API for categories
app.get("/categories", authenticateToken, async (request, response) => {
  try{
  const getCategoriesQuery = `SELECT * FROM categories`
  const categoryDetails = await db.all(getCategoriesQuery)
  response.send(categoryDetails)
  }
  catch(error){
    response.status(500)
    response.send("Internal server")
  }
})

//API for add a category 
app.post("/categories", authenticateToken, async (request, response) => {
  try{
  const {name, image_url, item_count} = request.body
  const addCategoryQuery = `INSERT INTO categories
                            (name, image_url, item_count)
                            VALUES('${name}', '${image_url}', ${item_count})`
  const category = await db.run(addCategoryQuery)
  response.send("Category added successfully")
  }catch(error){
    console.log(error)
    response.status(500)
    response.send("Internal server error")
  }
})

// API for updating a category
app.put("/categories/:id", authenticateToken, async (request, response)=> {
  try{
  const {id} = request.params
  const {name, image_url, item_count} = request.body
  const updateCategoryQuery = `UPDATE categories
                                SET name = '${name}',
                                    image_url = '${image_url}',
                                    item_count = ${item_count}
                                WHERE id = ${id}`
  await db.run(updateCategoryQuery)
  response.status(200)
  response.send("Category updated successfully")
  }catch(error){
    response.status(500)
    response.send("Internal server error")
  }
})