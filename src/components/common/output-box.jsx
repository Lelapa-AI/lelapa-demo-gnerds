import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";
import { BeatLoader } from "react-spinners";
import { MdContentCopy } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import copy from "copy-to-clipboard";
import isEmpty from "lodash/isEmpty";

import { Button, SubHeading } from "../common";
import { config } from "../../../config";

export const OutputBox = ({ text, isLoading }) => {
	const { whatsAppURL } = config;
	const copyToClipboard = () => {
		if (!isEmpty(text)) {
			copy(text);
			toast.success("Text copied to clipboard!");
		} else {
			toast.error("No text to copy!");
		}
	};

	const shareTextToWhatsApp = () => {
		if (text) {
			const url = `${whatsAppURL}/send?text=${text}`;
			window.open(url, "_blank");
		} else {
			toast.error("No text to share!");
		}
	};

	return (
		<>
			<section className="flex flex-col">
				<SubHeading title="Transcription:" />
				<div className="rounded-lg relative bg-light-white text-[black] flex flex-col h-36 px-2">
					{isLoading ? <BeatLoader /> : <p>{text ?? ""}</p>}
					<section className="absolute flex right-0 bottom-2 items-center gap-2 px-2">
						<Button onClick={copyToClipboard} variant="text">
							<MdContentCopy className="text-[black] w-5 h-5 hover:text-primary" />
						</Button>
						<Button variant="text" onClick={shareTextToWhatsApp}>
							<FaWhatsapp className="text-[black] w-5 h-5 hover:text-primary" />
						</Button>
					</section>
				</div>
			</section>
			<Toaster />
		</>
	);
};

OutputBox.propTypes = {
	text: PropTypes.string,
	isLoading: PropTypes.bool,
};
