import { Link } from "react-router-dom";
import { ArrowLeftSvgIcon } from "./svg/ArrowLeftSvgIcon";
import { Button } from "./Button";
import { SvgIcon } from "./svg/SvgIcon";

export const Header: React.FC = () => (
  <div className="flex items-center w-full h-12 bg-white shadow-custom-shadow pl-[50px] pr-10 mb-20 sticky top-0">
    <SvgIcon className="mr-6" />
    <div className="hidden md:flex cursor-pointer items-center">
      <ArrowLeftSvgIcon className="mr-3" />
      <span className="text-regular-gray text-sm font-medium">
        Back to Results
      </span>
    </div>
    <Link to={"/"} className="w-20 h-[30px] m-auto cursor-pointer">
      <img src="images/ogilvy.png" alt="company logo" />
    </Link>
    <Button text="Contact Ogilvy" href="contact" className="hidden md:flex" />
    <img
      src="images/avatar.png"
      alt="avatar icon"
      className="w-7 h-7 rounded-full object-cover ml-5 cursor-pointer"
    />
  </div>
);
