import { Field } from "../../types/Field";
import cn from "classnames";

type Props = Field;

export const TabCardField: React.FC<Props> = ({ title, expertisePercent }) => (
  <li>
    <div className="h-[6px] w-full bg-[#f4f4f9] mb-[14px] rounded-[3px]">
      <div
        className="h-full bg-custom-light-rose rounded-[3px]"
        style={{ width: `${expertisePercent}%` }}
      ></div>
    </div>
    <div
      className={cn("flex justify-between text-custom-light-rose", {
        "text-[#D6D7E1]": expertisePercent <= 0,
      })}
    >
      <span>{title}</span>
      <span>{expertisePercent >= 0 ? expertisePercent + "%" : "0%"}</span>
    </div>
  </li>
);
