const express = require('express');
const router = express.Router();

router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;
  try {
    if (!amount || amount <= 0) {
      return res.status(400).json({ msg: 'Invalid amount' });
    }
    const clientSecret = `mock_pi_${Math.random().toString(36).substring(2)}`;
    res.json({ clientSecret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/process-payment', async (req, res) => {
  const { clientSecret, cardDetails } = req.body;
  try {
    if (!clientSecret || !cardDetails) {
      return res.status(400).json({ msg: 'Missing payment details' });
    }
    res.json({ status: 'succeeded', message: 'Mock payment successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;