"use client";

import { useEffect } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import { useRouter } from "nextjs-toploader/app";
import { useCountdown } from "usehooks-ts";

import { ROUTES } from "@/constants";
import { useDeleteAccountMutation } from "@/services/user";
import { destroyToken } from "@/utils";

export const DeleteAccount = () => {
  const { back, push } = useRouter();

  const [deleteAccount, { isLoading }] = useDeleteAccountMutation();

  const [count, { startCountdown }] = useCountdown({
    countStart: 30,
    intervalMs: 1000,
  });

  useEffect(() => {
    startCountdown();
  }, []);

  const handleDeleteAccount = async () => {
    try {
      await deleteAccount().unwrap();
      destroyToken();
      setTimeout(() => {
        push(ROUTES.home);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-16 bg-surface-container-lowest rounded-medium space-y-32 h-[45vh] md:h-full flex flex-col">
      <div>
        <h4 className="text-title-large text-on-surface">Delete Account</h4>
        <p className="text-body-small text-on-surface-variant">
          Permanently remove your account and all associated data.
        </p>
      </div>
      <p className="text-body-medium text-on-surface-variant">
        Deleting your account is permanent and cannot be undone. All your data,
        including your profile, settings, and history, will be permanently
        erased.
      </p>
      <div className="flex flex-col gap-6 justify-end items-center md:flex-row grow">
        <Button variant="text" className="w-full md:w-auto" onClick={back}>
          Cancel
        </Button>
        <LoadingButton
          variant="error"
          className="w-full md:w-[192px]"
          disabled={count > 0}
          loading={isLoading}
          onClick={handleDeleteAccount}
        >
          Delete Account {!!count && `(${count})`}
        </LoadingButton>
      </div>
    </div>
  );
};
