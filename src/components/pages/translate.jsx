import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import { FaWhatsapp } from "react-icons/fa";
import copy from "copy-to-clipboard";
import isEmpty from "lodash/isEmpty";
import toast, { Toaster } from "react-hot-toast";

import { config } from "../../../config";
import { Button, P, PageLayout, LanguageDropdown } from "../../components";
import { TranslateService, translationModel } from "../../services";
import { LANG_CODES } from "../../constants";

export const Translate = () => {
  const [enable, setEnable] = useState(false);
  const [inputTextState, setInputTextState] = useState("English");
  const [outputTextState, setOutputTextState] = useState("Zulu");
  const [textState, setTextState] = useState("");
  const { whatsAppURL } = config;

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["translate"],
    queryFn: () =>
      TranslateService.translate(
        textState,
        LANG_CODES[inputTextState],
        LANG_CODES[outputTextState]
      ),
    enabled: enable,
    select: translationModel,
  });

  const onStartTranslate = () => {
    setEnable(true);
    refetch();
  };

  const copyToClipboard = () => {
    if (!isEmpty(data?.translation)) {
      copy(data?.translation);
      toast.success("Text copied to clipboard!");
    } else {
      toast.error("No text to copy!");
    }
  };

  const shareTextToWhatsApp = () => {
    if (data?.translation) {
      const url = `${whatsAppURL}/send?text=${data?.translation}`;
      window.open(url, "_blank");
    } else {
      toast.error("No text to share!");
    }
  };

  return (
    <PageLayout hasBack title="Translate">
      <P className="text-xs text-center">
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
          <p>
            <span className="text-l font-bold text-primary ">From: </span>
            {inputTextState}
          </p>
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
        <section className="flex items-center justify-center px-2">
          <Button
            className="w-1/2"
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
        <p>
          <span className="text-l font-bold text-primary ">To: </span>
          {outputTextState}
        </p>
        {isLoading ? <BeatLoader /> : <p>{data?.translation}</p>}
        <section className="absolute flex right-0 bottom-2 items-center gap-2 px-2">
          <Button onClick={copyToClipboard} variant="text">
            <MdContentCopy className="text-[black] w-5 h-5 hover:text-primary" />
          </Button>
          <Button variant="text" onClick={shareTextToWhatsApp}>
            <FaWhatsapp className="text-[black] w-5 h-5 hover:text-primary" />
          </Button>
        </section>
      </div>
      <Toaster />
    </PageLayout>
  );
};
