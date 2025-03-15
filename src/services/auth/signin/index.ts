import { sendbypassApi } from "@/services/base";
import { setTokens } from "@/utils";

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
        setTokens(response);
      },
    }),
  }),
});

export const { useSignInMutation } = signinApi;
