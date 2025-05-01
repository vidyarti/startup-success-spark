
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PaymentSuccessPage = () => {
  return (
    <div className="container max-w-md mx-auto py-12 px-4 md:px-6">
      <Card className="border-green-100">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-600 h-8 w-8"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <CardTitle className="text-2xl font-bold text-green-600">
            Payment Successful!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600">
            Thank you for your purchase. Your order has been confirmed and you'll
            receive an email with your receipt shortly.
          </p>
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <p className="font-medium">Order Reference</p>
            <p className="text-sm text-gray-500 mt-1">
              #{Math.random().toString(36).substring(2, 10).toUpperCase()}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PaymentSuccessPage;
