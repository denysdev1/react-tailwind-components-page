import { Field } from "./Field";

export type TabCardInfo = {
  title: string;
  description: string;
  iconPath: string;
  fields: Field[];
  notification: {
    title: string;
    message: string;
  };
};
