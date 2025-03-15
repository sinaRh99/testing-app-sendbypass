import { Children, cloneElement, isValidElement } from "react";

import { cn } from "@/utils";

import { Tab } from "./Tab";
import { TabListProps, TabProps } from "./types";

export const TabList = ({
  children,
  className,
  value,
  onChange,
}: TabListProps) => {
  const enhancedChildren = Children.map(children, (child) => {
    if (isValidElement<TabProps>(child) && child.type === Tab) {
      return cloneElement(child, {
        isSelected: child.props.value === value,
        onClick: () => onChange?.(child.props.value),
      });
    }
    return child;
  });

  return (
    <div className={cn("flex gap-8 items-center", className)}>
      {enhancedChildren}
    </div>
  );
};

TabList.Tab = Tab;
