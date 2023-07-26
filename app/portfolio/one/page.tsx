import { Title } from "@/components/title/Title";
import { CustomForm } from "@/components/customForm/CustomForm";
import { SliderPortfolio } from "@/components/sliderPortfolio/SliderPortfolio";
import { IPortfolioList } from "@/interfaces/portfolio";

import one from "@/public/1.png";
import two from "@/public/2.png";
import three from "@/public/3.png";
import four from "@/public/2.png";
import five from "@/public/1.png";
import six from "@/public/2.png";

const portfolioList: IPortfolioList[] = [
  {
    link: "/",
    image: one,
    title: "Some title",
  },
  {
    link: "/",
    image: two,
    title: "Some title",
  },
  {
    link: "/",
    image: three,
    title: "Some title",
  },
  {
    link: "/",
    image: four,
    title: "Some title",
  },
  {
    link: "/",
    image: five,
    title: "Some title",
  },
  {
    link: "/",
    image: six,
    title: "Some title",
  },
  {
    link: "/",
    image: one,
    title: "Some title",
  },
  {
    link: "/",
    image: two,
    title: "Some title",
  },
  {
    link: "/",
    image: three,
    title: "Some title",
  },
  {
    link: "/",
    image: three,
    title: "Some title",
  },
  {
    link: "/",
    image: one,
    title: "Some title",
  },
  {
    link: "/",
    image: two,
    title: "Some title",
  },
];

export default function One() {
  return (
    <main className="container py-16">
      <Title tag="h2" cn="mb-16">
        One <span className="text-yellow-500">Portfolio</span>
      </Title>
      <SliderPortfolio portfolioList={portfolioList} />

      <Title tag="h4" cn="mb-10 mt-10">
        CONTACT US
      </Title>
      <CustomForm />
    </main>
  );
}
