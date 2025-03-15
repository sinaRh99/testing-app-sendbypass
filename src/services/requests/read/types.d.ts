import { RequestResponse } from "@/services/types";

export interface RequestParams {
  limit: number;
  offset: number;
  ordering: string;
}

export interface RequestsResponse {
  count: number;
  next: string;
  previous: string;
  results: RequestResponse[];
}
