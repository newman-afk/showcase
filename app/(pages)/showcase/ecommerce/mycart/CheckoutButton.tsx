"use client";

import getStripe from "@/app/lib/stripeClient";
import axios from "axios";
import { FormEvent } from "react";

function CheckoutButton() {
  async function submit(e: FormEvent) {
    e.preventDefault();

    const { data } = await axios.post("/api/checkout_sessions");

    const { sessionId } = data;
    const stripe = await getStripe();

    const { error } = await stripe!.redirectToCheckout({
      sessionId: sessionId,
    });

    console.warn(error.message);
  }
  return (
    <button
      type="button"
      onClick={submit}
      className="mb-2 mr-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-center text-sm font-medium uppercase text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800"
    >
      Checkout
    </button>
  );
}

export default CheckoutButton;
