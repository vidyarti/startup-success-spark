
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface PaymentFormProps {
  amount: number;
  onCancel: () => void;
}

interface FormValues {
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export const PaymentForm = ({ amount, onCancel }: PaymentFormProps) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // This is where you would integrate with a payment processor like Stripe
      console.log("Payment data submitted:", data);
      console.log(`Processing payment for $${amount.toFixed(2)}`);
      
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Show success message
      toast.success("Payment successful! Your order is confirmed.");
      
      // Redirect to success page (you can create this later)
      navigate("/");
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
        <CardDescription>Complete your purchase securely</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="cardName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Holder Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="4242 4242 4242 4242" 
                      maxLength={19}
                      {...field} 
                      onChange={(e) => {
                        // Format card number with spaces every 4 digits
                        const value = e.target.value.replace(/\s/g, "").substring(0, 16);
                        const formattedValue = value.replace(/(.{4})/g, "$1 ").trim();
                        field.onChange(formattedValue);
                      }}
                      required 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry Date</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="MM/YY" 
                        maxLength={5}
                        {...field} 
                        onChange={(e) => {
                          // Format expiry date with slash
                          let value = e.target.value.replace(/\D/g, "");
                          if (value.length > 2) {
                            value = value.substring(0, 2) + "/" + value.substring(2, 4);
                          }
                          field.onChange(value);
                        }}
                        required 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVV</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="123" 
                        maxLength={4}
                        {...field} 
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");
                          field.onChange(value);
                        }}
                        required 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="pt-4">
              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <div className="flex justify-between font-medium mb-2">
                  <span>Total Amount:</span>
                  <span>${amount.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500">
                  By clicking "Complete Payment", you agree to our terms and conditions.
                </p>
              </div>
              <div className="flex justify-between gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={onCancel}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Complete Payment"}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
