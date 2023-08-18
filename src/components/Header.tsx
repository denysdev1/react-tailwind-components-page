import { ArrowLeftSvgIcon } from "./ArrowLeftSvg";
import { Button } from "./Button";
import { SvgIcon } from "./SvgIcon";

export const Header: React.FC = () => (
  <div className="flex items-center w-full h-12 bg-white shadow border pl-[50px] pr-10">
    <SvgIcon />
    <div className="flex cursor-pointer items-center">
      <ArrowLeftSvgIcon />
      <span className="text-regular-gray text-sm font-medium">
        Back to Results
      </span>
    </div>
    <img
      src="images/ogilvy.png"
      alt="company logo"
      className="w-20 h-8 m-auto cursor-pointer"
    />
    <Button text="Contact Ogilvy" />
    <img
      src="images/avatar.png"
      alt="avatar icon"
      className="w-7 h-7 rounded-full object-cover ml-5 cursor-pointer"
    />
  </div>
);
