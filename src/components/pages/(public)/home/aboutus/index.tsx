"use client";

import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";

import { Icon } from "@/components/shared/Icon";
import { AUTH_ROUTES, PRIVATE_ROUTES, ROUTES } from "@/constants";
import { getToken } from "@/utils";

export const AboutUs = () => {
  const { push } = useRouter();
  const isLoggedIn = getToken("access");

  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleJoinUs = () => {
    if (isLoggedIn) return push(PRIVATE_ROUTES.profile);
    push(`${AUTH_ROUTES.signin}?redirect=${ROUTES.home}`);
  };

  return (
    <div className="flex flex-col-reverse gap-16 md:gap-40 items-center md:p-32 mt-[380px] md:mt-64 z-50 md:flex-row">
      <Button
        variant="text"
        endIcon={<Icon name="Arrow Left MD" />}
        className="md:!hidden"
        fullWidth={isMobile}
        onClick={handleJoinUs}
      >
        Join us
      </Button>
      <Image
        src="/images/home/about-us.png"
        alt="about-us"
        width={416}
        height={465}
        sizes="100vw"
        className="object-cover rounded-large w-full md:w-[416px] h-[465px]"
      />
      <div>
        <div className="xs:text-[32px] xs:font-light xs:leading-[44px] xs:tracking-[-1px]  md:!text-display-small md:!font-light">
          <span className="font-semibold text-primary">SendByPass ✦</span> is a
          platform that connects Passengers, Shoppers, and Senders to transport
          your Luggage or Purchases from any location to any destination.
        </div>
        <div className="flex justify-end py-8 md:py-24 text-on-surface md:text-outline-variant">
          <Icon
            name="Quotation close"
            className="text-[64px] md:text-[80px] text-outline-variant"
          />
        </div>
        <Button
          variant="text"
          endIcon={<Icon name="Arrow Left MD" />}
          className="!hidden md:!inline-flex"
          onClick={handleJoinUs}
        >
          Join us
        </Button>
      </div>
    </div>
  );
};
