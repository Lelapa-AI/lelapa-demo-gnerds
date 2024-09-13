import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";

import { LANG_CODES } from "../../constants";
import { TranslateService, translationModel } from "../../services";
import { PageLayout } from "../templates";
import { VoiceRecorder, ChatBubble } from "../common";

export const Chat = () => {
  const [enable, setEnable] = useState(false);
  const [inputLanguage] = useState("English");
  const [outputLanguage /* setOutputLanguage */] = useState("Zulu");
  const [inputText, setInputText] = useState("");
  const [sent, setSent] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => setInputText(e.target.value);

  const onSend = () => {
    setSent(true);
    setEnable(true);
    setMessages([inputText]);
    //setInputText("");
    refetch();
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["translate"],
    queryFn: () =>
      TranslateService.translate(
        inputText,
        LANG_CODES[inputLanguage],
        LANG_CODES[outputLanguage]
      ),
    enabled: enable && sent && inputText.length > 0,
    select: translationModel,
  });

  return (
    <PageLayout hasBack title="Converse" rightHeader={outputLanguage}>
      <section className="absolute bottom-[15%] left-0 right-0 flex-col gap-2 px-2">
        <section className="flex items-center justify-end">
          {sent && (
            <ChatBubble mode="from" text={messages[0]} lang={inputLanguage} />
          )}
        </section>
        <section className="flex items-center justify-start">
          {isLoading && <BeatLoader color="#F19A1A" />}
          {enable && !isLoading && (
            <ChatBubble
              mode="to"
              text={data?.translation}
              lang={outputLanguage}
            />
          )}
        </section>
      </section>

      <section className="absolute bottom-0 left-0 right-0 flex items-center gap-2 px-2 py-1">
        <VoiceRecorder />
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Type a message"
          className="w-4/5 rounded-lg p-2 bg-light-white text-[black] border-none focus:outline-none"
        />
        <button
          type="button"
          className="bg-primary/50 rounded-full p-2"
          onClick={onSend}
        >
          <IoSend className="text-primary w-6 h-6" />
        </button>
      </section>
    </PageLayout>
  );
};
