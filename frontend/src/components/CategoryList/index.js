import React, { useState, useEffect } from 'react'
import CategoryItem from "../CategoryItem"

import "./index.css"

const CategoryList = () => {
  const [categories, setCategories] = useState([])
  const token = localStorage.getItem('jwt_token')

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/categories', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setCategories(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategories()
  }, [token])

  return (
    <ul className="categories-items">
      {categories.map((category) => (
        <CategoryItem key={category.id} details={category}/>
      ))}
    </ul>
  )
}

export default CategoryList