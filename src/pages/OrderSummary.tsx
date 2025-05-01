import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PaymentForm } from "../components/PaymentForm";

// Mock data - this would come from your actual cart/order system
const orderItems = [
  { id: 1, name: "Spring Bouquet", price: 65.00, quantity: 1 },
  { id: 2, name: "Wedding Collection", price: 120, quantity: 1 },
];

const OrderSummaryPage = () => {
  const [showPayment, setShowPayment] = useState(false);

  // Calculate order totals
  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.07; // 7% tax rate
  const total = subtotal + tax;

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4 md:px-6">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-display">Order Summary</h1>
          <p className="text-gray-600 mt-2">Review your order before proceeding to payment</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Order Items</CardTitle>
            <CardDescription>
              The products and services included in your order
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{item.quantity}</TableCell>
                    <TableCell className="text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="mt-6 space-y-2 text-right">
              <div className="flex justify-between">
                <span className="font-medium">Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Tax (7%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between flex-col sm:flex-row gap-4">
            <Link to="/">
              <Button variant="outline">Continue Shopping</Button>
            </Link>
            {!showPayment && (
              <Button onClick={() => setShowPayment(true)}>Proceed to Payment</Button>
            )}
          </CardFooter>
        </Card>

        {showPayment && (
          <PaymentForm amount={total} onCancel={() => setShowPayment(false)} />
        )}
      </div>
    </div>
  );
};

const OrderSummary = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
        <p className="text-gray-600">Thank you for your purchase!</p>
        <p className="text-gray-600 mt-2">Your order is being processed.</p>
      </div>
    </div>
  );
};

export default OrderSummaryPage;