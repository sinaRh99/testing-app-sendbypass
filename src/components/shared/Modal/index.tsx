"use client";

import Dialog from "@mui/material/Dialog";

import { cn } from "@/utils";

import { BottomSheet } from "../BottomSheet";

import { ModalProps } from "./types";

export const Modal = ({
  open,
  onClose,
  children,
  contentProps,
  initialHeight,
}: ModalProps) => {
  return (
    <>
      <Dialog open={open} onClose={onClose} className="!hidden lg:!block">
        <div className={cn("", contentProps?.className)}>{children}</div>
      </Dialog>
      <BottomSheet
        open={open}
        toggle={onClose}
        sheetClassName="lg:!hidden"
        initialHeight={initialHeight}
      >
        <div className={cn("", contentProps?.className)}>{children}</div>
      </BottomSheet>
    </>
  );
};
