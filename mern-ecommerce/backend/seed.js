// backend/seed.js
const mongoose = require('mongoose');
const Product = require('./models/Product');
const connectDB = require('./config/db');

connectDB();

const sampleProducts = [
  { name: 'Product 1', price: 29.99, description: 'A great product', image: 'product1.jpg' },
  { name: 'Product 2', price: 49.99, description: 'Another great product', image: 'product2.jpg' },
];

const seedProducts = async () => {
  await Product.deleteMany();
  await Product.insertMany(sampleProducts);
  console.log('Products seeded');
  process.exit();
};

seedProducts();