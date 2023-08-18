import { Button } from "./Button";
import { FieldsList } from "./FieldsList";
import { TabsList } from "./TabsList";

export const CompanyInfo: React.FC = () => (
  <div className="flex justify-center font-medium">
    <div className="flex flex-col text-center items-center">
      <img
        src="images/ogilvy.png"
        alt="company logo"
        className="w-[180px] h-[72px] m-auto mb-20"
      />
      <span className="text-xl mb-[10px]">Ogilvy</span>
      <span className="text-sm text-regular-gray mb-5">
        10 years · New York
      </span>
      <FieldsList />
      <div className="max-w-[458px] text-regular-gray text-sm mb-[30px]">
        In the beginning, there was one Ogilvy, the company founded by David
        Ogilvy in 1948. Today, there is again one Ogilvy, in 83 countries and
        132 offices. We are one doorway to a creative network, re-founded to
        make brands matter in a complex, noisy, hyper-connected world.
      </div>
      <Button text="Contact Ogilvy" href="contact" className="mb-[68px]" />
      <TabsList />
    </div>
  </div>
);
