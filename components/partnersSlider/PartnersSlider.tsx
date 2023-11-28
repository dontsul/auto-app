import { PartnersSliderList } from "./partnersSliderList/PartnersSliderList";
import { Title } from "../title/Title";
import { TitleBg } from "../titleBg/TitleBg";
import { partners } from "@/data/partnersData";

export const PartnersSlider = () => {
  return (
    <section className="container py-16 relative h-full ">
      <Title tag="h2" cn="mt-24 sm:mt-[6px] md:mt-[112px] lg:mt-[198px]">
          Online <span className="text-[#203055]">Catalogs</span>
      </Title>
      <PartnersSliderList partners={partners} />
      <TitleBg>Catalogs</TitleBg>
    </section>
  );
};
