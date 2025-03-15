export interface SendResetPasswordLinkBody {
  email: string;
  redirect: string;
  type: "RESET_PASSWORD" | "VERIFY_EMAIL";
}

export interface ResetPasswordBody {
  user: string;
  token: string;
  password: string;
  confirm_password: string;
}
