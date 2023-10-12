import { Title } from "@/components/title/Title";
import { CustomForm } from "@/components/customForm/CustomForm";
import Image from "next/image";
import rangeRoverGif from "@/public/images/hitches/Range-Rover.gif";
import { DoubleSidedCard } from "@/components/doubleSidedCard/DoubleSidedCard";
import { listHitches } from "@/data/hitches";
import { TextPage } from "@/components/textPage/TextPage";
import { textPrimaryHitches, stealthHitchHitches, ecoHitchHitches } from "@/data/hitches";
import Line from "@/components/linePages/Line";
export default function Hitches() {
  return (
    <div className="py-16 container">
      <Title tag="h2" cn="mb-16">
          Receiver <span className="text-yellow-500">Hitches</span>
      </Title>
      <TextPage cn=" mb-12">{textPrimaryHitches}</TextPage>
        <Line />

        <div className="grid grid-cols-1 gap-10 justify-between lg:justify-center lg:grid-cols-2 items-start mt-2 mb-2">
            <div className="rounded-md flex justify-center items-center lg:justify-end">
                <Image src={rangeRoverGif} width={700} height={500} alt="Our Services" className="rounded-md" />
            </div>
            <div>
                <h5 className="mb-2 text-lg font-semibold text-gray-900 ">{stealthHitchHitches.title}</h5>
                <ul className="space-y-1 text-gray-500 list-disc list-inside mb-12">
                    {stealthHitchHitches.list.map((item, index) => (
                        <li className="p-1" key={index}>{item}</li>
                    ))}
                </ul>
            </div>

        </div>

        <Line />
        <div className="grid grid-cols-1 gap-10 justify-between lg:justify-center lg:grid-cols-2 items-start mt-2 mb-2">

            <div className="lg:mt-0 mt-4"> {/* Додаємо відступ тільки на більших екранах */}
                <h5 className="mb-2 text-lg font-semibold text-gray-900 ">{ecoHitchHitches.title}</h5>
                <ul className="space-y-1 text-gray-500 list-disc list-inside mb-12">
                    {ecoHitchHitches.list.map((item, index) => (
                        <li className="p-1" key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="rounded-md flex justify-center items-center lg:justify-end">
                <Image src={rangeRoverGif} width={700} height={500} alt="Our Services" className="rounded-md" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
        </div>



        <DoubleSidedCard title="Hitches" list={listHitches} />
      <Title tag="h4" cn="mb-10">
        CONTACT US
      </Title>
      <CustomForm />
    </div>
  );
}
