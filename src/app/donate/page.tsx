'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { motion } from 'framer-motion';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const donationAmounts = [
  { amount: 5, label: 'Support a Project' },
  { amount: 10, label: 'Help Create Content' },
  { amount: 20, label: 'Fuel Innovation' },
  { amount: 50, label: 'Make a Difference' },
];

function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDonation = async (amount: number) => {
    try {
      setIsLoading(true);
      setError(null);

      // Create a payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const { clientSecret } = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      const { error: stripeError } = await stripe.confirmPayment({
        elements: {
          clientSecret,
        },
        confirmParams: {
          return_url: `${window.location.origin}/donate/success`,
        },
      });

      if (stripeError) {
        throw stripeError;
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Something went wrong. Please try again later.');
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

          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}

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

export default function DonatePage() {
  return (
    <Elements stripe={stripePromise}>
      <DonationForm />
    </Elements>
  );
} 