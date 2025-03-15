"use client";

import { useToggle } from "usehooks-ts";

import { Modal } from "@/components";

import { UseUserProfileModal, UseUserProfileModalResult } from "./types";
import { UserProfile } from "./UserProfile";

export const useUserProfileModal = ({
  id,
  user,
}: UseUserProfileModal): UseUserProfileModalResult => {
  const [isOpen, toggleProfile] = useToggle(false);

  const Profile = (
    <Modal open={isOpen} onClose={toggleProfile} initialHeight="70%">
      <UserProfile id={id} user={user} />
    </Modal>
  );

  return {
    isOpen,
    toggleProfile,
    UserProfile: Profile,
  };
};
