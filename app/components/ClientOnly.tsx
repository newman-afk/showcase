"use client";

import { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}
function ClientOnly({ children }: ClientOnlyProps) {
  const [isOnMounted, setIsUnMounted] = useState(false);

  useEffect(() => {
    setIsUnMounted(true);
  }, []);

  if (!isOnMounted) return null;

  return <>{children}</>;
}

export default ClientOnly;
