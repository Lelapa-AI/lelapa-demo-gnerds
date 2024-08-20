import { SubHeading, P } from "../common";
import { TranslateForm } from "../forms";
import { PageLayout } from "../templates";

export const Translate = () => {
  return (
    <PageLayout hasBack>
      <SubHeading title="Translate" />
      <P className="text-xs">
        Now you can translate to South African Languages
      </P>
      <TranslateForm />
    </PageLayout>
  );
};
