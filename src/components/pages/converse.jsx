import { DoubleDropdown, Heading } from "../common";
import { PageLayout } from "../templates";

export const Converse = () => {
  return (
    <PageLayout hasBack>
      <Heading title="Converse" />
      <DoubleDropdown options={[{ name: "English" }, { name: "Spanish" }]} />
    </PageLayout>
  );
};
