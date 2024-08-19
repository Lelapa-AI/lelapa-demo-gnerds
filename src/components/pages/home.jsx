import { SliderCarousel, Button } from "../../components";
import { ConverseBg, TranscribeBg, TranslateBg } from "../../assets/images";

import { useNavigate } from "@tanstack/react-router";

export const Home = () => {
  const navigate = useNavigate();
  const goToTranslate = () => navigate({ to: "/translate" });

  return (
    <section className="flex flex-col gap-3 px-10 py-4">
      <SliderCarousel
        cardsData={[
          {
            title: "Translate",
            image: TranslateBg,
            description: "Translate to South African Languages",
          },
          {
            title: "Transcribe",
            image: TranscribeBg,
            description: "Translate to South African Languages",
          },
          {
            title: "Converse",
            image: ConverseBg,
            description: "Translate to South African Languages",
          },
        ]}
      />
      <section className="bottom-20 left-0 right-0 absolute flex justify-center items-center">
        <Button variant="gradient" onClick={goToTranslate} className="lg:w-2/3">
          Get Started
        </Button>
      </section>
    </section>
  );
};
