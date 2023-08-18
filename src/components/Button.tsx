import { Link } from "react-router-dom";

type Props = {
  text: string;
  className?: string;
  href?: string;
};

export const Button: React.FC<Props> = ({ text, className = "", href }) => (
  <div
    className={
      `flex items-center justify-center w-32 h-7 bg-custom-rose rounded-sm text-white 
      text-sm font-semibold cursor-pointer hover:bg-custom-rose-hover transition-colors ` +
      className
    }
  >
    {href ? <Link to={`/${href}`}>{text}</Link> : text}
  </div>
);
