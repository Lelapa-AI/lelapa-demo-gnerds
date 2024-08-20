import { Heading } from "../common";
import { PageLayout } from "../templates";
import { useState } from "react";
import { LanguageDropdown } from "../forms/language-dropdown";
import { Button } from "../../components";
import { MdVolumeUp, MdEdit } from 'react-icons/md';

const langToCode = {
  "Northern Sotho": "nso_Latn",
  "Afrikaans": "afr_Latn",
  "Southern Sotho": "sot_Latn",
  "Swati": "ssw_Latn",
  "Tsonga": "tso_Latn",
  "Tswana": "tsn_Latn",
  "Xhosa": "xho_Latn",
  "Zulu": "zul_Latn",
  "English": "eng_Latn",
  "Swahili": "swh_Latn"
};

// Helper function to prepare the request body
const prepareRequestBody = (textState, inputTextState, outputTextState) => {
  return JSON.stringify({
    input_text: textState,
    source_lang: langToCode[inputTextState],
    target_lang: langToCode[outputTextState],
  });
};

// Helper function to make the API request
const makeApiRequest = async (url, headers, body) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: body,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  console.log(response.status)
  return response.json();
};

// Helper function to process the API response
const processApiResponse = (data, setOutState) => {
  const translationText = data["translation"];
  
  if (translationText.length > 0) {
    setOutState(translationText[0]["translated_text"]);
  } else {
    setOutState("");
  }
};

export const Translate = () => {
  const [inputTextState, setInputTextState] = useState("English"),
    [outputTextState, setOutputTextState] = useState("English");

  const [textState, setTextState] = useState(""),
    [outState, setOutState] = useState(""),
    [isLoading, setIsLoading] = useState(false); // Add loading state

  // Main translate function
  const translate = async () => {
    setIsLoading(true); // Start loading

    const url = 'https://vulavula-services.lelapa.ai/api/v1/translate/process';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRlMDMwYjY3MGVhOTRhMGE5NGFhYTNhY2EwZDBlNjY1IiwiY2xpZW50X2lkIjoyMSwicmVxdWVzdHNfcGVyX21pbnV0ZSI6MCwibGFzdF9yZXF1ZXN0X3RpbWUiOm51bGx9.o2zYkTIOPMtcSJti0lgCT3d-nr5PWypbZuAmDCWzIBU';

    const headers = {
      'Content-Type': 'application/json',
      'X-CLIENT-TOKEN': token,
    };

    const body = prepareRequestBody(textState, inputTextState, outputTextState);

    try {
      const data = await makeApiRequest(url, headers, body);
      processApiResponse(data, setOutState);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <PageLayout hasBack>
      <Heading title="Translate" />
      <div>
        <LanguageDropdown
          inputLanguageState={inputTextState}
          setInputLanguageState={setInputTextState}
          outputLanguageState={outputTextState}
          setOutputLanguageState={setOutputTextState}
        />
      </div>

      <div style={{color: "black", background: "#FFFBFE"}}>
        <div className="flex items-center space-x-4">
          <span>{inputTextState}</span>
          <span><MdVolumeUp size={20} color="black" /></span>
          <span><MdEdit size={20} color="black" /></span>
        </div>

        <textarea
          name="input-text"
          id="input-text"
          onChange={(e) => setTextState(e.target.value)}
          placeholder="text"
          className="w-full rounded-none"
        />
        <br />
        <span>icon</span>

        <Button onClick={translate} disabled={isLoading} variant="gradient">
          {isLoading ? 'Translating...' : 'Translate'}
        </Button >
      </div>

      <div style={{color: "black", background: "#FFFBFE", height: "150px"}}>
        <div className="flex items-center space-x-4">
          <span>{outputTextState}</span>
          <span><MdVolumeUp size={20} color="black" /></span>
        </div>

        {isLoading ? <p>Loading...</p> : <p>{outState}</p>}

        <span>icon</span>
        <span>icon</span>
        <span>icon</span>
      </div>
    </PageLayout>
  );
};
