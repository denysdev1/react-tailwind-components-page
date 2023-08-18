import { Field } from "../../types/Field";
import { TabCardField } from "./TabCardField";

type Props = {
  fields: Field[];
};

export const TabCardFields: React.FC<Props> = ({ fields }) => (
  <ul className="w-full flex flex-col gap-[30px] mb-[30px]">
    {fields.map(({ title, expertisePercent }) => (
      <TabCardField
        key={title}
        title={title}
        expertisePercent={expertisePercent}
      />
    ))}
  </ul>
);
