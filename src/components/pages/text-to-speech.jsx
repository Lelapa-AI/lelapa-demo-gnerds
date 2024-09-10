import { Heading } from "../common";
import { PageLayout } from "../templates";
import { useState } from "react";
import { LanguageDropdown } from "../forms/speech-language-dropdown";
import { Button } from "..";
import { MdVolumeUp, MdEdit } from 'react-icons/md';
import axios from 'axios';

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

const speechLanguages = {
  "English": {
    languageCode: 'en-US',
    name: 'en-US-Wavenet-D',
  },
  "Zulu": {
    languageCode: 'en-US',
    name: 'en-US-Wavenet-D',
  },
  "Afrikaans": {
    languageCode: 'af-ZA',
    name: 'af-ZA-Standard-A',
  }
};

// Helper function to prepare the request body for translation
const prepareRequestBody = (textState, inputTextState, outputTextState) => {
  return JSON.stringify({
    input_text: textState,
    source_lang: langToCode[inputTextState],
    target_lang: langToCode[outputTextState],
  });
};

// Helper function to make the API request for translation
const makeApiRequest = async (url, headers, body) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: body,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// Helper function to process the API response for translation
const processApiResponse = (data, setOutState) => {
  const translationText = data["translation"];
  
  if (translationText.length > 0) {
    setOutState(translationText[0]["translated_text"]);
  } else {
    setOutState("");
  }
};

// Helper function to convert text to speech
const synthesizeSpeech = async (translatedText, selectedSpeechLang, setAudioUrl) => {
  const apiKey = 'AIzaSyBsiS-r9tCJnDLwbtLL0Uwkr2JbczAvZ48';
  const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

  const data = {
    input: {
      text: translatedText,
    },
    voice: {
      languageCode: speechLanguages[selectedSpeechLang].languageCode,
      name: speechLanguages[selectedSpeechLang].name,
    },
    audioConfig: {
      audioEncoding: 'MP3',
    },
  };

  try {
    const response = await axios.post(url, data);
    const audioContent = response.data.audioContent;

    const audioBlob = new Blob([Uint8Array.from(atob(audioContent), c => c.charCodeAt(0))], { type: 'audio/mp3' });
    const audioUrl = URL.createObjectURL(audioBlob);

    setAudioUrl(audioUrl);
  } catch (error) {
    console.error('Error generating speech:', error);
  }
};

export const TextToSpeech = () => {
  const [inputTextState, setInputTextState] = useState("English"),
    [outputTextState, setOutputTextState] = useState("English");

  const [textState, setTextState] = useState(""),
    [outState, setOutState] = useState(""),
    [isLoading, setIsLoading] = useState(false),
    [selectedSpeechLang, setSelectedSpeechLang] = useState("English"),
    [audioUrl, setAudioUrl] = useState("");

  // Main translate and speech function
  const translateAndSpeak = async () => {
    setIsLoading(true); // Start loading

    const url = 'https://vulavula-services.lelapa.ai/api/v1/translate/process';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRlMDMwYjY3MGVhOTRhMGE5NGFhYTNhY2EwZDBlNjY1IiwiY2xpZW50X2lkIjoyMSwicmVxdWVzdHNfcGVyX21pbnV0ZSI6MCwibGFzdF9yZXF1ZXN0X3RpbWUiOm51bGx9.o2zYkTIOPMtcSJti0lgCT3d-nr5PWypbZuAmDCWzIBU'; // Replace with your token

    const headers = {
      'Content-Type': 'application/json',
      'X-CLIENT-TOKEN': token,
    };

    const body = prepareRequestBody(textState, inputTextState, outputTextState);

    try {
      const data = await makeApiRequest(url, headers, body);
      const translatedText = data.translation[0].translated_text;

      // After translation, convert to speech
      await synthesizeSpeech(translatedText, outputTextState, setAudioUrl);
      setOutState(translatedText); // Display the translated text
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <PageLayout hasBack>
      <Heading title="Translate and Speak" />
      <div>
        <LanguageDropdown
          inputLanguageState={inputTextState}
          setInputLanguageState={setInputTextState}
          outputLanguageState={outputTextState}
          setOutputLanguageState={setOutputTextState}
        />
      </div>

      <div style={{color: "black", background: "#FFFBFE"}}>
        <textarea
          name="input-text"
          id="input-text"
          onChange={(e) => setTextState(e.target.value)}
          placeholder="Enter text to translate"
          className="w-full rounded-none"
        />
        <br />
        <select
          value={selectedSpeechLang}
          onChange={(e) => setSelectedSpeechLang(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Afrikaans">Afrikaans</option>
        </select>

        <Button onClick={translateAndSpeak} disabled={isLoading} variant="gradient">
          {isLoading ? 'Translating and Speaking...' : 'Translate and Speak'}
        </Button>
      </div>

      <div style={{color: "black", background: "#FFFBFE", height: "150px"}}>
        {outState && <p>{outState}</p>}
        {audioUrl && (
          <div>
            <h2>Generated Audio:</h2>
            <audio controls src={audioUrl}></audio>
          </div>
        )}
      </div>
    </PageLayout>
  );
};
