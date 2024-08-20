
export function Dropdown({languageState, setLanguageState}) {
    const changeLanguage = (e) => setLanguageState(e.target.value)
    const languages = ["English", "Zulu", "Northern Sotho", "Afrikaans", "Southern Sotho", "Swati", "Tsonga", "Tswana","Xhosa", "Swahili"]

    return (
        <select name="languages" id="languages" onChange={changeLanguage} style={{color: "black"}}>
            {languages.map((lang) => <option value={lang} key={lang} style={{color: "black"}}>{lang}</option>)}
        </select>
    );
}

