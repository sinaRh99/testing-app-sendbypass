import { sendbypassApi } from "@/services/base";
import { setTokens } from "@/utils";
import { deepLink } from "@/utils/deepLink";

import { SignInBody, SignInResponse } from "./types";

export const signinApi = sendbypassApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    signIn: builder.mutation<void, SignInBody>({
      query: (body) => {
        const url = `/login`;
        return {
          url,
          method: "POST",
          body,
        };
      },
      transformResponse: (response: SignInResponse) => {
        if (process.env.NEXT_PUBLIC_ORIGIN === "app") deepLink(response);
        else setTokens(response);
      },
    }),
  }),
});

export const { useSignInMutation } = signinApi;
