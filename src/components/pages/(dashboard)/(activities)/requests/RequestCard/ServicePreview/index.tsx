import { FC } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";

import { Icon } from "@/components/shared";
import { RequestType } from "@/enums/requests";
import { cn, DEFAULT_CURRENCY } from "@/utils";

import { ServiceInfo } from "../ServiceInfo";

import { ServicePreviewProps } from "./types";

export const ServicePreview: FC<ServicePreviewProps> = ({ type }) => {
  return (
    <div className="p-24 rounded-large bg-surface-container-lowest space-y-16 w-full lg:w-[938px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <div>
            <p className="text-title-medium text-on-surface">Request preview</p>
            <span className="text-body-small text-on-surface-variant">
              Review the information carefully{" "}
            </span>
          </div>
        </div>
        <IconButton color="tonal">
          <Icon name="Close remove" className="text-[24px]" />
        </IconButton>
      </div>

      <div className="px-12 py-8 space-y-6 rounded-small lg:space-y-8 bg-surface-container-low">
        <div className="hidden text-label-medium text-outline lg:block">
          Your need
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex justify-between items-center w-full">
            <div>
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
          <div className="mt-6 space-y-4 lg:hidden">
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
        </div>
      </div>

      <div className="flex gap-16 items-center">
        <Avatar
          sx={{ width: 50, height: 50 }}
          className="border-2 border-outline-variant"
        />
        <div className="space-y-2">
          <div className="flex gap-4 items-center">
            <span className="text-label-large-prominent text-on-surface">
              Amanda SmithR
            </span>
            <Icon
              name="Check badge 2"
              className="text-[20px] text-informative"
            />
          </div>
          <div className="flex gap-4 items-center">
            {0 === 0 ? (
              <span className="text-outline-variant text-body-small">
                Not rated
              </span>
            ) : (
              <span className="text-on-surface-variant text-label-large">
                {4.9}
              </span>
            )}
            <Rating
              value={0}
              size="small"
              disabled
              icon={
                <Icon name="Star bold" className="text-warning text-[16px]" />
              }
              emptyIcon={
                <Icon
                  name={0 === 0 ? "Star bold" : "Star"}
                  className={cn("text-warning text-[16px]", {
                    "text-outline-variant": 0 === 0,
                  })}
                />
              }
            />
          </div>
        </div>
      </div>
      <ServiceInfo />
      <Divider className="!hidden lg:!block" />

      <div className="flex flex-col w-full lg:flex-row lg:items-center lg:justify-between">
        <div className="flex justify-between items-center px-16 py-12 lg:px-0 lg:py-0 rounded-small bg-surface-container-low lg:bg-transparent lg:gap-0 lg:items-start lg:flex-col md:pr-16">
          <div className="whitespace-nowrap text-title-small text-on-surface lg:text-label-small lg:text-outline">
            Proposed Price
          </div>
          <div className="text-title-medium text-on-surface">
            {DEFAULT_CURRENCY.symbol}15.00
          </div>
        </div>
        <Divider className="lg:!hidden !block !my-16" />
        <div className="flex gap-8 items-center w-full lg:justify-end">
          <Button variant="text" className="w-full lg:w-auto">
            Cancel
          </Button>
          {type === RequestType.Withdraw && (
            <Button variant="error" className="w-full lg:w-auto">
              Withdraw
            </Button>
          )}
          {type === RequestType.Accept && (
            <Button variant="success" className="w-full lg:w-auto">
              Accept and Continue
            </Button>
          )}
          {type === RequestType.Reject && (
            <Button variant="error" className="w-full lg:w-auto">
              Reject
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
