import { Title } from "@/components/title/Title";
import { CustomForm } from "@/components/customForm/CustomForm";
import Image from "next/image";
import imageAuto from "@/public/1.png";
import { PartnersSlider } from "@/components/partnersSlider/PartnersSlider";

export default function Accessories() {
  return (
    <div className="py-16 container">
      <Title tag="h2" cn="mb-16">
        Accessories <span className="text-[#203055]">Service</span>
      </Title>
      <div className="grid grid-cols-1 gap-10 justify-between lg:justify-center lg:grid-cols-2 mb-16">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestias facilis
            praesentium vitae consectetur nemo dolorum facere quas qui ducimus eius earum similique
            tempore fuga, recusandae aliquid accusamus id quisquam.
          </p>
        </div>
        <div className="rounded-md flex justify-center items-center lg:justify-end">
          <Image
            src={imageAuto}
            width={700}
            height={500}
            alt="Our Services"
            className="rounded-md"
          />
        </div>
      </div>
      <PartnersSlider />
      <Title tag="h4" cn="mb-10">
        Contact us
      </Title>
      <CustomForm />
    </div>
  );
}
