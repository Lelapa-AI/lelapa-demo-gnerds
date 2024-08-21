import { useState } from "react";
import { MdVolumeUp, MdEdit } from "react-icons/md";
import { IoMdMic } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";

import { LanguageDropdown } from "../forms/language-dropdown";
import { Button, SubHeading, P, PageLayout } from "../../components";
import { TranslateService, translationModel } from "../../services";

const langToCode = {
  "Northern Sotho": "nso_Latn",
  Afrikaans: "afr_Latn",
  "Southern Sotho": "sot_Latn",
  Swati: "ssw_Latn",
  Tsonga: "tso_Latn",
  Tswana: "tsn_Latn",
  Xhosa: "xho_Latn",
  Zulu: "zul_Latn",
  English: "eng_Latn",
  Swahili: "swh_Latn",
};

export const Translate = () => {
  const [enable, setEnable] = useState(false);
  const [inputTextState, setInputTextState] = useState("English");
  const [outputTextState, setOutputTextState] = useState("English");

  const [textState, setTextState] = useState("");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["translate"],
    queryFn: () =>
      TranslateService.translate(
        textState,
        langToCode[inputTextState],
        langToCode[outputTextState]
      ),
    enabled: enable,
    select: translationModel,
  });

  console.log(data);

  const onStartTranslate = () => {
    setEnable(true);
    refetch();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(data?.translation);
  };

  const shareTextToWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${data?.translation}`;
    window.open(url, "_blank");
  };

  return (
    <PageLayout hasBack>
      <SubHeading title="Translate" />
      <P className="text-xs">
        Now you can translate to South African Languages
      </P>
      <div>
        <LanguageDropdown
          inputLanguageState={inputTextState}
          setInputLanguageState={setInputTextState}
          outputLanguageState={outputTextState}
          setOutputLanguageState={setOutputTextState}
        />
      </div>
      <div className="rounded-lg p-2 text-[black] bg-light-white">
        <div className="flex items-center space-x-4">
          <span>{inputTextState}</span>
          <span>
            <MdVolumeUp size={20} color="black" />
          </span>
          <span>
            <MdEdit size={20} color="black" />
          </span>
        </div>
        <textarea
          name="input-text"
          id="input-text"
          rows={3}
          onChange={(e) => setTextState(e.target.value)}
          placeholder="text"
          className="w-full rounded-none bg-light-white border-none focus:outline-none"
        />
        <br />
        <section className="flex items-center justify-between px-2">
          <IoMdMic className="bg-primary rounded-full p-2 text-[white] w-8 h-8" />
          <Button
            onClick={onStartTranslate}
            disabled={isLoading}
            variant="gradient"
            isLoading={isLoading}
          >
            Translate
          </Button>
        </section>
      </div>

      <div className="rounded-lg relative bg-light-white text-[black] flex flex-col h-36 px-2">
        <div className="flex items-center justify-between">
          <section className="bg-light-white">{outputTextState}</section>
          <MdVolumeUp color="black" />
        </div>

        {isLoading ? <BeatLoader /> : <p>{data?.translation}</p>}

        <section className="absolute flex right-0 bottom-2 items-center gap-2 px-2">
          <Button onClick={copyToClipboard} variant="text">
            <MdContentCopy className="text-[black] w-5 h-5 hover:text-primary" />
          </Button>
          <Button variant="text" onClick={shareTextToWhatsApp}>
            <FaShareSquare className="text-[black] w-5 h-5 hover:text-primary" />
          </Button>
        </section>
      </div>
    </PageLayout>
  );
};
