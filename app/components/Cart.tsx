"use client";

import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { getAllProductsInCart } from "@/app/actions/cart";

function Cart() {
  const productsQuery = useQuery({
    queryKey: ["products-in-cart"],
    queryFn: getAllProductsInCart,
  });
  const result = productsQuery.data;

  const data = result === null ? [] : result;

  return <div>{data && <DataTable columns={columns} data={data} />}</div>;
}

export default Cart;
