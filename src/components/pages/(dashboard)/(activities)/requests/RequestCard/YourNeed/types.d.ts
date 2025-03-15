export interface YourNeedProps {
  onClose: () => void;
}

export interface AirportProps {
  origin?: boolean;
  name: string;
  iata_code: string;
  country: string;
  date: string;
}
