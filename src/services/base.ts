import { createApi } from "@reduxjs/toolkit/query/react";

import { customBaseQuery } from "./baseQuery";

export const sendbypassApi = createApi({
  reducerPath: "sendbypassApi",
  tagTypes: [
    "email",
    "trips",
    "requirements",
    "requests",
    "services",
    "profile",
    "contacts",
    "addresses",
  ],
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
});
