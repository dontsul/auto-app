import { Title } from "@/components/title/Title";
import { CustomForm } from "@/components/customForm/CustomForm";
import Image from "next/image";
import { Metadata } from "next";
import { DoubleSidedCard } from "@/components/doubleSidedCard/DoubleSidedCard";
import { listWaxol } from "@/data/waxoyl";
import { TextPage } from "@/components/textPage/TextPage";
import rp from "@/public/images/rust-prevention/rp.png";

export const metadata: Metadata = {
  title: "RUST PREVENTION",
  description:
    "Here at Capital Upfitters we specialized in preventative methods against Rust and Corrosion. We always strive to provide our client with the best and most innovative solutions for their needs.",
};

export default function RustPrevention() {
  return (
    <div className="py-16 container">
      <Title tag="h2" cn="mb-16">
        Rust <span className="text-yellow-500">Prevention</span>
      </Title>
      <TextPage cn="text-2xl mb-12">
        Here at Capital Upfitters we specialized in preventative methods against
        Rust and Corrosion. We always strive to provide our client with the best
        and most innovative solutions for their needs.
      </TextPage>
      <div className="grid grid-cols-1 gap-10 justify-between lg:justify-center lg:grid-cols-2 mb-16">
        <div>
          <h5 className="mb-2 text-lg font-semibold text-gray-900 ">
            The Science Behind Waxoyl Hardwax:
          </h5>
          <ul className="space-y-1 text-gray-500 list-disc list-inside mb-12">
            <li>Hardwax kills existing surface rust!</li>
            <li>
              The unique capillary action of Waxoyl Hardwax displaces moisture
              to achieve an optimum bond, even in damp environments. Waxoyl
              adheres equally well to wet or dry metal
            </li>
            <li>
              A little goes a long way! Optimal protection can be achieved with
              only .06 to .08 mm dry film thickness, resulting in a coverage
              area over 55 square feet per liter.
            </li>
            <li>
              Insulates against temperature changes and provides sound-proofing
              for a quieter ride.
            </li>
            <li>
              Simple to use and efficient, Waxoyl Professional tools make
              application easy and require no maintenance or cleaning
            </li>
            <li>Temperature range of active protection from -30°F to 302°F.</li>
            <li>
              Very resistant to aging. Contains no mineral acids, bases, lead,
              chromium, or zinc
            </li>
            <li>
              Safe on all paint finishes. Contains no silicones o fluorocarbons.
            </li>
            <li>Offers Black Undercoating and Clear Cavity Wax Inhibitor.</li>
            <li>
              Automakers like ALFA-ROMEO, BMW, FORD, FERRARI, HONDA, JAGUAR,
              LAND ROVER, LEXUS, MERCEDES-BENZ, and SUBARU prefer Waxoyl as
              their solution of choice.
            </li>
          </ul>

          {/*  */}
          <h5 className="mb-2 text-lg font-semibold text-gray-900 ">
            The Science Behind Woolwax Inhibitor:
          </h5>
          <ul className="space-y-1 text-gray-500 list-disc list-inside mb-12">
            <li>
              Woolwax® contains much more raw woolgrease (lanolin) than
              competitive products.
            </li>
            <li>
              Lanolin is a unique organic substance derived from the wool grease
              coating on raw sheep wool.
            </li>
            <li>
              Woolwax® is thicker and much more resistant to wash off compared
              to other Oil-Based products. Thereby providing a longer period of
              protection for exposed undercarriage areas.
            </li>
            <li>
              Woolwax™ is a maintenance application. A Woolwax™ treatment will
              easily provide protection through even the harshest of winter
              conditions.
            </li>
            <li>
              WoolWax® is the one of the most trusted name in vehicle
              undercoating protection. Municipalities, Fire Departments,
              Undercoaters, and snow and ice removal companies all throughout
              the northeast trust WoolWax® for their corrosion protection needs.
              WoolWax® is a heavy duty industrial grade lanolin/woolgrease
              formula that provides powerful long term corrosion protection.
              Because WoolWax® is built thicker, it is more resistant to
              wash-off than competitors&apos; products. WoolWax® is built to
              last longer! Available in clear and black.
            </li>
          </ul>
        </div>
        <div className="rounded-md flex justify-center items-start lg:justify-end">
          <Image
            src={rp}
            width={700}
            height={1000}
            alt="Our Services"
            className="rounded-md"
          />
        </div>
      </div>
      <DoubleSidedCard title="Rust Prevention Methods" list={listWaxol} />
      <Title tag="h4" cn="mb-10">
        Contact us
      </Title>
      <CustomForm />
    </div>
  );
}
