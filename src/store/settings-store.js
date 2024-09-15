import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSettingsStore = create(
  persist(
    (set) => ({
      defaultLanguage: "English",
      outputLanguage: "Zulu",
      setDefaultLanguage: (language) =>
        set((state) => ({ ...state, defaultLanguage: language })),
      setOutputLanguage: (language) =>
        set((state) => ({ ...state, outputLanguage: language })),
    }),
    {
      name: "settings-storage",
    }
  )
);
