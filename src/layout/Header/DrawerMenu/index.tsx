import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { useSearchParams } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";

import { Icon } from "@/components";
import { AUTH_ROUTES } from "@/constants";
import { MOBILE_MENU_ITEMS, SOCIAL_ICONS } from "@/constants/globals";
import { destroyToken, getToken } from "@/utils";

import { MenuItem } from "./MenuItem";
import { DrawerMenuProps } from "./types";

const renderSocialItems = () => {
  return SOCIAL_ICONS.map((socialIcon, index) => (
    <IconButton
      key={index}
      color="standard"
      href={socialIcon.link || "#"}
      target="_blank"
    >
      <Icon name={socialIcon.name} />
    </IconButton>
  ));
};

export const DrawerMenu = ({
  openNeedTypeModal,
  handleToggleMenu,
}: DrawerMenuProps) => {
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const isUserLoggedIn = getToken("access");

  const handleAddItem = () => {
    handleToggleMenu();
    openNeedTypeModal();
  };
  const renderMenuItems = () => {
    return MOBILE_MENU_ITEMS.map((item) => {
      if (item.id === 2) {
        return (
          <MenuItem key={item.id} item={item}>
            <Button
              variant="tonal"
              startIcon={<Icon name="Plus" />}
              onClick={handleAddItem}
            >
              Add Item
            </Button>
          </MenuItem>
        );
      } else {
        return <MenuItem key={item.id} item={item} />;
      }
    });
  };

  const handleSignIn = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(
      "redirect",
      window.location.pathname + "?" + searchParams.toString(),
    );

    push(`${AUTH_ROUTES.signin}?${params.toString()}`);
  };

  const handleLogout = () => {
    destroyToken();
    window.location.reload();
  };

  return (
    <div className="flex flex-col px-16 pt-16 pb-48 h-full">
      <div className="grow">
        {renderMenuItems()}
        <Divider />
        <button
          className="flex justify-between items-center py-12 px-8 w-full"
          onClick={isUserLoggedIn ? handleLogout : handleSignIn}
        >
          <div className="flex gap-8 items-center grow">
            <Icon
              name={isUserLoggedIn ? "Logout" : "Login"}
              className="text-[24px]"
            />
            {isUserLoggedIn ? "Logout" : "Login"}
          </div>
        </button>
      </div>
      <div className="space-y-2 text-center">
        <div className="text-body-medium text-on-surface-variant">
          Follow us
        </div>
        <div>{renderSocialItems()}</div>
      </div>
    </div>
  );
};
