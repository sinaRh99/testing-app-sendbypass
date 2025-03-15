import { FC } from "react";

import { Icon } from "@/components/shared";
import { DEFAULT_CURRENCY } from "@/utils";

import { RequestBadge } from "../RequestBadge";

import { ServiceHeaderProps } from "./types";

export const ServiceHeader: FC<ServiceHeaderProps> = ({ inbox }) => {
  return (
    <div>
      <div className="relative h-[22px]">
        <RequestBadge />
      </div>
      <div className="flex flex-col gap-16 pr-16 pb-8 pl-24 lg:flex-row lg:items-center">
        <div className="flex gap-16 items-center w-full">
          <div className="size-[56px] rounded-small bg-primary-opacity-8 flex items-center justify-center">
            <Icon name="bag" className="text-[24px] text-primary" />
          </div>
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
            <div className="flex gap-12 items-center">
              <div className="flex gap-4 items-center text-title-medium text-on-surface">
                <span>Service:</span>
                <div>
                  <span>Cargo</span>
                </div>
              </div>
              <div className="hidden gap-8 items-center lg:flex text-label-medium text-on-surface">
                <div className="space-x-4">
                  <span>Vilnius, Lithuania </span>
                  <span>(VNO)</span>
                </div>
                <Icon name="Arrow Left MD" className="text-[16px]" />
                <div className="space-x-4">
                  <span>Frankfurt, Germany</span>
                  <span>(FRA)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 lg:hidden">
          <div className="flex justify-between items-center">
            <p className="text-label-medium text-outline">Origin:</p>
            <p className="text-label-medium-prominent text-on-surface">
              Vilnius, Lithuania (VNO)
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-label-medium text-outline">Destination:</p>
            <p className="text-label-medium-prominent text-on-surface">
              Frankfurt, Germany (FRA)
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-label-medium text-outline">Per Kilo</p>
            <p className="text-label-medium-prominent text-on-surface">
              {DEFAULT_CURRENCY.symbol}15.00
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-label-medium text-outline">Up to</p>
            <p className="text-label-medium-prominent text-on-surface">
              <span>8</span> <sub className="mt-8">Kg</sub>
            </p>
          </div>
        </div>
        <div className="hidden gap-24 items-center lg:flex">
          <div className="flex justify-between items-center md:items-start md:justify-start md:flex-col md:pr-16">
            <div className="whitespace-nowrap text-label-small text-outline">
              Up to
            </div>
            <div className="flex space-x-2 text-title-medium text-on-surface">
              <span>8</span> <sub className="mt-12">Kg</sub>
            </div>
          </div>
          <div className="flex justify-between items-center md:items-start md:justify-start md:flex-col md:pr-16">
            <div className="whitespace-nowrap text-label-small text-outline">
              Per Kilo
            </div>
            <div className="text-title-medium text-on-surface">
              {DEFAULT_CURRENCY.symbol}15.00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
