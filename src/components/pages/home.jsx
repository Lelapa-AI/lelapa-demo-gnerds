import { useNavigate } from "@tanstack/react-router";

import { SliderCarousel, Button, PageLayout } from "../../components";
import { ConverseBg, TranscribeBg, TranslateBg } from "../../assets/images";

export const Home = () => {
  const navigate = useNavigate();
  const goToTranslate = () => navigate({ to: "/translate" });

  return (
    <PageLayout>
      <SliderCarousel
        cardsData={[
          {
            title: "Translate",
            image: TranslateBg,
            description: "Translate to South African Languages",
            route: "/translate",
          },
          {
            title: "Language",
            image: TranscribeBg,
            description: "Translate to South African Languages",
            route: "/language",
          },
          {
            title: "Converse",
            image: ConverseBg,
            description: "Translate to South African Languages",
            route: "/converse",
          },
        ]}
      />
      <section className="bottom-20 left-0 right-0 absolute flex justify-center items-center">
        <Button variant="gradient" onClick={goToTranslate} className="lg:w-2/3">
          Get Started
        </Button>
      </section>
    </PageLayout>
  );
};
