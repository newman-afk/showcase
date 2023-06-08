"use client";

import getStripe from "@/app/lib/stripeClient";
import { Table } from "@tanstack/react-table";
import axios from "axios";
import { FormEvent } from "react";

interface CheckoutProps<TData> {
  table: Table<TData>;
}
function Checkout<TData>({ table }: CheckoutProps<TData>) {
  async function submit(e: FormEvent) {
    e.preventDefault();

    const products = table
      .getSelectedRowModel()
      .rows.map((row) => row.original);

    const { data } = await axios.post("/api/checkout_sessions", products);

    const { sessionId } = data;
    const stripe = await getStripe();

    const { error } = await stripe!.redirectToCheckout({
      sessionId: sessionId,
    });

    console.warn(error.message);
  }

  const totalPrice = table.getSelectedRowModel().rows.reduce((sum, row) => {
    const product: any = row.original;

    return sum + product.price * product.quantity;
  }, 0);
  return (
    <div className="mt-4 flex items-center justify-between">
      <div className=" text-lg font-semibold">Sum ${totalPrice}.00</div>
      <button
        type="button"
        onClick={submit}
        className="mb-2 mr-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-center text-sm font-medium uppercase text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800"
      >
        Checkout
      </button>
    </div>
  );
}

export default Checkout;
