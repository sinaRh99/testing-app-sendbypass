"use client";

import { useEffect, useRef } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import { useSearchParams } from "next/navigation";

import { CheckBadge } from "@/components/icons";
import { AUTH_ROUTES, ROUTES } from "@/constants";
import { useVerifyEmailMutation } from "@/services/auth/verify-email";

import { AuthForm } from "../AuthForm";
import { AuthFormProps } from "../types";

export const ReadyToUse = ({ redirect }: AuthFormProps) => {
  const searchParams = useSearchParams();
  const [verifyEmail, { isLoading, isUninitialized }] =
    useVerifyEmailMutation();
  const hasCalled = useRef(false);

  useEffect(() => {
    if (hasCalled.current) return;

    const token = searchParams.get("token");
    const user = searchParams.get("user");

    if (token && user && !isLoading && isUninitialized) {
      hasCalled.current = true;
      verifyEmail({ token, user })
        .unwrap()
        .catch((error) => {
          console.log(error);
          redirect(ROUTES.home);
        });
    }
  }, []);

  const handleGoToSignIn = () => {
    const params = new URLSearchParams(searchParams.toString());
    redirect(`${AUTH_ROUTES.signin}?${params.toString()}`);
  };

  return (
    <AuthForm className="flex-col lg:flex-row" redirect={redirect}>
      <div className="flex flex-col items-center text-center w-full md:w-[380px]">
        <CheckBadge />
        <h5 className="text-title-large text-on-surface">
          You&apos;re all set!
        </h5>
        <div className="mt-16 mb-40">
          <h6 className="text-title-medium text-on-surface">
            Your account is ready to use.{" "}
          </h6>
          <span className="text-body-medium text-on-surface-variant">
            Thanks for joining us!{" "}
          </span>
        </div>
        <div className="flex flex-col gap-12 items-center w-full lg:flex-row">
          <LoadingButton
            loading={isLoading}
            fullWidth
            onClick={handleGoToSignIn}
            variant="filled"
          >
            Get Started{" "}
          </LoadingButton>
        </div>
      </div>
    </AuthForm>
  );
};
