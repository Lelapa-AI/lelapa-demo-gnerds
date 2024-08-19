
export function Dropdown({languageState, setLanguageState}) {
    const changeLanguage = (e) => setLanguageState(e.target.value)

    return (
        <select name="languages" id="languages" onChange={changeLanguage}>
            <option value="English">English</option>
            <option value="Zulu">Zulu</option>
            <option value="Northern Sotho">Northern Sotho</option>
            <option value="Afrikaans">Afrikaans</option>
            <option value="Southern Sotho">Southern Sotho</option>
            <option value="Swati">Swati</option>
            <option value="Tsonga">Tsonga</option>
            <option value="Tswana">Tswana</option>
            <option value="Xhosa">Xhosa</option>
            <option value="Swahili">Swahili</option>
        </select>
    );
}