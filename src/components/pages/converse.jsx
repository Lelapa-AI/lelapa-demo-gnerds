import { useState } from "react";
import { IoSend } from "react-icons/io5";
import dayjs from "dayjs";

import { PageLayout } from "../templates";
import { VoiceRecorder } from "../common";

export const Converse = () => {
  const [inputText, setInputText] = useState("");
  const [sent, setSent] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => setInputText(e.target.value);

  const onSend = () => {
    setSent(true);
    setMessages([inputText]);
    setInputText("");
  };

  return (
    <PageLayout hasBack title="Converse">
      <section className="flex items-center justify-end">
        {sent && (
          <section className="flex flex-col w-1/2">
            <p className="text-xs text-white bg-primary/50 drop-shadow-2xl rounded-lg p-3">
              {messages[0]}
            </p>
            <section className="flex items-center justify-end gap-2">
              {" "}
              <p className="text-end text-xs">English</p>
              <p className="text-xs text-grey">
                {dayjs(new Date()).format("HH:mm")}
              </p>
            </section>
          </section>
        )}
      </section>

      <section className="absolute bottom-0 left-0 right-0 flex items-center gap-2 px-2">
        <VoiceRecorder />
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Type a message"
          className="w-4/5 rounded-lg p-2 bg-light-white text-black border-none focus:outline-none"
        />
        <button className="bg-primary/50 rounded-full p-2" onClick={onSend}>
          <IoSend className="text-primary w-6 h-6" />
        </button>
      </section>
    </PageLayout>
  );
};
