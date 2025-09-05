const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const auth = require('../middleware/auth');

router.post('/add', auth, async (req, res) => {
  const { productId, quantity } = req.body;
  console.log('Adding to cart:', { productId, quantity, userId: req.user.id }); // Debug
  try {
    if (!productId || !quantity || quantity <= 0) {
      return res.status(400).json({ msg: 'Invalid product ID or quantity' });
    }

    const product = await Product.findById(productId);
    console.log('Product found:', product); // Debug
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    let cart = await Cart.findOne({ userId: req.user.id });
    if (cart) {
      const itemIndex = cart.products.findIndex(
        (item) => item.productId.toString() === productId
      );
      if (itemIndex > -1) {
        cart.products[itemIndex].quantity += quantity;
      } else {
        cart.products.push({ productId, quantity });
      }
    } else {
      cart = new Cart({
        userId: req.user.id,
        products: [{ productId, quantity }],
      });
    }

    await cart.save();
    console.log('Cart updated:', cart); // Debug
    res.json(cart);
  } catch (error) {
    console.error('Cart add error:', error.message); // Debug
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;