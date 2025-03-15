"use client";

import { Suspense, useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import { notFound, useSearchParams } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";

import { AUTH_ROUTES } from "@/constants";
import { useGoogleRedirectMutation } from "@/services/auth";
import { setTokens } from "@/utils";

function CheckAuthContent() {
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const [googleRedirect] = useGoogleRedirectMutation();

  const state = searchParams.get("state") || "";
  const code = searchParams.get("code") || "";
  const error = searchParams.get("error") || "";

  const isNotValidParam = !state || !code;

  useEffect(() => {
    if (isNotValidParam) {
      return notFound();
    }
  }, [isNotValidParam]);

  useEffect(() => {
    const handleGoogleRedirect = async () => {
      if (code && state) {
        try {
          const { token, status } = await googleRedirect({
            state,
            code,
            error,
          }).unwrap();

          setTokens(token);

          if (status === 200) {
            setTimeout(() => {
              window.location.href = "/";
            }, 1000);
          }
          if (status === 201) {
            setTimeout(() => {
              push(`${AUTH_ROUTES.welcome}?redirect=/`);
            }, 1000);
          }
        } catch (error) {
          console.log("token error:", error);
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        }
      }
    };

    handleGoogleRedirect();
  }, [code, state, error, googleRedirect]);

  return (
    <div className="flex flex-col gap-6 justify-center items-center h-[70vh]">
      <div className="text-label-large text-on-surface">
        We’re confirming your access. This won’t take long!
      </div>
      <CircularProgress />
    </div>
  );
}

export default function CheckAuth() {
  return (
    <Suspense>
      <CheckAuthContent />
    </Suspense>
  );
}
