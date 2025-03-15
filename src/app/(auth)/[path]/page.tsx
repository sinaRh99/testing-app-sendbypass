"use client";

import { ReactNode } from "react";

import { notFound, usePathname, useSearchParams } from "next/navigation";

import ConnectHubLayout from "@/app/(public)/connect-hub/layout";
import RequestToPassengers from "@/app/(public)/connect-hub/request-to-passengers/page";
import StartToShipPage from "@/app/(public)/connect-hub/start-to-ship/page";
import StartToShopPage from "@/app/(public)/connect-hub/start-to-shop/page";
import {
  AboutUs,
  ContactUs,
  FAQ,
  Home,
  PrivacyPolicy,
  Security,
  TermsOfService,
} from "@/components/pages";

const pathToComponentMap: Record<string, ReactNode> = {
  "connect-hub/request-to-passengers": <RequestToPassengers />,
  "connect-hub/start-to-shop": <StartToShopPage />,
  "connect-hub/start-to-ship": <StartToShipPage />,
  security: <Security />,
  faq: <FAQ />,
  "about-us": <AboutUs />,
  "contact-us": <ContactUs />,
  "terms-of-service": <TermsOfService />,
  "privacy-policy": <PrivacyPolicy />,
  "": <Home />,
};

export default function AuthPages() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const deepLinkPath = searchParams.get("source");
  if (deepLinkPath) {
    localStorage.setItem("deepLinkPath", deepLinkPath);
  }

  let redirectPath = searchParams.get("redirect");

  if (redirectPath) {
    redirectPath = decodeURIComponent(redirectPath);

    const url = new URL(redirectPath, window.location.origin);
    redirectPath = url.pathname.replace(/^\//, "");
  } else {
    redirectPath = pathname.replace(/^\//, "");
  }

  const Component = pathToComponentMap[redirectPath];

  if (!Component) {
    notFound();
  }

  if (redirectPath.startsWith("connect-hub/")) {
    return <ConnectHubLayout>{Component}</ConnectHubLayout>;
  }

  return Component;
}
