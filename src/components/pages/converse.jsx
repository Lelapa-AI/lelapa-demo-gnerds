import { DoubleDropdown, Heading } from "../common";
import { PageLayout } from "../templates";

export const Converse = () => {
  return (
    <PageLayout hasBack>
      <Heading title="Converse" />
      <DoubleDropdown
        options={[
          { name: "English" },
          { name: "Swati" },
          {
            name: "Zulu",
          },
          { name: "Xhosa" },
        ]}
        firstOption="English"
        secondOption="Swati"
      />
    </PageLayout>
  );
};
