"use client";

import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import { useToggle } from "usehooks-ts";

import { Icon, Modal } from "@/components/shared";
import { RequestType } from "@/enums/requests";
import { cn, DEFAULT_CURRENCY } from "@/utils";

import { FlightInfo } from "../FlightInfo";
import { RequestPreview } from "../RequestPreview";

export const RequestTrip = () => {
  const [previewType, setPreviewType] = useState<RequestType | undefined>();
  const [isExpanded, toggleExpanded] = useToggle();

  return (
    <div className="py-12 px-12 rounded-medium bg-surface-container-lowest lg:px-16">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-16 lg:w-[300px]">
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
        <div className="hidden pr-16 lg:block">
          <div className="whitespace-nowrap text-label-small text-outline">
            Proposed Price
          </div>
          <div className="text-title-medium text-on-surface">
            {DEFAULT_CURRENCY.symbol}15.00
          </div>
        </div>
        <div className="hidden pr-16 lg:block">
          <div className="whitespace-nowrap text-label-small text-outline">
            Request date and time
          </div>
          <div className="flex gap-8 items-center">
            <div className="text-title-medium text-on-surface">Thu 17 Oct</div>
            <Divider flexItem orientation="vertical" className="!my-4" />
            <div className="text-title-medium text-on-surface">18:35</div>
          </div>
        </div>
        <div className="flex gap-20 items-center">
          <div className="hidden gap-12 items-center lg:flex">
            <IconButton
              color="outlined"
              sx={{ width: 32, height: 32 }}
              className="!border-surface-dim"
              onClick={() => setPreviewType(RequestType.Withdraw)}
            >
              <Icon name="Close remove" className="text-[20px] text-primary" />
            </IconButton>
            <IconButton
              color="outlined"
              sx={{ width: 32, height: 32 }}
              className="!border-surface-dim"
              onClick={() => setPreviewType(RequestType.Accept)}
            >
              <Icon name="Checkmark" className="text-[20px] text-primary" />
            </IconButton>
          </div>
          <IconButton
            color="standard"
            sx={{ width: 32, height: 32 }}
            className="!border-surface-dim transition-transform duration-300"
            onClick={toggleExpanded}
          >
            <Icon
              name="Caret Down MD"
              className={`text-[20px] text-primary transform transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}
            />
          </IconButton>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <FlightInfo />
      </div>
      <div className="lg:hidden">
        <Divider className="!my-12" />
        <div className="flex justify-between items-center">
          <div className="pr-16">
            <div className="whitespace-nowrap text-label-small text-outline">
              Proposed Price
            </div>
            <div className="text-title-medium text-on-surface">
              {DEFAULT_CURRENCY.symbol}15.00
            </div>
          </div>
          <div className="flex gap-12 items-center">
            <IconButton
              color="outlined"
              sx={{ width: 32, height: 32 }}
              className="!border-surface-dim"
            >
              <Icon name="Close remove" className="text-[20px] text-primary" />
            </IconButton>
            <IconButton
              color="outlined"
              sx={{ width: 32, height: 32 }}
              className="!border-surface-dim"
            >
              <Icon name="Checkmark" className="text-[20px] text-primary" />
            </IconButton>
          </div>
        </div>
      </div>
      <Modal open={!!previewType} onClose={() => setPreviewType(undefined)}>
        {previewType && <RequestPreview type={previewType} />}
      </Modal>
    </div>
  );
};
