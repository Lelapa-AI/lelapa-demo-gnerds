import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import { SubHeading, VoiceRecorder } from "../common";
import { TranscribeService, transcriptionModel } from "../../services";
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
				<h2 className="text-xl font-bold">Language:</h2>
				<p className="bg-tertiary font-semibold px-3 py-1 rounded-lg w-fit">
					{data?.languageId ?? ""}
				</p>
			</section>
			<section className="flex items-center justify-center h-screen">
				{!isLoading && data?.transcription ? (
					<section className="flex flex-col">
						<SubHeading title="Results" />
						<section className="flex items-center gap-5 border-b-secondary">
							<h2 className="text-2xl font-bold">Transcription:</h2>
							<p>{data?.transcription ?? ""}</p>
						</section>
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
