CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	itemID INT AUTO_INCREMENT NOT NULL,
	itemName VARCHAR(100) NOT NULL,
    department VARCHAR(50) NOT NULL,
    price DECIMAL (65,2) NOT NULL,
    stockQuantity INT NOT NULL,
    PRIMARY KEY (itemID)
    );
    
INSERT INTO products (itemName, department, price, stockQuantity)
VALUES	("Final Fantasy XIV", "Role Playing Game", 19.99, 20),
		("Halo 5", "First Person Shooter", 24.99, 16),
        ("Pokemon Ultra Sun", "Role Playing Game", 39.99, 0),
        ("Pokemon Ultra Moon", "Role Playing Game", 39.99, 0),
        ("Witcher 3", "Role Playing Game", 39.99, 7),
        ("Injustice 2", "Fighting", 59.99, 12),
        ("Age of Empires 2", "Strategy", 24.99, 100),
        ("Goat Simulator", "Simulator", 9.99, 125),
        ("Zelda: Breath of the Wild", "Role Playing Game", 59.99, 2),
        ("Destiny 2", "Shooter", 59.99, 0);