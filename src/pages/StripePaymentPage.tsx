import React from "react";

const StripePaymentPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Stripe Payment</h1>
        <p className="text-gray-600 text-center mb-6">
          Redirecting to Stripe for secure payment processing...
        </p>
        <div className="flex justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default StripePaymentPage;
