import { SliderCarousel } from "../../components";
import { ConverseBg, TranscribeBg, TranslateBg } from "../../assets/images";

export const Home = () => {
  return (
    <div>
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
    </div>
  );
};
