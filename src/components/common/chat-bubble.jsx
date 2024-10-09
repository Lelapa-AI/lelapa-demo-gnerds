import { useState, useEffect } from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { useSound } from "use-sound";
import { FaRegShareFromSquare, FaShare } from "react-icons/fa6";
import { LiaHeadsetSolid } from "react-icons/lia";
import { IoPlayCircleOutline } from "react-icons/io5";

import { CHAT_MODES } from "../../constants";
import { Button } from "./button";

export const ChatBubble = ({ mode, text, lang, audio }) => {
	const [listen, setListen] = useState(false);
	const [play, { duration, stop }] = useSound(`data:audio/wav;base64,${audio}`, {
		volume: 0.9,
		playbackRate: 1,
		soundEnabled: !!audio,
	});

	useEffect(() => {
		// Stop the current audio when the audio prop changes
		stop();
		setListen(false);
	}, [audio, stop]);

	const shareToApps = () => {
		if (navigator.share) {
			navigator.share({
				title: "Translate",
				text: text,
			});
		}
	};

	const playAudio = () => {
		play();
	};

	const shareAudio = () => {
		if (navigator.share) {
			navigator.share({
				title: "Translate",
				files: [new File([audio], "audio.wav")],
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
			{listen && (
				<section className="flex items-center gap-4 py-2">
					<Button
						onClick={playAudio}
						className="flex items-center gap-2"
						variant="text"
					>
						<IoPlayCircleOutline className="w-5 h-5" />
						<p className="text-[10px]">
							{dayjs(new Date(duration)).format("mm:ss")}
						</p>
					</Button>

					<Button variant="text" onClick={shareAudio}>
						<FaRegShareFromSquare className="text-light-white w-5 h-5" />
					</Button>
				</section>
			)}
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
			<section className="flex items-center justify-between gap-2 w-14">
				<section className="flex items-center justify-start gap-2">
					<p className="text-start text-xs">{lang}</p>
					<p className="text-xs text-grey">
						{dayjs(new Date()).format("HH:mm")}
					</p>
				</section>
				{mode === CHAT_MODES.TO && !!audio && (
					<button
						type="button"
						className="text-xs text-tertiary underline"
						onClick={() => setListen(true)}
					>
						<LiaHeadsetSolid className="w-5 h-5" />
					</button>
				)}
			</section>
		</section>
	);
};

ChatBubble.propTypes = {
	mode: PropTypes.oneOf(["from", "to"]).isRequired,
	text: PropTypes.string.isRequired,
	lang: PropTypes.string.isRequired,
	audio: PropTypes.string,
};
