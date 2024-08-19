import { DoubleDropdown, Heading } from "../common";
import { PageLayout } from "../templates";

export const Language = () => {
  return (
    <PageLayout hasBack>
      <Heading title="Language" />
      Now you can translate to South African Languages
      <DoubleDropdown options={[{ name: "English" }, { name: "Spanish" }]} />
    </PageLayout>
  );
};
