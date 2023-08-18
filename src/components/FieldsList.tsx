import { FieldItem } from "./FieldItem";

const fields = [
  "Design",
  "Marketing",
  "Email",
  "Social Media Management",
  "Video Production",
];

export const FieldsList: React.FC = () => (
  <div className="flex gap-2 mb-5">
    {fields.map((field) => (
      <FieldItem key={field} title={field} />
    ))}
  </div>
);
