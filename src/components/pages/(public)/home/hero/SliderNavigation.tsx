import { Children, isValidElement, ReactNode } from "react";

import { Icon } from "@/components/shared/Icon";
import { BaseComponentProps } from "@/components/types";
import { cn } from "@/utils";

import { LargeArrow } from "./LargeArrow";
import { RecentSearch } from "./RecentSearch";
import { SearchBox } from "./SearchBox";
import { SmallArrow } from "./SmallArrow";
import { NavItemProps } from "./types";

export const NavItem = ({
  progress,
  isNext = false,
  disabled,
  onChange,
}: NavItemProps) => {
  const circleRadius = 18;
  const circleCircumference = 2 * Math.PI * circleRadius;
  return (
    <button
      type="button"
      className={cn(
        "flex justify-center items-center p-4 rounded-full cursor-pointer size-40 bg-background-opacity-16 text-inverse-on-surface",
      )}
      disabled={disabled}
      onClick={onChange}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" className="absolute">
        <circle
          cx="20"
          cy="20"
          r={circleRadius}
          stroke="rgb(var(--background-opacity-16))"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="20"
          cy="20"
          r={circleRadius}
          stroke={isNext ? "rgb(var(--inverse-on-surface))" : "none"}
          strokeWidth="2"
          fill="none"
          strokeDasharray={circleCircumference}
          strokeDashoffset={
            circleCircumference - progress * circleCircumference
          }
          style={{
            transition: "stroke-dashoffset 0.3s ease",
          }}
        />
      </svg>
      <Icon
        className={cn("text-headline-small")}
        name={isNext ? "Chevron Right MD" : "Chevron Left MD"}
      />
    </button>
  );
};

export const SliderNavigation = ({ children }: BaseComponentProps) => {
  let searchBoxElement: ReactNode = null;
  let recentSearchElement: ReactNode = null;
  const filteredChildren = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === SearchBox) {
      searchBoxElement = child;
      return null;
    }
    if (isValidElement(child) && child.type === RecentSearch) {
      recentSearchElement = child;
      return null;
    }
    return child;
  });
  return (
    <div className="absolute top-80 md:top-[140px] xl:top-[176px] z-10 mx-auto w-full px-32 md:px-48">
      <div className="flex justify-between">{filteredChildren}</div>
      <div className="hidden md:block">
        {searchBoxElement}
        {recentSearchElement}
      </div>
      <SmallArrow className="absolute top-40 right-[248px] hidden md:block" />
      <LargeArrow className="block absolute top-20 right-1/2 md:hidden" />
    </div>
  );
};

SliderNavigation.NavItem = NavItem;
