import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

import { Icon } from "@/components";
import { ROUTES } from "@/constants";
import { SOCIAL_ICONS } from "@/constants/globals";

export const SocialInfo = () => {
  const renderSocials = () =>
    SOCIAL_ICONS.map((socialIcon, index) => (
      <IconButton
        key={index}
        color="standard"
        href={socialIcon.link || "#"}
        target="_blank"
      >
        <Icon name={socialIcon.name} />
      </IconButton>
    ));

  return (
    <div className="flex flex-col gap-16 items-center p-16 lg:px-12 lg:py-4 lg:gap-0 lg:flex-row lg:justify-between bg-surface-container rounded-small">
      <div>{renderSocials()}</div>
      <div className="flex gap-16 items-center">
        <Link
          href={ROUTES.contactUs}
          className="xs:text-[10px] sm:text-body-small text-on-surface hover:text-primary"
        >
          Contact us
        </Link>
        <Link
          href={ROUTES.termsOfService}
          className="xs:text-[10px] xs:font-normal sm:text-body-small text-on-surface hover:text-primary"
        >
          Terms of service
        </Link>
        <Link
          href={ROUTES.privacyPolicy}
          className="xs:text-[10px] xs:font-normal sm:text-body-small text-on-surface hover:text-primary"
        >
          Privacy policy
        </Link>
        <Divider
          orientation="vertical"
          flexItem
          className="hidden lg:inline-flex"
        />
        <Link
          href="#"
          className="hidden text-body-small text-outline lg:inline-flex"
        >
          © 2025 SendByPass
        </Link>
      </div>
      <Link href="#" className="text-body-small text-outline lg:hidden">
        © 2025 SendByPass
      </Link>
    </div>
  );
};
