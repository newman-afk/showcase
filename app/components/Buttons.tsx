"use client";

import {
  decrementProduct,
  deleteProduct,
  incrementProduct,
} from "@/app/actions/cart";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Payment } from "./columns";

export function DecrementButton({ id }: { id: string }) {
  const queryClient = useQueryClient();

  const decrementMutation = useMutation({
    mutationFn: decrementProduct,
    async onMutate() {
      await queryClient.cancelQueries({
        queryKey: ["products-in-cart"],
      });

      const previousData = queryClient.getQueryData(["products-in-cart"]);

      queryClient.setQueryData(
        ["products-in-cart"],
        (old: Payment[] | undefined | null) => {
          if (old === null || old === undefined) return old;

          let newData: Payment[] = JSON.parse(JSON.stringify(old));

          return newData.map((item) => {
            if (item.id === id)
              item.quantity = item.quantity <= 1 ? 1 : item.quantity - 1;
            return item;
          });
        }
      );

      return { previousData };
    },
    onError(error, variables, context) {
      queryClient.setQueryData(["products-in-cart"], context?.previousData);
    },
    onSettled() {
      queryClient.invalidateQueries({ queryKey: ["products-in-cart"] });
    },
  });
  return (
    <Button
      type="button"
      aria-label="decrement button"
      onClick={() => decrementMutation.mutate(id)}
    >
      <MinusIcon />
    </Button>
  );
}

export function IncrementButton({ id }: { id: string }) {
  const queryClient = useQueryClient();

  const incrementMutation = useMutation({
    mutationFn: incrementProduct,
    async onMutate() {
      await queryClient.cancelQueries({
        queryKey: ["products-in-cart"],
      });

      const previousData = queryClient.getQueryData(["products-in-cart"]);

      queryClient.setQueryData(
        ["products-in-cart"],
        (old: Payment[] | undefined | null) => {
          if (old === null || old === undefined) return old;

          let newData: Payment[] = JSON.parse(JSON.stringify(old));

          return newData.map((item) => {
            if (item.id === id)
              item.quantity = item.quantity <= 1 ? 1 : item.quantity + 1;
            return item;
          });
        }
      );

      return { previousData };
    },
    onError(error, variables, context) {
      console.log("error");
      queryClient.setQueryData(["products-in-cart"], context?.previousData);
    },
    onSettled() {
      console.log("invalidation");
      return queryClient.invalidateQueries({ queryKey: ["products-in-cart"] });
    },
  });
  return (
    <Button
      type="button"
      aria-label="increment button"
      onClick={() => incrementMutation.mutate(id)}
    >
      <PlusIcon />
    </Button>
  );
}

export function DeleteButton({ id }: { id: string }) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    async onMutate() {
      await queryClient.cancelQueries({
        queryKey: ["products-in-cart"],
      });

      const previousData = queryClient.getQueryData(["products-in-cart"]);

      queryClient.setQueryData(
        ["products-in-cart"],
        (old: Payment[] | undefined | null) => {
          if (old === null || old === undefined) return old;

          return old.filter((item) => item.id !== id);
        }
      );

      return { previousData };
    },
    onError(error, variables, context) {
      queryClient.setQueryData(["products-in-cart"], context?.previousData);
    },
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ["quantity"] });
    },
    onSettled() {
      queryClient.invalidateQueries({ queryKey: ["products-in-cart"] });
    },
  });
  return (
    <Button
      type="button"
      aria-label="delete button"
      onClick={() => deleteMutation.mutate(id)}
    >
      Delete
    </Button>
  );
}
