import { cn } from "@/utils";

import { Icon } from "../Icon";

import { TabProps } from "./types";

export const Tab = ({
  isSelected,
  icon,
  children,
  onClick,
  className,
}: TabProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col gap-8 items-center px-16 transition-all duration-200 md:flex-row py-[14px] rounded-small group hover:bg-on-surface-opacity-8 text-title-small text-on-surface hover:text-on-surface",
        {
          "hover:bg-secondary-opacity-8 text-title-small text-secondary hover:text-secondary bg-secondary-opacity-8":
            isSelected,
        },
        className,
      )}
    >
      {icon && (
        <Icon
          className={cn(`text-[20px] text-on-surface`, {
            "text-secondary": isSelected,
          })}
          name={icon}
        />
      )}
      <div
        className={cn(
          "transition-colors duration-200 text-on-surface-variant text-title-small",
        )}
      >
        {children}
      </div>
    </button>
  );
};
