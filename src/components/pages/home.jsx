import { ReactTyped } from "react-typed";
import { useNavigate } from "@tanstack/react-router";
import {
	FaDribbbleSquare,
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagram,
	FaTwitterSquare,
} from "react-icons/fa";

import { Button } from "../common";
import TranscribeBg from "../../assets/images/transcribe.svg";
import TranslateBg from "../../assets/images/translate.svg";
import ConverseBg from "../../assets/images/converse.svg";
import ChatBg from "../../assets/images/chat.svg";

export const Home = () => {
	const navigate = useNavigate();
	const goToTranslate = () => navigate({ to: "/translate" });
	const goToTranscribe = () => navigate({ to: "/transcribe" });
	const goToChat = () => navigate({ to: "/chat" });
	const goToSettings = () => navigate({ to: "/profile" });

	return (
		<div className="bg-background">
			<div className="max-w-[800px] mt-[-96px] bg-white w-full h-screen mx-auto items-center gap-3 flex flex-col justify-center">
				<p className="text-primary font-bold p-2">Growing with Translations</p>
				<h1 className="md:text-7xl sm:text-6xl text-4xl font-bold text-center">
					Translate to South African Languages
				</h1>
				<div className="flex justify-center items-center">
					<p className="md:text-5xl sm:text-4xl text-xl font-bold">
						An easy way for you to{" "}
					</p>
					<ReactTyped
						className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-primary"
						strings={["translate", "transcribe", "converse"]}
						typeSpeed={120}
						backSpeed={140}
						loop
					/>
				</div>
				<Button
					className="w-[200px] font-medium"
					variant="gradient"
					onClick={goToSettings}
				>
					Get Started
				</Button>
			</div>
			<div className="w-full bg-primary py-16 px-4">
				<div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
					<img className="w-[500px] mx-auto my-4" src={TranscribeBg} alt="/" />
					<div className="flex flex-col gap-4 justify-center">
						<p className="text-primary font-bold ">DATA ANALYTICS DASHBOARD</p>
						<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
							Start Talking and Let Us Do the Typing.
						</h1>
						<p>
							Say it in your language, and we&apos;ll translate it. Our service
							makes translation easier than ever—just speak, and we’ll take care
							of the rest.
							<br />
							<br />
							Whether you&rsquo;re working on international projects, connecting
							with people across borders, or simply need help with accurate
							translations, we’re here to simplify the process. Fast, reliable,
							and effortless, our voice-to-text translation tool breaks down
							language barriers with ease.
						</p>
						<Button
							className="w-[200px] font-medium"
							variant="gradient"
							onClick={goToTranslate}
						>
							Get Started
						</Button>
					</div>
				</div>
			</div>
			<div className="w-full py-16 bg-background px-4">
				<div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
					<div className="lg:col-span-2 my-4 flex flex-col gap-2 justify-center ">
						<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
							Speak Freely, Translate Instantly
						</h1>
						<p>
							Turn your voice into seamless translations. Communicate
							effortlessly across languages with our fast and accurate
							voice-to-text service.
						</p>
					</div>
					<div className="my-4">
						<div className="flex flex-col sm:flex-row items-center justify-between w-full">
							<img className="w-[300px] mx-auto my-4" src={ChatBg} alt="/" />
						</div>
					</div>
				</div>
			</div>
			<div className="w-full py-[10rem] px-4 bg-primary">
				<div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
					<div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-background">
						<img
							className="w-20 mx-auto mt-[-3rem] bg-white"
							src={TranslateBg}
							alt="/"
						/>
						<h2 className="text-2xl font-bold text-center py-8">Converse</h2>
						<p className="text-center text-4xl font-bold">Speech to Speech</p>
						<Button
							className="w-[200px] rounded-md font-medium my-6 mx-auto px-6 py"
							variant="gradient"
							onClick={goToChat}
						>
							Converse
						</Button>
					</div>
					<div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 hover:bg-background">
						<img
							className="w-20 mx-auto mt-[-3rem] bg-transparent"
							src={ConverseBg}
							alt="/"
						/>
						<h2 className="text-2xl font-bold text-center py-8">Translate</h2>
						<p className="text-center text-4xl font-bold">Text to Text</p>
						<Button
							className="w-[200px] rounded-md font-medium my-6 mx-auto px-6 "
							variant="gradient"
							onClick={goToTranslate}
						>
							Translate
						</Button>
					</div>
					<div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-background">
						<img
							className="w-20 mx-auto mt-[-3rem] bg-white"
							src={TranscribeBg}
							alt="/"
						/>
						<h2 className="text-2xl font-bold text-center py-8">Transcribe</h2>
						<p className="text-center text-4xl font-bold">Text to Speech</p>

						<Button
							className="w-[200px] rounded-md font-medium my-6 mx-auto px-6"
							variant="gradient"
							onClick={goToTranscribe}
						>
							Chat
						</Button>
					</div>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-background">
				<div>
					<h1 className="w-full text-3xl font-bold text-primary">Vula-Ringa</h1>
					<p className="py-4">
						Say goodbye to language barriers. With Vula-Ringa, speak naturally
						in your language and let us provide real-time translations. Whether
						you&rsquo;re connecting with friends, clients, or colleagues across
						the globe, we make communication seamless and accessible.
					</p>
					<div className="flex justify-between md:w-[75%] my-6">
						<FaFacebookSquare size={30} />
						<FaInstagram size={30} />
						<FaTwitterSquare size={30} />
						<FaGithubSquare size={30} />
						<FaDribbbleSquare size={30} />
					</div>
				</div>
			</div>
		</div>
	);
};
