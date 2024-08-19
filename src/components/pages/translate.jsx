import { DoubleDropdown, SubHeading, P } from "../common";
import { PageLayout } from "../templates";

export const Translate = () => {
  return (
    <PageLayout hasBack>
      <SubHeading title="Translate" />
      <P>
        Select the language you want to translate from and the language you want
        to translate to.
      </P>
      <DoubleDropdown options={[{ name: "English" }, { name: "Spanish" }]} />
    </PageLayout>
  );
};
