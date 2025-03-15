export declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage: (message: string) => void;
    };
  }
}

export interface TripsResponse {
  count: number;
  next: string;
  previous: string;
  results: TripResponse[];
}

export interface TripResponse {
  id: number;
  flight: Flight;
  ticket_number: string;
  services: ServicesType;
  image: string;
  description: string;
  status: string;
  user_data: UserData;
  visible: boolean;
  publish_status: string;
  source?: number;
  source_data?: Location;
  destination?: number;
  destination_data?: Location;
}

export interface ServicesType extends Record<string, ServiceType> {
  "shipping:visible_load": Service;
  "shipping:document": Service;
  "shopping:visible_load": Service;
}

export interface Flight {
  source: Destination;
  destination: Destination;
  number: string;
  airline: string;
}

export interface Destination {
  location: number | null;
  location_data: LocationData;
  since: string | Date;
  to: string | Date;
  comment: string;
}

export interface Airport {
  id: number;
  location: LocationData;
  name: string;
  type: string;
  iata_code: string;
  website: string;
  airport_code: string;
}

export interface LocationData {
  city: string;
  longitude: number;
  latitude: number;
  id: number;
  country_iso2: string;
  country_iso3: string;
  country: string;
  description: string;
  airport?: Airport;
  related_object?: RelatedObject;
  tag?: string;
  type?: string;
}

export interface UserData {
  register_time: string;
  addresses: LocationData[];
  socials: Social[];
  phone_number: PhoneNumber;
  email: string;
  stats: Stats;
  first_name: string;
  last_name: string;
  image: string;
  id: number;
  bio: string;
  background: string;
  website: string;
  current_location: number;
  speak_languages: string[];
  status: string;
  type?: string;
}

export interface Stats {
  avg_rate: number;
  total_successful_orders: number;
}

export interface PhoneNumber {
  zip_code: ZipCode;
  phone: string;
  socials: any[];
}

export interface ZipCode {
  country: string;
  zip_code: string;
}

export interface Social {
  type: string;
  link: string;
  id: number;
}

export interface Service {
  trip: number;
  type: string;
  properties: Properties;
  cost: Cost;
  role: string;
  description: string;
  user?: number;
  id: number;
  user_data: UserData;
  requests?: Array<any>;
}

export interface Cost {
  wage: number;
  fee: number;
  item_price: number;
  unit: string;
}

export interface Properties {
  type: "DOCUMENT" | "CLOTH" | "FOOD" | "ELECTRONIC_GADGET" | "OTHER";
  weight?: number;
  link?: string;
  height?: number;
  width?: number;
  length?: number;
  flexible_dimensions?: boolean;
}
interface RelatedObject {
  type?: string;
  iata_code?: string;
  website?: string;
  airport_code?: string;
  name: string;
  name_ascii?: string;
  iso?: string;
  area_code?: number;
  province?: string;
  province_ascii?: string;
  population?: number;
  country?: number;
  location?: number;
}
export interface LocationsResponse {
  count: number;
  next: string;
  previous: string;
  results: Location[];
}

export interface Location {
  city: string;
  longitude: number;
  latitude: number;
  id: number;
  country_iso2: string;
  country_iso3: string;
  country: string;
  district?: null;
  area?: null;
  zone?: null;
  description: string | null;
  type?: string;
  tag?: string;
  related_object?: RelatedObject;
}

export interface AirportsResponse {
  count: number;
  next: string;
  previous: string;
  results: Airport[];
}

export interface RequirementResponse {
  id: number;
  type: string;
  cost: Cost;
  source: Destination & { location_data: Location };
  destination: Destination & { location_data: Location };
  user: number;
  user_data: UserData;
  properties: Properties;
  status: NeedStatus;
  comment: string;
  image: string;
  name: string;
  role: string;
  publish_status: string;
  created_at: Date;
  updated_at: Date;
  visible: boolean;
}

export interface RequestResponse {
  id: number;
  requirement: number;
  service: number;
  requirement_data: RequirementResponse;
  service_data: ServiceData;
  deal: Deal;
  submitted_by: string;
  accepted_by: string;
  role: string;
  description: string;
  status: string;
  accept_time: Date;
  submit_time: Date;
  end_time: Date;
  traveler_data: UserData;
  customer_data: UserData;
}

export interface Deal {
  cost: number;
  traveler_fee: number;
  requester_fee: number;
}

export interface ServiceData {
  trip: number;
  type: string;
  properties: Properties;
  cost: Cost;
  role: string;
  description: string;
  user: number;
  id: number;
  user_data: UserData;
}

export interface ServiceResponse {
  trip: number;
  trip_data: TripResponse;
  type: string;
  properties: Properties;
  cost: Cost;
  role: string;
  description: string;
  user: number;
  id: number;
  user_data: UserData;
}

export type NeedStatus = "SUBMITTED" | "ACCEPTED" | "REJECTED";
