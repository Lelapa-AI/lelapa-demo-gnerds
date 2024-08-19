import { DoubleDropdown, Heading } from "../common";
import { PageLayout } from "../templates";
import Paragraph from "../common/paragraph";

export const Language = () => {
  return (
    <PageLayout hasBack>
      <Heading title="Language" />
      <Paragraph/>
      <DoubleDropdown options={[{ name: "English" }, { name: "Spanish" }]} />
    </PageLayout>
  );
};
