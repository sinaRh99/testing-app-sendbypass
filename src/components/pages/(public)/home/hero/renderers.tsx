import { TabList } from "@/components/shared";
import { DESKTOP_TABS, MOBILE_TABS } from "@/constants/home";

export const renderTabs = (tabs: typeof DESKTOP_TABS | typeof MOBILE_TABS) =>
  tabs.map(({ label, value, icon }) => (
    <TabList.Tab key={value} value={value} icon={icon}>
      {label}
    </TabList.Tab>
  ));
