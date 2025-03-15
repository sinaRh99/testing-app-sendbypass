"use client";
import { useState } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { Icon, Modal } from "@/components";
import { CheckBadge } from "@/components/icons";
import { useProfileQuery, useUpdateProfileMutation } from "@/services/profile";

export const useBusinessAccountModals = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const { data: profile } = useProfileQuery();

  const openBussinessAccountModal = () => setIsOpen(true);
  const closeBussinessAccountModal = () => setIsOpen(false);
  const openSuccessModal = () => setIsSuccessModalOpen(true);
  const closeSuccessModal = () => setIsSuccessModalOpen(false);

  const handleSwitchToBusiness = async () => {
    try {
      await updateProfile({ type: "BUSINESS" }).unwrap();
      closeBussinessAccountModal();
      openSuccessModal();
    } catch (error) {
      console.error("Error switching to business account:", error);
    }
  };

  const SuccessModal = () => (
    <Modal
      open={isSuccessModalOpen}
      onClose={closeSuccessModal}
      initialHeight="60%"
    >
      <div className="p-16 lg:p-24 lg:w-[700px]">
        <div className="flex relative flex-col justify-center items-center">
          <IconButton
            color="outlined"
            className="!w-32 !h-32 rounded-full !absolute right-0 top-0"
            onClick={closeSuccessModal}
          >
            <Icon name="Close remove" className="text-[20px]" />
          </IconButton>
          <CheckBadge />
          <div className="mt-4 text-center text-on-surface text-title-large">
            Success! Your request has been sent.
          </div>
          <div className="text-center text-on-surface text-title-medium">
            Check your email
          </div>
          <div className="mb-16 text-center text-body-medium text-on-surface-variant">
            We will send you an email to verify your information and complete
            the switch to a business account.
          </div>
          <div className="text-center text-body-medium text-on-surface-variant">
            Please check your inbox at
          </div>
          <div className="text-center text-on-surface-variant text-label-large lg:mb-64">
            {profile?.email}
          </div>
          <div className="text-center text-outline text-label-medium">
            If you haven&apos;t gotten the email yet; take a look in your
            <strong> spam/junk </strong>
            folder.
          </div>
        </div>
      </div>
    </Modal>
  );
  const BusinesssAccountModal = () => (
    <Modal
      open={isOpen}
      onClose={closeBussinessAccountModal}
      initialHeight="35%"
    >
      <div className="lg:w-[440px] lg:p-24 p-16">
        <div className="flex justify-between">
          <div className="text-on-surface text-title-medium">
            Switch to Business account
          </div>
          <IconButton
            color="outlined"
            className="!w-32 !h-32 rounded-full"
            onClick={closeBussinessAccountModal}
          >
            <Icon name="Close remove" className="text-[20px]" />
          </IconButton>
        </div>
        <div className="my-16 text-on-surface-variant text-body-medium">
          Are you sure you want to switch from a personal account to a business
          account?
        </div>
        <div className="flex gap-16 lg:justify-end">
          <Button
            variant="text"
            className="w-full lg:w-auto"
            onClick={closeBussinessAccountModal}
          >
            Cancel
          </Button>
          <LoadingButton
            variant="filled"
            onClick={handleSwitchToBusiness}
            loading={isLoading}
            className="w-full lg:w-auto"
          >
            Send request
          </LoadingButton>
        </div>
      </div>
    </Modal>
  );
  return {
    BusinesssAccountModal,
    openBussinessAccountModal,
    SuccessModal,
  };
};
