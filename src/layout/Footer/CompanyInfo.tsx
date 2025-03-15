import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/constants";

import logo from "../../../public/images/logo.svg";

export const CompanyInfo = () => {
  return (
    <div className="flex flex-col gap-24 px-16 lg:justify-between lg:items-start lg:gap-20 lg:w-full lg:flex-row">
      <div className="space-y-16 w-auto lg:max-w-[340px]">
        <Image
          src={logo}
          alt="logo"
          width={170}
          height={24}
          className="block"
        />
        <div className="text-body-medium text-on-surface-variant">
          You can use the services you need while traveling. Send your packages
          at a reasonable price and in the shortest time, buy from outside your
          country and receive them at your destination.
        </div>
      </div>
      <div className="space-y-16 w-auto">
        <h4 className="text-title-large">Support</h4>
        <div>
          <div className="flex gap-8 items-center group">
            <div className="size-[5px] rounded-full bg-outline-variant group-hover:bg-primary transition-colors" />
            <Link
              href={ROUTES.legalConsiderations}
              className="text-body-medium text-on-surface hover:text-primary"
            >
              Legal considerations
            </Link>
          </div>
          <div className="flex gap-8 items-center group">
            <div className="size-[5px] rounded-full bg-outline-variant group-hover:bg-primary transition-colors" />
            <Link
              href={ROUTES.security}
              className="text-body-medium text-on-surface hover:text-primary"
            >
              Security
            </Link>
          </div>
          <div className="flex gap-8 items-center group">
            <div className="size-[5px] rounded-full bg-outline-variant group-hover:bg-primary transition-colors" />
            <Link
              href={ROUTES.aboutUs}
              className="text-body-medium text-on-surface hover:text-primary"
            >
              About us
            </Link>
          </div>
          <div className="flex gap-8 items-center group">
            <div className="size-[5px] rounded-full bg-outline-variant group-hover:bg-primary transition-colors" />
            <Link
              href={ROUTES.contactUs}
              className="text-body-medium text-on-surface hover:text-primary"
            >
              Contact us
            </Link>
          </div>
          <div className="flex gap-8 items-center group">
            <div className="size-[5px] rounded-full bg-outline-variant group-hover:bg-primary transition-colors" />
            <Link
              href={`${ROUTES.faq}?category=All`}
              className="text-body-medium text-on-surface hover:text-primary"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
      <div className="space-y-16 lg:min-w-[300px]">
        <h4 className="text-title-large">Platform</h4>
        <div>
          <div className="flex gap-8 items-center group">
            <div className="size-[5px] rounded-full bg-outline-variant group-hover:bg-primary transition-colors" />
            <Link
              href={ROUTES.connectHub.requestToPassengers}
              className="text-body-medium text-on-surface hover:text-primary"
            >
              Connect Hub
            </Link>
          </div>
          <div className="flex gap-8 items-center group">
            <div className="size-[5px] rounded-full bg-outline-variant group-hover:bg-primary transition-colors" />
            <Link
              href={ROUTES.whatsNew}
              className="text-body-medium text-on-surface hover:text-primary"
            >
              What&apos;s new
            </Link>
          </div>
          <div className="flex gap-8 items-center group">
            <div className="size-[5px] rounded-full bg-outline-variant group-hover:bg-primary transition-colors" />
            <Link
              href={ROUTES.roadmap}
              className="text-body-medium text-on-surface hover:text-primary"
            >
              Roadmap
            </Link>
          </div>
          <div className="flex gap-8 items-center group">
            <div className="size-[5px] rounded-full bg-outline-variant group-hover:bg-primary transition-colors" />
            <Link
              href={ROUTES.feedBack}
              className="text-body-medium text-on-surface hover:text-primary"
            >
              FeedBack
            </Link>
          </div>
          <div className="flex gap-8 items-center group">
            <div className="size-[5px] rounded-full bg-outline-variant group-hover:bg-primary transition-colors" />
            <Link
              href={`${ROUTES.blog}`}
              className="text-body-medium text-on-surface hover:text-primary"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
