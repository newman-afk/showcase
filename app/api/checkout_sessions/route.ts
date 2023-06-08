import { Payment } from "@/app/components/columns";
import stripe from "@/app/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  const products: Payment[] = await request.json();

  const line_items = products.map((product) => {
    return {
      price_data: {
        currency: "USD",
        product_data: {
          name: product.name,
          images: [product.image],
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    };
  });

  const params: Stripe.Checkout.SessionCreateParams = {
    submit_type: "pay",
    payment_method_types: ["alipay", "card"],
    billing_address_collection: "auto",
    line_items,
    allow_promotion_codes: true,
    mode: "payment",
    success_url: `http://localhost:3000/showcase/ecommerce/payment/success`,
    cancel_url: `http://localhost:3000/showcase/ecommerce/mycart`,
  };
  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create(params);

  return NextResponse.json({ sessionId: checkoutSession.id });
}
