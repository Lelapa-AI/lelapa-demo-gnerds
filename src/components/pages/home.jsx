import { AppLayout, SliderCarousel } from "../../components";
import { TranslateBg } from "../../assets/images";

export const Home = () => {
  return (
    <AppLayout>
      <SliderCarousel
        cardsData={[
          {
            title: "Translate",
            image: TranslateBg,
            description: "Translate to South African Languages",
          },
        ]}
      />
    </AppLayout>
  );
};
