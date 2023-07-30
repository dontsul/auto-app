import { ReviewsList } from "./reviewsList/ReviewsList";
import { Title } from "../title/Title";
import { TitleBg } from "../titleBg/TitleBg";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const placeId = process.env.NEXT_PUBLIC_PLACE_ID;
console.log(placeId);

const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

const fetchRewiews = async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const Reviews = async () => {
  const { result } = await fetchRewiews();
  return (
    <section className="container py-16 relative h-full ">
      <Title tag="h2" cn="mt-24 sm:mt-[6px] md:mt-[112px] lg:mt-[198px]">
        Our Past <span className="text-yellow-500">Clients</span>
      </Title>
      <ReviewsList reviews={result?.reviews} />
      <TitleBg>Reviews</TitleBg>
    </section>
  );
};
