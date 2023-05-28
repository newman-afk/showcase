"use client";

import useLoginModal from "@/app/hooks/zustand/useLoginModal";
import { useCallback, useEffect, useMemo } from "react";

function OpenLoginModal() {
  const loginModal = useLoginModal();

  useEffect(() => {
    loginModal.onOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
}

export default OpenLoginModal;
