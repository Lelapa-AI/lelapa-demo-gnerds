import { useState } from "react";

export const useSettings = () => {
  const [settings, setSettings] = useState({
    defaultLanguage: "English",
    outputLanguage: "Zulu",
  });

  const setDefaultLanguage = (language) => {
    setSettings({ ...settings, defaultLanguage: language });
  };

  const setOutputLanguage = (language) => {
    setSettings({ ...settings, outputLanguage: language });
  };

  return { settings, setDefaultLanguage, setOutputLanguage };
};
