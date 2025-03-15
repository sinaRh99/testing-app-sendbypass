import { sendbypassApi } from "@/services/base";
import { makeFormData } from "@/utils";

import { ProfilePatchBody, ProfileResponse } from "./types";

export const profileApi = sendbypassApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    profile: builder.query<ProfileResponse, void>({
      query: () => "/profile",
      providesTags: ["profile"],
    }),
    updateProfile: builder.mutation<void, Partial<ProfilePatchBody>>({
      query: (data) => {
        const body = makeFormData(data);

        return {
          url: "/profile",
          method: "PATCH",
          body,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
      },
    }),
  }),
});

export const {
  useProfileQuery,
  useLazyProfileQuery,
  useUpdateProfileMutation,
} = profileApi;
