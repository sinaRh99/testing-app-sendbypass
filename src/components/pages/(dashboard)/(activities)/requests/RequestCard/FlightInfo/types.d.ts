import { BaseComponentProps } from "@/components/types";

export interface AirportProps extends BaseComponentProps {
  origin?: boolean;
  name: string;
  iata_code: string;
  country: string;
  city: string;
  time: string;
  date: string;
}
