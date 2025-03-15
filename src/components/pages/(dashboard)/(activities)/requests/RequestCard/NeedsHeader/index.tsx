"use client";

import { FC } from "react";

import Image from "next/image";
import { useToggle } from "usehooks-ts";

import { Icon, Modal } from "@/components/shared";
import { DEFAULT_CURRENCY } from "@/utils";

import { RequestBadge } from "../RequestBadge";
import { YourNeed } from "../YourNeed";

import { NeedHeaderProps } from "./types";

export const NeedHeader: FC<NeedHeaderProps> = ({ inbox }) => {
  const [open, toggle] = useToggle();

  return (
    <div>
      <div className="relative h-[22px]">
        <RequestBadge />
      </div>
      <div className="flex flex-col gap-16 pr-16 pb-8 pl-24 lg:flex-row lg:items-center">
        <div className="flex gap-16 items-center w-full">
          <Image
            src="/images/profile-bg-default.jpeg"
            width={70}
            height={70}
            className="min-w-[70px] min-h-[70px] size-[70px] rounded-small"
            alt="Request card image"
          />
          <div className="space-y-6 grow">
            <div className="flex gap-6 items-center">
              <div className="flex gap-4 items-center text-on-surface-variant">
                <Icon
                  name={inbox ? "inbox down" : "inbox up"}
                  className="text-[20px]"
                />
                <span className="text-label-medium-prominent">
                  {inbox ? "Inbox" : "Outbox"}
                </span>
              </div>
              <div className="px-4 text-center rounded-full bg-error text-on-error size-16 text-label-small">
                2
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col gap-4 items-start lg:flex-row text-title-medium text-on-surface">
                <span>Need:</span>
                <div
                  role="button"
                  className="transition-colors duration-200 hover:text-primary"
                  onClick={toggle}
                >
                  Xbox Series X – 2TB Galaxy Black Special Edition
                </div>
              </div>
              <span className="text-label-medium-prominent text-outline">
                Electronic Gadget
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center md:items-start md:justify-start md:flex-col md:pr-16">
          <div className="whitespace-nowrap text-label-small text-outline">
            Proposed Reward
          </div>
          <div className="text-title-medium text-on-surface">
            {DEFAULT_CURRENCY.symbol}15.00
          </div>
        </div>
      </div>
      <Modal open={open} onClose={toggle} initialHeight={"75%"}>
        <YourNeed onClose={toggle} />
      </Modal>
    </div>
  );
};
