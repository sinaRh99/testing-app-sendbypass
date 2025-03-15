import { sendbypassApi } from "@/services/base";

import { EmailResponse, StoreEmailResponse } from "./types";

export const emailApi = sendbypassApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    storeEmail: builder.mutation<StoreEmailResponse, string>({
      query: (email: string) => {
        const url = `${process.env.NEXT_PUBLIC_LOCALHOST_API_URL}/api/auth`;
        return {
          url,
          method: "POST",
          body: { email },
        };
      },
      invalidatesTags: ["email"],
    }),
    getEmail: builder.query<EmailResponse, void>({
      query: () => {
        const url = `${process.env.NEXT_PUBLIC_LOCALHOST_API_URL}/api/auth`;
        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["email"],
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useStoreEmailMutation, useGetEmailQuery } = emailApi;
