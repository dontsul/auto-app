import Image from "next/image";
import Link from "next/link";
import one from "@/public/1.png";
import two from "@/public/2.png";
import three from "@/public/3.png";
import four from "@/public/2.png";
import five from "@/public/1.png";
import six from "@/public/2.png";
import { v4 as uuidv4 } from "uuid";
const portfolioList = [
  {
    link: "/portfolio/one",
    image: one,
    title: "Some title one",
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
];

export const MainPortfolio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center mb-[120px]">
      {portfolioList.map(({ link, image, title }) => {
        return (
          <div
            key={uuidv4()}
            className="relative cursor-pointer overflow-hidden rounded-xl "
          >
            <Link href={link} className="z-30">
              <figure className="relative h-72 w-full brightness-[.4] hover:brightness-75 transition duration-500 hover:scale-110 rounded-xl">
                <Image
                  className="h-full w-full rounded-xl "
                  src={image}
                  alt={title}
                  width={500}
                  height={500}
                />
              </figure>
              <div className=" absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-[4px]">
                <div>
                  <h5 className="text-lg text-[#111827] font-medium">
                    {title}
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
