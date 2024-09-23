import dayjs from "dayjs";
import PropTypes from "prop-types";
import { useSound } from "use-sound";
import { useQuery } from "@tanstack/react-query";
import { FaRegShareFromSquare, FaShare, FaVolumeHigh } from "react-icons/fa6";

import { audioModel, SpeechService } from "../../services";
import { CHAT_MODES, VOICE_CODES } from "../../constants";
import { Button } from "./button";
import { useMemo } from "react";

export const ChatBubble = ({ mode, text, lang }) => {
	const shareToApps = () => {
		if (navigator.share) {
			navigator.share({
				title: "Translate",
				text: text,
			});
		}
	};

	const { data } = useQuery({
		queryKey: ["synthesize"],
		queryFn: () => SpeechService.synthesize(text, VOICE_CODES[lang]),
		enabled: mode === CHAT_MODES.TO,
		select: audioModel,
	});

	const audio = useMemo(
		() => `data:audio/wav;base64,${data?.audioWav}`,
		[data?.audioWav],
	);

	const [play, { duration }] = useSound(audio, {
		volume: 0.5,
		playbackRate: 1,
	});

	const shareAudio = () => {
		if (navigator.share) {
			navigator.share({
				title: "Translate",
				files: [new File([data?.audioWav], "audio.wav")],
			});
		}
	};

	return mode === CHAT_MODES.FROM ? (
		<section className="flex flex-col w-2/3">
			<p className="text-xs text-white min-h-16 max-h-full bg-primary/50 drop-shadow-2xl rounded-lg p-3">
				{text}
			</p>
			<section className="flex items-center justify-end gap-2">
				<p className="text-end text-xs">{lang}</p>
				<p className="text-xs text-grey">{dayjs(new Date()).format("HH:mm")}</p>
			</section>
		</section>
	) : (
		<section className="flex flex-col w-2/3">
			<section className="flex items-center gap-4 py-2">
				<Button
					onClick={play}
					className="flex items-center gap-2"
					variant="text"
				>
					<FaVolumeHigh className="w-5 h-5" />
					<p className="text-[10px]">
						{dayjs(new Date(duration)).format("mm:ss")}
					</p>
				</Button>

				<Button variant="text" onClick={shareAudio}>
					<FaRegShareFromSquare className="text-light-white w-5 h-5" />
				</Button>
			</section>
			<section className="flex items-center gap-4">
				<section className="relative text-xs min-h-16 max-h-full text-white bg-primary/50 drop-shadow-2xl rounded-lg py-1 px-3">
					<p>{text}</p>
					<section className="absolute py-2 bottom-0 right-1">
						<Button variant="text" onClick={shareToApps}>
							<FaShare className="text-light-white w-5 h-5" />
						</Button>
					</section>
				</section>
			</section>
			<section className="flex items-center justify-start gap-2">
				<p className="text-start text-xs">{lang}</p>
				<p className="text-xs text-grey">{dayjs(new Date()).format("HH:mm")}</p>
			</section>
		</section>
	);
};

ChatBubble.propTypes = {
	mode: PropTypes.oneOf(["from", "to"]).isRequired,
	text: PropTypes.string.isRequired,
	lang: PropTypes.string.isRequired,
};
