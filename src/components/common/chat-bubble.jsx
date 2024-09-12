import dayjs from "dayjs";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";

import { SpeechService } from "../../services";
import { CHAT_MODES } from "../../constants";
import { Button } from "./button";
import { FaShare, FaVolumeHigh } from "react-icons/fa6";
import axios from "axios";

export const ChatBubble = ({ mode, text, lang }) => {
	const shareToApps = () => {
		if (navigator.share) {
			navigator.share({
				title: "Translate",
				text: text,
			});
		}
	};

	const playAudio = () => {};

	/* const { data } = useQuery({
		queryKey: ["synthesize"],
		queryFn: () => SpeechService.synthesize(text, "zul-ZA-hmm-lindiwe"),
		enabled: mode === CHAT_MODES.TO,
	}); */

	const { data: voices } = useQuery({
		queryKey: ["voices"],
		queryFn: () => SpeechService.getVoices(),
	});

	try {
		axios.get("https://api.qfrency.com/v1/synthesize", {
			params: {
				"voice-code": "zul-ZA-hmm-lindiwe",
				text: text,
			},
			headers: { X_API_KEY: "263a08cc-4a1e-4f3c-aef9-69b1223fe668" },
		});
	} catch (error) {
		console.error("Error", error);
	}

	console.log("Synth call", "synthesizeData", "voices", voices);

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
				<Button onClick={playAudio} className="" variant="text">
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
