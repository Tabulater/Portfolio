'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { motion } from 'framer-motion';

const stripePromise = loadStripe('pk_test_51R71ZlHFFLshvrqYDOrRGFXVpuVYgnHyWVSrr5dLgDLs5F9wWFjy2rET5adJHvfcBxxw02gXVM8zVFcW48w71nu8000mKnYxte');

const donationAmounts = [
  { amount: 5, label: 'Support a Project' },
  { amount: 10, label: 'Help Create Content' },
  { amount: 20, label: 'Fuel Innovation' },
  { amount: 50, label: 'Make a Difference' },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleDonation = async (amount: number) => {
    try {
      setIsLoading(true);
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      // Here you would typically make a call to your backend to create a payment intent
      // For now, we'll just show a message
      alert('Thank you for your support! This is a demo - in a real implementation, this would connect to Stripe.');
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support My Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            As a Grade 11 student passionate about technology and innovation, your support helps me continue creating and learning.
            Every contribution makes a difference in my educational journey.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-2 gap-4 mb-8">
            {donationAmounts.map(({ amount, label }) => (
              <motion.button
                key={amount}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedAmount(amount)}
                className={`p-6 rounded-xl border-2 text-center transition-all ${
                  selectedAmount === amount
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="text-2xl font-bold text-gray-900">${amount}</div>
                <div className="text-sm text-gray-600 mt-1">{label}</div>
              </motion.button>
            ))}
          </div>

          <div className="mb-8">
            <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-2">
              Or enter a custom amount
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                id="custom-amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="block w-full pl-7 pr-12 py-3 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="0.00"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleDonation(selectedAmount || Number(customAmount))}
            disabled={isLoading || (!selectedAmount && !customAmount)}
            className={`w-full py-4 px-6 rounded-xl text-white font-medium text-lg ${
              isLoading || (!selectedAmount && !customAmount)
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isLoading ? 'Processing...' : 'Support Now'}
          </motion.button>

          <p className="mt-4 text-center text-sm text-gray-500">
            Your support helps me continue learning and creating. Thank you for being part of my journey!
          </p>
        </div>
      </div>
    </div>
  );
} 