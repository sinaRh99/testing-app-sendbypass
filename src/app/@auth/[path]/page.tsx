"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";

import { Modal } from "@/components";
import {
  ConfirmNewPassword,
  ReadyToUse,
  ResetPassword,
  SetNewPassword,
  SignIn,
  SignInWithEmail,
  SignUp,
  SignUpWithEmail,
  SuccessfullEmailSent,
  Welcome,
} from "@/components/pages/auth";
import { AUTH_ROUTES, ROUTES } from "@/constants";

export default function ParallelRouteAuthPage() {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isAuthRoute = Object.values(AUTH_ROUTES).includes(pathname);

  const handleCloseModal = () => {
    const redirectUrl = searchParams.get("redirect");
    if (redirectUrl) {
      push(redirectUrl);
    } else {
      push(ROUTES.home);
    }
  };

  const handleRedirect = (redirect?: string) => {
    setTimeout(() => {
      if (typeof redirect === "string") {
        push(redirect);
      } else {
        push(ROUTES.home);
      }
    }, 300);
  };

  return (
    <Modal open={isAuthRoute} onClose={handleCloseModal} initialHeight="70%">
      {pathname === AUTH_ROUTES.signin && <SignIn redirect={handleRedirect} />}
      {pathname === AUTH_ROUTES.signinEmail && (
        <SignInWithEmail redirect={handleRedirect} />
      )}
      {pathname === AUTH_ROUTES.signup && <SignUp redirect={handleRedirect} />}
      {pathname === AUTH_ROUTES.signupEmail && (
        <SignUpWithEmail redirect={handleRedirect} />
      )}
      {pathname === AUTH_ROUTES.resetPassword && (
        <ResetPassword redirect={handleRedirect} />
      )}
      {pathname === AUTH_ROUTES.setNewPassword && (
        <SetNewPassword redirect={handleRedirect} />
      )}
      {pathname === AUTH_ROUTES.successfullEmailSent && (
        <SuccessfullEmailSent redirect={handleRedirect} />
      )}
      {pathname === AUTH_ROUTES.successfullResetPassword && (
        <SuccessfullEmailSent redirect={handleRedirect} isAfterResetPassword />
      )}
      {pathname === AUTH_ROUTES.confirmNewPassword && (
        <ConfirmNewPassword redirect={handleRedirect} />
      )}
      {pathname === AUTH_ROUTES.welcome && (
        <Welcome redirect={handleRedirect} />
      )}
      {pathname === AUTH_ROUTES.readyToUse && (
        <ReadyToUse redirect={handleRedirect} />
      )}
    </Modal>
  );
}
