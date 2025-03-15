"use client";

import { ReactNode, Suspense } from "react";

import { RequestsSidebar } from "@/components/pages";

export default function NeedsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="gap-12 md:flex">
      <Suspense>
        <RequestsSidebar />
      </Suspense>
      <div className="bg-surface-container-lowest grow rounded-medium">
        {children}
      </div>
    </div>
  );
}
