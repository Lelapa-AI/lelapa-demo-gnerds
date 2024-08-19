import { DoubleDropdown, SubHeading } from "../common";
import Paragraph from "../common/paragraph";
import { PageLayout } from "../templates";

export const Translate = () => {
  return (
    <PageLayout hasBack>
      <SubHeading title="Translate" />
      <Paragraph/>
      <DoubleDropdown options={[{ name: "English" }, { name: "Spanish" }]} />
    </PageLayout>
  );
};
