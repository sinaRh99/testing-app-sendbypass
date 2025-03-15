"use client";

import { Suspense, useEffect, useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import { useToggle } from "usehooks-ts";

import { BottomSheet, Icon, NeedsTypeModal } from "@/components";
import { AUTH_ROUTES, ROUTES } from "@/constants";
import { useProfileQuery } from "@/services/profile";
import { cn, getToken } from "@/utils";

import logo from "../../../public/images/logo.svg";

import { DrawerMenu } from "./DrawerMenu";
import { Nav } from "./Nav";
import { ProfileMenuDesktop, ProfileMenuMobile } from "./ProfileMenu";
import { VersionSwitcher } from "./VersionSwitcher";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isBottomSheetOpen, toggleBottomSheet] = useToggle();
  const [isNeedTypeModal, setIsNeedTypeModal] = useState(false);
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const token = getToken("access");

  const { data: profile } = useProfileQuery(undefined, { skip: !token });

  const isUserLoggedIn = profile?.email;

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleSignIn = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(
      "redirect",
      window.location.pathname + "?" + searchParams.toString(),
    );

    push(`${AUTH_ROUTES.signin}?${params.toString()}`);
  };

  const openNeedTypeModal = () => {
    if (!isUserLoggedIn)
      return push(`${AUTH_ROUTES.signin}?redirect=${ROUTES.home}`);
    setIsNeedTypeModal(true);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header>
      <VersionSwitcher />
      <div className="flex justify-center items-center h-80 bg-surface-container">
        <Container className="flex justify-between items-center">
          <div className="flex gap-32 items-center">
            <Link href={ROUTES.home}>
              <Image src={logo} alt="logo" width={140} height={20} />
            </Link>
            <Nav />
          </div>
          <div
            className={cn("hidden gap-16 items-center md:flex", {
              "gap-8": isUserLoggedIn,
            })}
          >
            {isUserLoggedIn ? (
              <ProfileMenuDesktop profile={profile} />
            ) : (
              <>
                <Button variant="filled" onClick={handleSignIn}>
                  Sign in
                </Button>
                <Divider orientation="vertical" className="!h-24 !w-2" />
              </>
            )}
            <Button
              variant="tonal"
              className={cn({ "!ml-12": isUserLoggedIn })}
              onClick={openNeedTypeModal}
            >
              Add Item
            </Button>
          </div>
          <div className="flex gap-4 justify-end items-center md:hidden">
            {isUserLoggedIn ? (
              <Avatar
                sx={{ width: 32, height: 32 }}
                src={profile?.image}
                className="border-2 border-outline-variant"
                onClick={toggleBottomSheet}
              />
            ) : (
              <Avatar
                sx={{ width: 32, height: 32 }}
                className="border-2 cursor-pointer border-outline-variant"
                onClick={handleSignIn}
              />
            )}
            {isUserLoggedIn && (
              <BottomSheet
                open={isBottomSheetOpen}
                toggle={toggleBottomSheet}
                initialHeight={"35%"}
              >
                <ProfileMenuMobile
                  profile={profile}
                  toggleBottomSheet={toggleBottomSheet}
                />
              </BottomSheet>
            )}
            <IconButton color="standard" onClick={handleToggleMenu}>
              <Icon name={open ? "Close remove" : "Hamburger menu"} />
            </IconButton>
          </div>

          <Drawer
            anchor="right"
            open={open}
            ModalProps={{
              keepMounted: false,
            }}
            sx={{
              "&": {
                height: "calc(100vh - 148px)",
                top: "148px",
              },
              "& .MuiBackdrop-root": {
                height: "calc(100vh - 148px)",
                top: "148px",
              },
              "& .MuiDrawer-paper": {
                width: "100%",
                height: "calc(100vh - 148px)",
                top: "148px",
                boxShadow: "none",
              },
            }}
          >
            <DrawerMenu
              openNeedTypeModal={openNeedTypeModal}
              handleToggleMenu={handleToggleMenu}
            />
          </Drawer>
        </Container>
      </div>
      <NeedsTypeModal
        open={isNeedTypeModal}
        onClose={() => setIsNeedTypeModal(false)}
      />
    </header>
  );
};

export const SuspensedHeader = () => {
  return (
    <Suspense>
      <Header />
    </Suspense>
  );
};
