
export function SpeechDropdown({languageState, setLanguageState}) {
    const changeLanguage = (e) => setLanguageState(e.target.value)
    const languages = ["English", "Zulu", "Afrikaans"]

    return (
        <select name="languages" id="languages" onChange={changeLanguage} style={{color: "black"}}>
            {languages.map((lang) => <option value={lang} key={lang} style={{color: "black"}}>{lang}</option>)}
        </select>
    );
}

