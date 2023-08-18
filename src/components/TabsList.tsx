import { TabItem } from "./TabItem";

const tabs = ["summary", "performance", "portfolio", "reviews", "latest"];

export const TabsList: React.FC = () => (
  <div className="flex flex-wrap justify-center gap-[30px]">
    {tabs.map((tab) => (
      <TabItem key={tab} tabName={tab} />
    ))}
  </div>
);
