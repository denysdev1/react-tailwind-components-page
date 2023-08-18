import { TabCard } from "./TabCard";
import { Field } from "../../types/Field";
import { TabCardInfo } from "../../types/TabCardInfo";

const firstCardFields: Field[] = [
  {
    title: "Small Business (Less than $1M in revenue)",
    expertisePercent: 0,
  },
  {
    title: "Medium Business ($1M-$10M)",
    expertisePercent: 10,
  },
  {
    title: "Large Business ($10M-$1B)",
    expertisePercent: 60,
  },
  {
    title: "Enterprise ($1B+)",
    expertisePercent: 20,
  },
];
const secondCardFields: Field[] = [
  {
    title: "Healthcare",
    expertisePercent: 50,
  },
  {
    title: "Business Services",
    expertisePercent: 20,
  },
  {
    title: "Automotive",
    expertisePercent: 15,
  },
  {
    title: "Financial Services",
    expertisePercent: 10,
  },
];

const tabCards: TabCardInfo[] = [
  {
    title: "Client size",
    description:
      "View all the business sizes this agency current manages, as well as which business size they choose to work with the most.",
    iconPath: 'images/bags.png',
    fields: firstCardFields,
    notification: {
      title: "Nice!",
      message: "Ogilvy is managing businesses of a similar size to yours.",
    },
  },
  {
    title: "Industry Focus",
    description:
      "See which industries this agency has the most experience and expertise in.",
    iconPath: 'images/industry-focus.png',
    fields: secondCardFields,
    notification: {
      title: "Things are looking good!",
      message:
        "Ogilvy has experience working with the same type of business as yours.",
    },
  },
];

export const TabCardsList = () => (
  <ul className="flex gap-[30px] justify-center px-5 xl:px-0">
    {tabCards.map((tabCard) => (
      <TabCard
        key={tabCard.title}
        title={tabCard.title}
        iconPath={tabCard.iconPath}
        description={tabCard.description}
        fields={tabCard.fields}
        notification={tabCard.notification}
      />
    ))}
  </ul>
);
