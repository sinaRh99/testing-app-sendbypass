import { Stats } from "@/services/types";

export interface ProfileResponse {
  register_time: string;
  addresses: Address[];
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
  type: string;
  business_name?: string;
}

export interface Address {
  city: string;
  longitude: number;
  latitude: number;
  id: number;
  country_iso2: string;
  country_iso3: string;
  country: string;
  district: string;
  area: string;
  zone: string;
  description: string;
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

export interface ProfilePatchBody {
  first_name: string;
  last_name: string;
  bio: string;
  image: string | File | null;
  background: string | File | null;
  speak_languages: string[];
  type?: string;
}
