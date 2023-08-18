type Props = {
  text: string;
};

export const Button: React.FC<Props> = ({ text }) => (
  <div
    className="flex items-center justify-center w-32 h-7 bg-custom-rose rounded-sm
     text-white text-sm font-semibold cursor-pointer hover:bg-custom-rose-hover transition-colors"
  >
    {text}
  </div>
);
