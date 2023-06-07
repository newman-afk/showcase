import stripe from "@/app/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  const params: Stripe.Checkout.SessionCreateParams = {
    submit_type: "pay",
    payment_method_types: ["alipay", "card"],
    billing_address_collection: "auto",
    line_items: [
      {
        price_data: {
          currency: "USD",
          product_data: {
            name: "Pixel 5",
            images: [
              "https://res.cloudinary.com/drsh2qu6f/image/upload/v1685734187/b1zzeo0aeqr8wwc1w2fd.jpg",
            ],
          },
          unit_amount: 1000,
        },
        quantity: 2,
      },
      {
        price_data: {
          currency: "USD",
          product_data: {
            name: "iPhone11 Plus",
            metadata: {
              id: "12346549849448979498",
            },
          },
          unit_amount: 1000,
        },
        quantity: 1,
      },
    ],
    allow_promotion_codes: true,
    mode: "payment",
    success_url: `http://localhost:3000/showcase/ecommerce/payment/success`,
    cancel_url: `http://localhost:3000/showcase/ecommerce/mycart`,
  };
  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create(params);

  return NextResponse.json({ sessionId: checkoutSession.id });
}
