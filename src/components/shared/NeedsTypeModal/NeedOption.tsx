import { FC } from "react";

import Link from "next/link";

import { Icon } from "@/components";

import { NeedOptionProps } from "./types";
export const NeedOption: FC<NeedOptionProps> = ({
  title,
  icon,
  description,
  href,
  onClose,
}) => {
  const handleClick = () => {
    if (onClose) onClose();
  };
  return (
    <Link href={href} onClick={handleClick}>
      <div className="border-2 border-surface-container-highest rounded-medium py-16 px-24 md:p-32 flex flex-row md:flex-col md:justify-center items-center gap-12">
        <Icon
          name={icon}
          className="text-[24px] text-on-surface-variant md:mb-4"
        />

        <div>
          <div className="text-on-surface text-title-medium md:mb-6 md:text-center">
            {title}
          </div>

          <div className="text-body-small text-on-surface-variant md:text-center">
            {description}
          </div>
        </div>
      </div>
    </Link>
  );
};
