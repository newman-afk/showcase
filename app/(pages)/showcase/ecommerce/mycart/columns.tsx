"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

import { DataTableColumnHeader } from "@/app/components/DataTableColumnHeader";
import Image from "next/image";
import { DecrementButton, DeleteButton, IncrementButton } from "./Buttons";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  createdAt: string;
  description: string;
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
  updatedAt: string;
  brandName: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Image" />;
    },
    cell: ({ row }) => {
      const url = row.getValue("image") as string;

      return (
        <div className="relative aspect-video h-full">
          <Image src={url} fill alt="image" sizes="100%" priority />
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "brandName",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Brand" />;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Price" />;
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className=" font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Quantity"
          className="flex justify-center"
        />
      );
    },
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <div className="flex items-center justify-evenly">
          <DecrementButton id={payment.id} />
          {payment.quantity}
          <IncrementButton id={payment.id} />
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return <DeleteButton id={payment.id} />;
    },
  },
];
