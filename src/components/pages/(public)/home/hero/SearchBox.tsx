"use client";

import { useState } from "react";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "nextjs-toploader/app";
import { useLocalStorage } from "usehooks-ts";

import { Icon, LocationAutocomplete, TabList } from "@/components";
import { Option } from "@/components/shared/LocationAutocomplete/types";
import { ROUTES } from "@/constants";
import { DESKTOP_TABS, MOBILE_TABS } from "@/constants/home";

import { renderTabs } from "./renderers";
import { SearchHistoryItem } from "./types";

export const SearchBox = () => {
  const [tab, setTab] = useState(MOBILE_TABS[0].value);
  const [from, setFrom] = useState<Option | null>(null);
  const [to, setTo] = useState<Option | null>(null);

  const { push } = useRouter();

  const [searchHistory, setSearchHistory] = useLocalStorage<
    SearchHistoryItem[]
  >("searchHistory", []);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleTabChange = (value: string) => {
    setTab(value);
  };

  const handleSwap = () => {
    setFrom((prevFrom) => {
      setTo(prevFrom);
      return to;
    });
  };

  const handleSearch = () => {
    let path = "";
    const params = new URLSearchParams();
    const fromTag = from?.value;
    const toTag = to?.value;

    if (from && to) {
      const newSearch: SearchHistoryItem = {
        from,
        to,
        tab,
      };

      const updatedHistory = [...searchHistory, newSearch];
      if (updatedHistory.length > 5) {
        updatedHistory.shift();
      }
      setSearchHistory(updatedHistory);
    }

    if (fromTag) params.append("from_location", fromTag);
    if (toTag) params.append("to_location", toTag);

    switch (tab) {
      case DESKTOP_TABS[0].value:
        path = ROUTES.connectHub.requestToPassengers;
        break;
      case DESKTOP_TABS[1].value:
        path = ROUTES.connectHub.startToShop;
        break;
      case DESKTOP_TABS[2].value:
        path = ROUTES.connectHub.startToShip;
        break;
      default:
        return;
    }

    push(`${path}?${params.toString()}`);
  };

  return (
    <div className="mt-48 mb-16 bg-surface-container-lowest rounded-large">
      <div className="flex justify-center p-16 md:justify-start">
        <TabList value={tab} onChange={handleTabChange} className="gap-0">
          {renderTabs(isMobile ? MOBILE_TABS : DESKTOP_TABS)}
        </TabList>
      </div>
      <Divider />
      <div className="flex relative flex-col gap-12 justify-between items-center p-16 md:flex-row">
        <LocationAutocomplete
          value={from}
          onChange={setFrom}
          placeholder="From"
        />
        <IconButton
          color="tonal"
          className="!absolute !bg-primary-container !top-[52px] !right-64 md:!relative md:!top-0 md:!right-0 z-10"
          onClick={handleSwap}
        >
          <Icon name="swap-horizontal" />
        </IconButton>
        <LocationAutocomplete value={to} onChange={setTo} placeholder="To" />
        <Button
          variant="filled"
          className="!h-[56px]"
          fullWidth={isMobile}
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
};
