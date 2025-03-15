"use client";

import { MouseEvent, useState } from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";

import { Icon, TabList } from "@/components/shared";
import { PRIVATE_ROUTES, ROUTES } from "@/constants";
import { MORE_MENU_ITEMS, PROFILE_TABS } from "@/constants/profile";
import { PROFILE_STATUS } from "@/enums/globals";
import { useBusinessAccountModals, useUserProfileModal } from "@/hooks";
import { useProfileQuery } from "@/services/profile";
import { cn } from "@/utils";

import { AddressForm } from "./AddressForm";
import { ContactForm } from "./ContactForm";
import { ProfileForm } from "./ProfileForm";

const renderTabContent = (tab: string) => {
  switch (tab) {
    case "personal":
      return <ProfileForm />;
    case "contact":
      return <ContactForm />;
    case "address":
      return <AddressForm />;
    default:
      return null;
  }
};

export const Profile = () => {
  const [currentTab, setCurrentTab] = useState(PROFILE_TABS[0].value);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { data: profile } = useProfileQuery();

  const { toggleProfile, UserProfile } = useUserProfileModal({
    user: profile,
  });

  const { BusinesssAccountModal, openBussinessAccountModal, SuccessModal } =
    useBusinessAccountModals();

  const { push } = useRouter();

  const open = Boolean(anchorEl);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  const handleShowMore = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMoreItem = (id: number) => {
    switch (id) {
      case 1:
        toggleProfile();
        handleClose();
        break;
      case 2:
        openBussinessAccountModal();
        handleClose();
        break;
      case 3:
        console.log(id);
        handleClose();
        break;
      case 4:
        push(PRIVATE_ROUTES.deleteAccount);
        handleClose();
        break;
    }
  };

  return (
    <div>
      {profile?.status === PROFILE_STATUS.PENDING && (
        <div className="bg-warning absolute w-full inset-x-0 top-[148px] lg:top-[135px] py-8 px-16 text-on-warning flex items-center justify-center gap-8">
          <Icon name="Face ID lock" className="text-[24px]" />
          <span className="text-body-medium">
            Your profile under review, Your changes will be posted after
            approval{" "}
          </span>
          <Link
            href={ROUTES.security}
            className="underline text-label-large-prominent"
          >
            Learn more
          </Link>
        </div>
      )}
      <div
        className={cn(
          "p-16 space-y-32 bg-surface-container-lowest rounded-medium",
          {
            "mt-48": profile?.status === PROFILE_STATUS.PENDING,
          },
        )}
      >
        <div className="flex justify-between items-center">
          <div className="space-y-4 md:pl-8">
            <h1 className="text-title-large text-on-surface">Profile</h1>
            <p className="text-body-small text-on-surface-variant">
              Carefully fill out all three sections.
            </p>
          </div>
          <Button
            variant="text"
            endIcon={<Icon name="Info menu" />}
            className="h-[44px]"
            onClick={handleShowMore}
          >
            More
          </Button>
        </div>
        <div className="space-y-16">
          <TabList
            className="justify-center md:justify-start"
            value={currentTab}
            onChange={handleTabChange}
          >
            {PROFILE_TABS.map((tab) => (
              <TabList.Tab key={tab.value} value={tab.value}>
                {tab.label}
              </TabList.Tab>
            ))}
          </TabList>
          {renderTabContent(currentTab)}
        </div>
        <Menu
          anchorEl={anchorEl}
          sx={{
            "& .MuiMenu-paper": {
              borderRadius: "12px",
            },
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={open}
          onClose={handleClose}
        >
          <div className="px-12 py-16 w-[244px]">
            {MORE_MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                className="inline-flex gap-8 items-center p-8 w-full whitespace-nowrap text-body-medium text-on-surface"
                onClick={() => handleClickMoreItem(item.id)}
              >
                <Icon name={item.icon} className="text-[20px]" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </Menu>
        {UserProfile}
        {BusinesssAccountModal()}
        {SuccessModal()}
      </div>
    </div>
  );
};
