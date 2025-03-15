import { BaseComponentProps } from "@/components/types";
import { LOCATION_TYPE } from "@/enums/location";

export interface NavItemProps {
  progress: number;
  isNext?: boolean;
  onChange?: () => void;
  disabled?: boolean;
}

export type SearchHistoryItem = {
  from: Option;
  to: Option;
  tab: string;
};
