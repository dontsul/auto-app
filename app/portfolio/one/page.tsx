import { Title } from "@/components/title/Title";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { CustomForm } from "@/components/customForm/CustomForm";
import { TextPage } from "@/components/textPage/TextPage";

import one from "@/public/1.png";
import two from "@/public/2.png";
import three from "@/public/3.png";
import four from "@/public/2.png";
import five from "@/public/1.png";
import six from "@/public/2.png";

const portfolioList = [
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
];

export default function One() {
  return (
    <main className="container py-16">
      <Title tag="h2" cn="mb-16">
        One <span className="text-yellow-500">Portfolio</span>
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-2 justify-center mb-[120px]">
        {portfolioList.map(({ link, image, title }) => {
          return (
            <div key={uuidv4()}>
              <Image
                className="w-full transition-all duration-500 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                src={image}
                height={500}
                width={500}
                alt={title}
              />
            </div>
          );
        })}
      </div>
      <Title tag="h4" cn="mb-10 mt-10">
        Form
      </Title>
      <CustomForm />
      <TextPage>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam
        laborum autem mollitia omnis aliquid unde repellendus vitae, temporibus
        consectetur quaerat repudiandae dolorum! Inventore, aliquam saepe? Velit
        obcaecati rerum a esse, commodi facilis explicabo voluptas! Odio
        reiciendis a dolore maiores dolor. Iste dicta magnam repudiandae ratione
        fugit eaque libero voluptas officia in, ipsa sint. Earum soluta a
        recusandae distinctio accusamus quam, dolores eaque illum fugiat minus
        sequi molestias dolorum necessitatibus commodi id est dolorem ipsum
        facere ipsa nemo possimus debitis eum? Maiores, voluptates! Maiores esse
        ab praesentium odio, cupiditate, vel illo dolores doloribus fugiat
        excepturi, eligendi sit necessitatibus expedita? Aperiam!
      </TextPage>
    </main>
  );
}
