import { SubHeading } from "../common";
import { TranslateForm } from "../forms";
import { PageLayout } from "../templates";

export const Translate = () => {
  return (
    <PageLayout hasBack>
      <SubHeading title="Translate" />
      <p className="text-xs">
        Now you can translate to South African Languages
      </p>
      <TranslateForm />
    </PageLayout>
  );
};
