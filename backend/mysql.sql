CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE categories(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    image_url TEXT NOT NULL,
    item_count INTEGER NOT NULL
);

INSERT INTO categories(name, image_url, item_count)
VALUES("Men Clothes", "https://media.istockphoto.com/id/1207027323/photo/trendy-clothes-in-a-store.jpg?s=1024x1024&w=is&k=20&c=Oj3TgnNMbjfjINFJP2lPdENLq93_iUuCmAEiGi90zfI=", 24),
("Women Clothes", "https://images.unsplash.com/photo-1616313253719-c46514cddee1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 12),
("Accessories", "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 43),
("Cotton Clothes", "https://media.istockphoto.com/id/157532000/photo/selection-of-multicolored-shirts.jpg?s=1024x1024&w=is&k=20&c=oIPVMz1rsnK7_64PGzrQwEGlJrelEgAe9q0der5P4Pg=", 31),
("Summer Clothes", "https://images.unsplash.com/photo-1607784750393-5edbcd13fc36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 26),
("Wedding Clothes", "https://media.istockphoto.com/id/1303804647/photo/making-sure-i-look-on-point-for-my-bride.jpg?s=1024x1024&w=is&k=20&c=9CvkjVVlJVu90EKUzRXnKMEhIFmsv2i9mwIsW8MRZRE=", 52),
("Spring Collection", "https://images.unsplash.com/photo-1551488831-3ed9278737db?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3ByaW5nJTIwY29sbGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D", 24),
("Casual Clothes", "https://media.istockphoto.com/id/1134255601/photo/handsome-hispanic-man-wearing-casual-t-shirt-at-home-smiling-in-love-showing-heart-symbol-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=HZOhJl3eMSnppAB61x_q2xQclNQ7e6pda0jjohCmZ-w=", 52),
("Hats", "https://images.unsplash.com/photo-1704253801130-4ce99cd0447c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhdHN8ZW58MHx8MHx8fDA%3D", 26);

