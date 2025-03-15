import { Icon } from "@/components";

import { BelongingItemProps } from "./types";

export const BelongingItem = ({ icon, title, caption }: BelongingItemProps) => {
  return (
    <div className="flex flex-col gap-16 items-center py-24 px-16 w-full text-center bg-primary-opacity-8 rounded-medium">
      <Icon name={icon} className="text-[48px] text-primary" />
      <div>
        <h6 className="text-title-medium text-on-surface">{title}</h6>
        <span className="text-body-small text-on-surface-variant">
          {caption}
        </span>
      </div>
    </div>
  );
};
