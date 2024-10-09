import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { BarLoader } from "react-spinners";

import { TranscribeService, transcriptionModel } from "../../services";
import { SubHeading, VoiceRecorder, OutputBox } from "../common";
import { useTranscribe } from "../../hooks";
import { PageLayout } from "../templates";

export const Transcribe = () => {
	const {
		base64String,
		fileName,
		fileSize,
		setBase64String,
		setFileName,
		setFileSize,
	} = useTranscribe();

	const transcribe = useMemo(
		() => !!fileName && !!base64String && fileSize !== 0,
		[fileName, base64String, fileSize],
	);

	const { data, isLoading } = useQuery({
		queryKey: ["transcribe"],
		queryFn: () =>
			TranscribeService.transcribeAsync(fileName, base64String, fileSize),
		enabled: transcribe,
		select: transcriptionModel,
	});

	return (
		<PageLayout hasBack title="Transcribe">
			<section className="flex items-center gap-2 justify-end">
				{data?.languageId && (
					<>
						<h2 className="text-xl font-bold">Language:</h2>
						<p className="bg-tertiary font-semibold px-3 py-1 rounded-lg w-fit">
							{data?.languageId ?? ""}
						</p>
					</>
				)}
			</section>
			<section className="flex flex-col items-center gap-2 justify-center">
				<BarLoader color="#2563EB" loading={isLoading} />
				<p className="text-center text-xs">
					{isLoading ? "Transcribing..." : ""}{" "}
				</p>
			</section>
			<section className="flex items-center justify-center h-screen">
				{!isLoading && data?.transcription ? (
					<section className="flex flex-col">
						<SubHeading title="Transcription:" />
						<OutputBox text={data?.transcription} isLoading={isLoading} />
					</section>
				) : (
					<VoiceRecorder
						setBase64String={setBase64String}
						setFileName={setFileName}
						setFileSize={setFileSize}
					/>
				)}
			</section>
		</PageLayout>
	);
};
