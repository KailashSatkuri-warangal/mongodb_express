import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const [cart, setCart] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }
        const res = await axios.get('http://localhost:5000/api/cart', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCart(res.data);

        const total = res.data.products.reduce(
          (sum, item) => sum + item.productId.price * item.quantity,
          0
        );
        const paymentIntent = await axios.post(
          'http://localhost:5000/api/payment/create-payment-intent',
          { amount: total * 100 },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setClientSecret(paymentIntent.data.clientSecret);
      } catch (error) {
        setError(error.response?.data?.msg || error.message);
      }
    };
    fetchCart();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!clientSecret || !cardNumber) {
      setError('Please enter card details');
      return;
    }

    try {
      const res = await axios.post(
        'http://localhost:5000/api/payment/process-payment',
        { clientSecret, cardDetails: { number: cardNumber } },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      alert(res.data.message);
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.msg || error.message);
    }
  };

  if (error) return <div className="text-red-500">{error}</div>;
  if (!cart) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="mb-4">
        {cart.products.map((item) => (
          <div key={item._id}>
            <p>{item.productId.name} - ${item.productId.price} x {item.quantity}</p>
          </div>
        ))}
        <p className="font-bold">
          Total: $
          {cart.products.reduce((sum, item) => sum + item.productId.price * item.quantity, 0)}
        </p>
      </div>
      <input
        type="text"
        placeholder="Card Number (e.g., 4242424242424242)"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-green-500 text-white p-2 rounded"
      >
        Pay Now
      </button>
    </div>
  );
}

export default Checkout;