"use client";

import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useSearchParams } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";

import { Chip, RoundedTabList, VerticalTabs } from "@/components";
import {
  REQUESTS_TABS,
  REQUETS_STATUSES,
} from "@/constants/activities/requests";

export const RequestsSidebar = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("type") as string;

  const status = searchParams.get("status") || "all";

  const setSearchParams = (newParams: URLSearchParams) => {
    replace(`?${newParams.toString()}`, { scroll: false });
  };

  const handleChangeParam = (param: string, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set(param, value);
    setSearchParams(newParams);
  };

  return (
    <div>
      <div className="md:hidden">
        <RoundedTabList
          className="mb-16 w-full"
          value={activeTab}
          onChange={(value) => handleChangeParam("type", value)}
        >
          {REQUESTS_TABS.map(({ label, value }) => (
            <RoundedTabList.Tab key={value} value={value}>
              {label}
            </RoundedTabList.Tab>
          ))}
        </RoundedTabList>
        <div className="flex justify-between items-center my-12">
          <div className="flex gap-4">
            {REQUETS_STATUSES.map(({ value, label }) => (
              <Chip
                key={value}
                color={status === value ? "active" : "surface"}
                onClick={() => handleChangeParam("type", value)}
                label={label}
                hideIcon
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[204px] relative">
        <div className="hidden sticky top-0 flex-col w-full md:flex">
          <div className="p-12 w-full bg-surface-container-lowest rounded-medium ">
            <VerticalTabs
              value={activeTab}
              onChange={(value) => handleChangeParam("type", value)}
            >
              {REQUESTS_TABS.map(({ label, value, icon }) => (
                <VerticalTabs.Tab key={value} value={value} icon={icon}>
                  {label}
                </VerticalTabs.Tab>
              ))}
            </VerticalTabs>
          </div>
          <div className="p-12 mt-8 w-full bg-surface-container-lowest rounded-medium">
            <div className="mb-6 text-label-large text-on-surface">
              Request type{" "}
              <RadioGroup
                value={status}
                onChange={(event) =>
                  handleChangeParam("status", event.target.value)
                }
              >
                {REQUETS_STATUSES.map(({ value, label }) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio />}
                    label={<span className="text-body-small">{label}</span>}
                  />
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
