"use client";
import { useToggle } from "usehooks-ts";

import { BottomSheet } from "@/components/shared";

import { TableOfContent } from "./TableOfContent";

export const TableOfContentSheet = () => {
  const [open, toggleOpen] = useToggle();

  return (
    <div>
      <BottomSheet open={open} toggle={toggleOpen} initialHeight={"58%"}>
        <TableOfContent />
      </BottomSheet>
      <button
        onClick={toggleOpen}
        className="md:hidden fixed left-[16px] bottom-[90px] p-16 rounded-large border-2 border-primary-opacity-16 bg-surface-container-high text-label-large text-primary"
      >
        Table of content
      </button>
    </div>
  );
};
