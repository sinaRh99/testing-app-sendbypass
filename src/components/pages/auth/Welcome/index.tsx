import Button from "@mui/material/Button";

import { Leaves } from "@/components/icons";
import { AUTH_ROUTES } from "@/constants";

import { AuthForm } from "../AuthForm";
import { AuthFormProps } from "../types";

export const Welcome = ({ redirect }: AuthFormProps) => {
  const handleGoToSignIn = () => {
    redirect(AUTH_ROUTES.signin);
  };

  return (
    <AuthForm className="flex-col lg:flex-row" redirect={redirect}>
      <div className="text-center w-full lg:w-[516px]">
        <Leaves />
        <h5 className="text-title-large text-on-surface">
          Welcome to Sendbypass!
        </h5>
        <div className="mt-16 mb-40">
          <h6 className="text-title-medium text-on-surface">
            Your account has been successfully created.{" "}
          </h6>
          <span className="text-body-medium text-on-surface-variant">
            We&apos;re excited to have you with us!{" "}
          </span>
        </div>
        <div className="flex flex-col gap-12 items-center lg:flex-row">
          <Button variant="tonal" fullWidth onClick={handleGoToSignIn}>
            Start Exploring
          </Button>
          <Button fullWidth onClick={handleGoToSignIn}>
            Complete My Profile
          </Button>
        </div>
      </div>
    </AuthForm>
  );
};
