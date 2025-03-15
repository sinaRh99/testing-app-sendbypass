"use client";
import { type ReactNode } from "react";

import { BADGE_COLORS } from "@/constants/trips";

import { BadgeTripProps } from "./types";

type TripStatus = keyof typeof BADGE_COLORS;

export const BadgeTrip = ({
  status,
  className = "",
}: BadgeTripProps): ReactNode => {
  const getBadgeColors = (status: TripStatus) => {
    const statusKey = status.toLowerCase() as TripStatus;
    return {
      bg: BADGE_COLORS[statusKey]?.bgColor ?? BADGE_COLORS.default.bgColor,
      text:
        BADGE_COLORS[statusKey]?.textColor ?? BADGE_COLORS.default.textColor,
    };
  };

  const { bg, text } = getBadgeColors(status);

  return (
    <div className={`relative ${className}`}>
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
          fill={bg}
        />
      </svg>
      <span
        className={`absolute block top-0 mx-auto left-0 right-0 w-auto 
                           text-center pt-2 first-letter:uppercase text-label-small ${text}`}
      >
        {status.toLowerCase()}
      </span>
    </div>
  );
};
