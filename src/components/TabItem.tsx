import { NavLink } from "react-router-dom";
import cn from "classnames";

type Props = {
  tabName: string;
};

export const TabItem: React.FC<Props> = ({ tabName }) => (
  <NavLink
    to={`/${tabName}`}
    className={({ isActive }) =>
      cn("capitalize pb-[7px] hover:border-b-regular-gray hover:border-b-2", {
        "text-custom-light-rose hover:border-b-custom-light-rose": isActive,
        "text-regular-gray": !isActive,
      })
    }
  >
    {tabName}
  </NavLink>
);
