"use client";

import { type ReactNode } from "react";

import { NeedCardBadgeProps } from "./types";

export const NeedCardBadge = ({ status }: NeedCardBadgeProps): ReactNode => {
  let colors = {
    bg:
      status === "SUBMITTED"
        ? "fill-informative-opacity-8"
        : status === "ACCEPTED"
          ? "fill-positive-opacity-8"
          : "fill-error-opacity-8",
    text:
      status === "SUBMITTED"
        ? "text-informative"
        : status === "ACCEPTED"
          ? "text-positive"
          : "text-error",
  };

  return (
    <div className="absolute top-0 left-[28px] w-fit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="116"
        height="22"
        viewBox="0 0 116 22"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 0C23.1863 0 9.81047 22 31.0429 22H84.9571C106.176 22 92.8 0 116 0H0Z"
          className={`${colors.bg}`}
        />
      </svg>
      <span
        className={`absolute block top-0 left-0 right-0 w-auto text-center pt-2 first-letter:uppercase text-label-small ${colors.text}`}
      >
        {status.toLowerCase()}
      </span>
    </div>
  );
};
