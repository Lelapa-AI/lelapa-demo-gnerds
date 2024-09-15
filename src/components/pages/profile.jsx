import { useState } from "react";
import { CiEdit } from "react-icons/ci";

import { Button, Selector } from "../common";
import { PageLayout } from "../templates";
import { useSettingsStore } from "../../store";

export const Profile = () => {
  const [edit, setEdit] = useState(false);
  const { defaultLanguage, outputLanguage } = useSettingsStore();

  const handleSave = () => {
    setEdit(false);
  };

  return (
    <PageLayout hasBack title="Profile">
      <section className="flex justify-end">
        <Button
          onClick={() => setEdit(true)}
          className="flex items-center gap-1"
          variant="text"
        >
          <CiEdit /> Edit
        </Button>
      </section>

      {edit ? (
        <section className="flex flex-col gap-2">
          <Selector onFinish={handleSave} />
        </section>
      ) : (
        <section className="grid grid-flow-row gap-4 mt-[10%]">
          <section className="flex items-center justify-center flex-col rounded-xl p-4 bg-tertiary">
            <h2 className="text-xs font-bold text-[black]">
              Preferred Language
            </h2>
            <p className="text-4xl">{defaultLanguage}</p>
          </section>
          <section className="flex items-center justify-center flex-col rounded-xl p-4 bg-secondary">
            <h2 className="text-xs font-bold text-[black]">Output Language</h2>
            <p className="text-4xl">{outputLanguage}</p>
          </section>
        </section>
      )}
    </PageLayout>
  );
};
