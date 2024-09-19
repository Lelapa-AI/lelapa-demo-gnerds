import dayjs from "dayjs";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import {useSound} from 'use-sound';

import { audioModel, SpeechService } from "../../services";
import { CHAT_MODES } from "../../constants";
import { Button } from "./button";
import { FaShare, FaVolumeHigh } from "react-icons/fa6";

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
		queryFn: () => SpeechService.synthesize(text, "zul-ZA-hmm-lindiwe"),
		enabled: mode === CHAT_MODES.TO,
		select: audioModel,
	});

	const [play] = useSound(
		//convert base64 wav to mp3 file or .wav file
		
	);

	console.log("Synthesize", data);

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
			<section className="flex items-center gap-4">
				<section className="relative text-xs min-h-16 max-h-full text-white bg-primary/50 drop-shadow-2xl rounded-lg py-1 px-3">
					<p>{text}</p>
					<section className="absolute py-2 bottom-0 right-1">
						<Button variant="text" onClick={shareToApps}>
							<FaShare className="text-light-white w-5 h-5" />
						</Button>
					</section>
				</section>
				<Button onClick={play} className="" variant="text">
					<FaVolumeHigh className="w-5 h-5" />
				</Button>
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
