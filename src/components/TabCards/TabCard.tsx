import { TabCardInfo } from "../../types/TabCardInfo";
import { StarSvgIcon } from "../svg/StarSvgIcon";
import { TabCardFields } from "./TabCardFields";

type Props = TabCardInfo;

export const TabCard: React.FC<Props> = ({
  title,
  description,
  iconPath,
  fields,
  notification,
}) => (
  <li className="flex flex-col items-center p-5 bg-white w-[580px] font-medium mt-12 shadow-custom-shadow rounded-sm">
    <img src={iconPath} alt="shopping bags image" className="w-16 h-12 mb-5" />
    <span className="uppercase mb-5">{title}</span>
    <span className="text-sm text-regular-gray mb-10 text-center h-14 md:h-10 xl:h-9 max-w-[400px]">
      {description}
    </span>
    <TabCardFields fields={fields} />
    <div className="relative w-full mt-auto">
      <div
        className={`absolute h-full w-[5px] bg-[#2D9CDB99] rounded-[3px] ${
          title !== "Client size" ? "hidden" : ""
        }`}
      ></div>
      <div className="relative flex pl-6 pr-2 py-[16px] bg-[#2D9CDB0D] rounded-[3px]">
        {title === "Industry Focus" && <StarSvgIcon className="mr-2 shrink-0" />}
        <div className="flex flex-col">
          <span className="text-[#2D9CDB] mb-[5px] font-semibold">
            {notification.title}
          </span>
          <span className="text-regular-gray text-sm">
            {notification.message}
          </span>
        </div>
      </div>
    </div>
  </li>
);
