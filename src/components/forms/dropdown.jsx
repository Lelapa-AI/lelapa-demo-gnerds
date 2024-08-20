export function Dropdown({ languageState, setLanguageState }) {
  const changeLanguage = (e) => setLanguageState(e.target.value);
  const languages = [
    "English",
    "Zulu",
    "Northern Sotho",
    "Afrikaans",
    "Southern Sotho",
    "Swati",
    "Tsonga",
    "Tswana",
    "Xhosa",
    "Swahili",
  ];

  return (
    <select
      name="languages"
      id="languages"
      onChange={changeLanguage}
      className="text-light-white border-none bg-background focus:outline-none"
    >
      {languages.map((lang) => (
        <option value={lang} key={lang} className="text-[black]">
          {lang}
        </option>
      ))}
    </select>
  );
}
