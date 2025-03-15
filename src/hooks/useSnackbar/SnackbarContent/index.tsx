"use client";

import { FC } from "react";

import { cn } from "@/utils";

import { Icon } from "../../../components/shared/Icon";

import { SnackbarContentProps } from "./types";

export const SnackbarContent: FC<SnackbarContentProps> = ({
  message,
  actionText,
  icon,
  longAction,
  onActionClick,
  onClose,
}) => {
  return (
    <div
      className={cn(
        "bg-inverse-surface text-body-medium flex flex-wrap items-center gap-16 justify-between shadow-light-3 text-inverse-on-surface w-full md:min-w-[344px] min-h-48 px-16 rounded-small",
        { "gap-0 pt-4 pr-8": longAction },
      )}
    >
      <div className="flex items-center gap-6 w-[239px]">
        {icon && <Icon name={icon} className="text-[20px]" />}
        <span>{message}</span>
      </div>
      {onActionClick && (
        <button
          onClick={onActionClick}
          type="button"
          className={cn(
            "py-[10px] px-12 rounded-full text-label-large text-inverse-primary transition-all duration-200 active:bg-inverse-primary-opacity-8",
            {
              "w-full order-3 text-end": longAction,
            },
          )}
        >
          {actionText}
        </button>
      )}
      {onClose && (
        <Icon name="Close remove" className="text-[24px]" onClick={onClose} />
      )}
    </div>
  );
};
