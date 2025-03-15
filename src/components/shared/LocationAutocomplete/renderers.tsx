import { Icon, TabList } from "@/components/shared";
import { DESKTOP_TABS, MOBILE_TABS } from "@/constants/home";
import { LOCATION_TYPE } from "@/enums/location";

import { Option } from "./types";

export const renderTabs = (tabs: typeof DESKTOP_TABS | typeof MOBILE_TABS) =>
  tabs.map(({ label, value, icon }) => (
    <TabList.Tab key={value} value={value} icon={icon}>
      {label}
    </TabList.Tab>
  ));

export const renderLocationIcon = (type: keyof typeof LOCATION_TYPE) => {
  switch (type) {
    case "AIRPORT":
      return <Icon name="plane take off line" className="text-[20px]" />;
    case "COUNTRY":
      return <Icon name="Pin" className="text-[20px]" />;
    case "CITY":
      return <Icon name="Building office" className="text-[20px]" />;
    default:
      return <Icon name="World location" className="text-[20px]" />;
  }
};

export const getOptionLabel = (option: Option) => {
  if (!option || !option.label) {
    return "";
  }
  if (option.type === "CITY") {
    return option.label.city;
  }
  if (option.type === "AIRPORT") {
    return option.label.airport;
  }
  if (option.type === "GENERIC") {
    return option.label.airport;
  }
  return option.label.country;
};

export const renderOptionValue = (option: Option) => (
  <div>
    {option.type === "COUNTRY" && (
      <p className="text-label-large">{option.label.country}</p>
    )}
    {option.type === "CITY" && (
      <div>
        <p className="text-label-large">{option.label.city}</p>
        <span className="text-body-small text-outline">
          {option.label.country}
        </span>
      </div>
    )}
    {(option.type === "AIRPORT" || option.type === "GENERIC") && (
      <div>
        <p className="text-label-large">{option.label.airport}</p>
        <span className="space-x-4 text-body-small text-outline">
          <span>{option.label.city}</span>,<span>{option.label.country}</span>
        </span>
      </div>
    )}
  </div>
);

export const renderOption = (
  // eslint-disable-next-line no-unused-vars
  { key, ...props }: any,
  option: Option,
  showZipCode?: boolean,
) => (
  <li
    key={option.id}
    {...props}
    className="flex gap-8 items-center py-12 px-8 cursor-pointer text-on-surface"
  >
    {renderLocationIcon(option.type)}
    {showZipCode && (
      <span className="text-body-small text-outline">(+{option.zip_code})</span>
    )}
    {renderOptionValue(option)}
  </li>
);
