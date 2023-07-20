import { ReviewsList } from "./reviewsList/ReviewsList";
import { Title } from "../title/Title";
import { TitleBg } from "../titleBg/TitleBg";

export const Reviews = () => {
  return (
    <section className="container py-16 relative h-full ">
      <Title tag="h2" cn="mt-24 sm:mt-[6px] md:mt-[112px] lg:mt-[198px]">
        Our Past <span className="text-yellow-500">Clients</span>
      </Title>
      <ReviewsList />
      <TitleBg>Reviews</TitleBg>
    </section>
  );
};
