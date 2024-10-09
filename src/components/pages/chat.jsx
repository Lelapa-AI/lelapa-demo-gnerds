import { useState, useMemo, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import { BeatLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import { BarLoader } from "react-spinners";

import {
	TranslateService,
	translationModel,
	TranscribeService,
	SpeechService,
	audioModel,
	transcriptionModel,
} from "../../services";
import { LANG_CODES, CHAT_PLACEHOLDERS, VOICE_CODES } from "../../constants";
import { VoiceRecorder, ChatBubble, Avatar } from "../common";
import { useSettingsStore } from "../../store";
import { PageLayout } from "../templates";
import { useScreen, useTranscribe } from "../../hooks";

export const Chat = () => {
	const [process, setProcess] = useState("Idle");
	const [textMode, setTextMode] = useState(true);
	const { defaultLanguage, outputLanguage } = useSettingsStore();
	const [inputLanguage] = useState(defaultLanguage);
	const [inputText, setInputText] = useState("");
	const [messages, setMessages] = useState([]);
	const [enable, setEnable] = useState(false);
	const [sent, setSent] = useState(false);
	const { isWeb } = useScreen();
	const {
		base64String,
		fileName,
		fileSize,
		setBase64String,
		setFileName,
		setFileSize,
	} = useTranscribe();

	const handleInputChange = (e) => setInputText(e.target.value);

	const transcribe = useMemo(
		() => !!fileName && !!base64String && fileSize !== 0,
		[fileName, base64String, fileSize],
	);

	const { data: textData, isLoading: transcribing } = useQuery({
		queryKey: ["transcribe"],
		queryFn: () =>
			TranscribeService.transcribeAsync(fileName, base64String, fileSize),
		enabled: transcribe,
		select: transcriptionModel,
	});

	const {
		data,
		isLoading: translating,
		refetch,
	} = useQuery({
		queryKey: ["translate"],
		queryFn: () =>
			TranslateService.translate(
				textMode ? inputText : textData?.transcription,
				LANG_CODES[inputLanguage],
				LANG_CODES[outputLanguage],
			),
		enabled:
			(enable && sent && inputText.length > 0) || !!textData?.transcription,
		select: translationModel,
	});

	const { data: audioData, isLoading: synthesizing } = useQuery({
		queryKey: ["synthesize"],
		queryFn: () =>
			SpeechService.synthesize(data?.translation, VOICE_CODES[outputLanguage]),
		enabled: !!data?.translation && process === "Synthesizing",
		select: audioModel,
	});

	useEffect(() => {
		if (translating) console.log("Process Stage", process);
		if (transcribing) console.log("Process Stage", process);
		if (synthesizing) console.log("Process Stage", process);
	}, [translating, transcribing, synthesizing, process]);

	useEffect(
		() => setTextMode(!(transcribing && textData?.transcription)),
		[transcribing, textData],
	);

	const onSend = () => {
		setEnable(true);
		setSent(true);
		setMessages([textMode ? inputText : textData?.transcription]);
		refetch();
	};

	useEffect(() => {
		translating
			? setProcess("Translating")
			: data?.translation && !translating
				? setProcess("Synthesizing")
				: void 0;
	}, [data?.translation, translating]);

	useEffect(() => {
		if (audioData?.audioWav && !synthesizing) {
			setProcess("Idle");
		}
	}, [audioData?.audioWav, synthesizing]);

	return (
		<PageLayout
			hasBack
			title={outputLanguage}
			rightHeader={<Avatar name={outputLanguage} />}
		>
			{isWeb && (
				<header className="flex justify-center items-center flex-col">
					<section className="flex gap-1">
						Chatting with <p className="text-primary">{outputLanguage}</p>
					</section>
					<Avatar name={outputLanguage} />
				</header>
			)}
			<section className="flex flex-col items-center gap-2 justify-center">
				<BarLoader color="#2563EB" loading={process !== "Idle"} />
				<p className="text-center text-xs">
					{process !== "Idle" ? `${process}...` : ""}
				</p>
			</section>
			<section className="absolute bottom-[15%] left-0 right-0 flex-col gap-2 px-2">
				<section className="flex items-center justify-end">
					{sent && (
						<ChatBubble mode="from" text={messages[0]} lang={inputLanguage} />
					)}
				</section>
				<section className="flex items-center justify-start">
					{translating && <BeatLoader color="#F19A1A" />}
					{enable && !translating && (
						<ChatBubble
							mode="to"
							text={data?.translation}
							lang={outputLanguage}
							audio={audioData?.audioWav}
						/>
					)}
				</section>
			</section>

			<section className="absolute bottom-0 left-0 right-0 flex items-center gap-2 px-2 py-1">
				<VoiceRecorder
					setBase64String={setBase64String}
					setFileName={setFileName}
					setFileSize={setFileSize}
				/>
				<input
					type="text"
					onChange={handleInputChange}
					placeholder={[CHAT_PLACEHOLDERS[defaultLanguage]]}
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
