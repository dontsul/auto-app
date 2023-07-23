import { Title } from "@/components/title/Title";
import { CustomForm } from "@/components/customForm/CustomForm";
import imageAuto from "@/public/1.png";
import { TextPage } from "@/components/textPage/TextPage";
import { ImagePage } from "@/components/imagePage/ImagePage";

export default function PaintProtectionFilm() {
  return (
    <div className="py-16 container">
      <Title tag="h2" cn="mb-16">
        Paint Protection <span className="text-yellow-500">Film</span>
      </Title>
      <div className="grid grid-cols-1 gap-10 justify-between lg:justify-center lg:grid-cols-2 mb-16  auto-rows-auto;">
        <div>
          <h6 className="text-start text-[#111827] leading-7 mb-4 font-semibold">
            PRESERVE YOUR CAR WITH THE FINEST PROTECTION FILM AROUND
          </h6>
          <TextPage cn="mb-8">
            <strong>Paint Protection Film</strong>, also known as{" "}
            <strong>clear bra</strong>, is an ultra-thin, nearly invisible
            urethane layer skillfully designed to adhere to your vehicle&apos;s
            exterior, delivering extensive protection against potential damage.
            This strong and long-lasting material is professionally applied to
            the painted surfaces of your car, serving as a shield to keep your
            vehicle safe from unsightly scratches, chips, and scuffs.
          </TextPage>
          <TextPage cn="mb-8">
            The flexible nature of PPF allows it to be used on a range of car
            surfaces, including fenders, bumpers, mirrors, trunk ledges, and
            more. Engineered with advanced technology, Paint Protection Film
            offers a unique and effective way to maintain your vehicle in
            pristine condition, ensuring it stays free from damage. If you
            reside in the DMV or surrounding areas and wish to keep your vehicle
            looking its best for years to come, we invite you to reach out to us
            today to learn more about our Paint Protection Film services.
          </TextPage>
        </div>

        <ImagePage img={imageAuto} />
      </div>
      <TextPage cn="mb-32">
        At{" "}
        <strong className="text-yellow-500 font-extrabold ">
          Capital Upfitters&apos;
        </strong>{" "}
        , we are recognized experts in paint protection with over a decade of
        experience in applying protection film. Our staff doesn&apos;t
        compromise quality for a lower price. When you decide to remove our
        paint protection film, your car&apos;s factory paint will still be
        there. Our commitment to delivering top-quality results has made us a
        preferred vendor for numerous dealerships in the DC Metro Area.
      </TextPage>
      <Title tag="h4" cn="mb-10">
        Contact us
      </Title>
      <CustomForm />
    </div>
  );
}
