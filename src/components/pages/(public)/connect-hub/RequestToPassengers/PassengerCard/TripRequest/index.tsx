import { FC, useState } from "react";

import IconButton from "@mui/material/IconButton";

import { Icon } from "@/components/shared";
import { cn } from "@/utils";

import { RequestForm } from "./RequestForm";
import { TripReview } from "./TripReview";
import { TripRequestProps } from "./types";

export const TripRequest: FC<TripRequestProps> = ({
  flight,
  description,
  service,
  onClose,
  callback,
  ...passengerInfo
}) => {
  const [tab, setTab] = useState(1);

  const handleChangeTab = (value: number) => setTab(value);

  return (
    <div className="p-24 rounded-large bg-surface-container-lowest space-y-16 lg:w-[800px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-8 items-center">
          {tab === 2 && (
            <IconButton color="standard" onClick={() => handleChangeTab(1)}>
              <Icon
                name="Arrow Right MD"
                className="text-[24px] text-on-surface"
              />
            </IconButton>
          )}
          <div>
            <p className="text-title-medium text-on-surface">
              Submit your request
            </p>
            <span className="text-body-small text-on-surface-variant">
              Review the information carefully
            </span>
          </div>
        </div>
        <div className="flex gap-32 items-center">
          <div className="flex gap-6 items-center">
            <div
              className={cn("flex items-center gap-4", {
                "text-primary": tab === 1,
                "text-outline-variant": tab !== 1,
              })}
            >
              <Icon name="Number 1 Circle" className="text-[20px]" />
              <p className="text-label-medium-prominent">Review</p>
              <Icon name="Chevron Right MD" className="text-[20px]" />
            </div>
            <div
              className={cn("flex items-center gap-4", {
                "text-primary": tab === 2,
                "text-outline-variant": tab !== 2,
              })}
            >
              <Icon name="Number 2 Circle" className="text-[20px]" />
              <p className="text-label-medium-prominent">Select Trip</p>
            </div>
          </div>
          <IconButton color="tonal" onClick={onClose}>
            <Icon name="Close remove" className="text-[24px]" />
          </IconButton>
        </div>
      </div>
      {tab === 1 && (
        <TripReview
          flight={flight}
          description={description}
          service={service}
          {...passengerInfo}
          onClose={onClose}
          handleNext={() => handleChangeTab(2)}
        />
      )}
      {tab === 2 && (
        <RequestForm
          serviceId={service?.id}
          cost={service?.wage}
          onClose={onClose}
          callback={callback}
        />
      )}
    </div>
  );
};
