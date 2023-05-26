"use client";

import { useEffect, useState } from "react";

function getSavedValue<T>(key: string, initialValue: T) {
  if (typeof window === "undefined") {
    return initialValue;
  }

  const item = window.localStorage.getItem(key);

  if (item) {
    const savedValue = JSON.parse(item);

    if (savedValue) return savedValue;
  }

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
}
