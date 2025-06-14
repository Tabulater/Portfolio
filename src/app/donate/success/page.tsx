'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SuccessPage() {
  const [status, setStatus] = useState<'processing' | 'succeeded' | 'failed'>('processing');
  const searchParams = useSearchParams();

  useEffect(() => {
    const payment_intent = searchParams.get('payment_intent');
    const payment_intent_client_secret = searchParams.get('payment_intent_client_secret');
    const redirect_status = searchParams.get('redirect_status');

    if (redirect_status === 'succeeded') {
      setStatus('succeeded');
    } else if (redirect_status === 'failed') {
      setStatus('failed');
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {status === 'processing' && (
            <>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Processing Your Payment
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Please wait while we confirm your payment...
              </p>
            </>
          )}

          {status === 'succeeded' && (
            <>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Thank You for Your Support!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your payment was successful. Your support means a lot to me and helps me continue my journey in technology and innovation.
              </p>
              <Link
                href="/"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Return to Home
              </Link>
            </>
          )}

          {status === 'failed' && (
            <>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Payment Failed
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We couldn't process your payment. Please try again or contact support if the problem persists.
              </p>
              <Link
                href="/donate"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Again
              </Link>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
} 