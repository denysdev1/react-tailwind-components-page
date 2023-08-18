type Props = {
  title: string;
};

export const FieldItem: React.FC<Props> = ({ title }) => (
  <li
    className="flex items-center justify-center py-[6px] px-[10px] bg-[#FD53591A]
   text-custom-light-rose rounded-[3px] text-[16px] transition-colors cursor-default whitespace-nowrap"
  >
    {title}
  </li>
);
