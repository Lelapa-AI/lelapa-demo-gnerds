import { DoubleDropdown, SubHeading } from "../common";
import { PageLayout } from "../templates";

export const Translate = () => {
  return (
    <PageLayout hasBack>
      <SubHeading title="Translate" />
      Now you can translate to South African Languages
      <DoubleDropdown options={[{ name: "English" }, { name: "Spanish" }]} />
    </PageLayout>
  );
};
