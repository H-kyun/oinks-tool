"use client";

import { Provider } from "react-redux";
import { makeStore } from "@core/_store/store";
import type { RootState } from "@core/_store/store";
import { useRef } from "react";

export default function ReduxProvider({
  children,
  initialSidebarOpen,
}: {
  children: React.ReactNode;
  initialSidebarOpen: boolean;
}) {
  // 클라이언트에서 store 1회만 생성(메모이즈)
  const storeRef = useRef<ReturnType<typeof makeStore> | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore({
      sidebar: { open: initialSidebarOpen },
    } as Partial<RootState>);
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}

