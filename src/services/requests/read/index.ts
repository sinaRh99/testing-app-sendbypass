import { sendbypassApi } from "@/services/base";
import { RequestResponse } from "@/services/types";

import { RequestParams, RequestsResponse } from "./types";

export const readRequestsApi = sendbypassApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getRequests: builder.query<RequestsResponse, Partial<RequestParams> | void>(
      {
        query: (params) => {
          return {
            url: "/requests",
            params,
          };
        },
        providesTags: ["requests"],
      },
    ),
    getRequest: builder.query<RequestResponse, string | number>({
      query: (id) => {
        return {
          url: `/requests/${id}`,
        };
      },
    }),
  }),
});
