import { Title } from "@/components/title/Title";
import { CustomForm } from "@/components/customForm/CustomForm";
import Image from "next/image";
import imageAuto from "../../public/images/aboutSection.png";
import { DoubleSidedCard } from "@/components/doubleSidedCard/DoubleSidedCard";
import { listXpel } from "@/data/xpelData";
import {TextPage} from "@/components/textPage/TextPage";
import {rustPreventionContent, rustPreventionSlider} from "@/data/rustPrevention";
import Line from "@/components/linePages/Line";
import rangeRoverGif from "@/public/images/hitches/Range-Rover.gif";
import {DataServices} from "@/data/DataServices";

export default function Services() {
  return (
      <div className="py-16 container">
          <Title tag="h2" cn="mb-16">
              Our <span className="text-text-[#203055]">Services</span>
          </Title>
          <TextPage cn="text-2xl mb-12">{DataServices.text[0]}</TextPage>
          <Line />

          {/*Hitches:*/}

          <div className="grid grid-cols-1 gap-10 justify-between lg:justify-center lg:grid-cols-2 items-start mt-2 mb-2">
              <div className="">
                  <h5 className="mb-2 text-lg font-normal text-gray-900 ">
                      {DataServices.HitchesTitle.title}
                  </h5>
                  <ul className="space-y-1 text-gray-500 list-disc list-inside mb-12">
                      {DataServices.HitchesTitle.list.map((item, index) => (
                          <li key={index}>{item}</li>
                      ))}
                  </ul>
              </div>
              <div className="rounded-md flex justify-center items-center lg:justify-end ">
                  <Image
                      src={rangeRoverGif}
                      width={700}
                      height={500}
                      alt="Our Services"
                      className="rounded-md"
                  />
              </div>
          </div>

          <Line />
          {/*Patriot Liner:*/}

          <div className="grid grid-cols-1 gap-10 justify-between lg:justify-center lg:grid-cols-2 items-start mt-2 mb-2">
              <div className="lg:mt-0 mt-4 lg:order-2">
                  <h5 className="mb-2 text-lg font-normal text-gray-900 ">
                      {DataServices.PatriotTitle.title}
                  </h5>
                  <ul className="space-y-1 text-gray-500 list-disc list-inside mb-12">
                      {DataServices.PatriotTitle.list.map((item, index) => (
                          <li key={index}>{item}</li>
                      ))}
                  </ul>
              </div>
              <div className="rounded-md flex justify-center items-center lg:justify-end lg:order-1">
                  <Image
                      src={rangeRoverGif}
                      width={700}
                      height={500}
                      alt="Our Services"
                      className="rounded-md"
                      style={{ maxWidth: "100%", height: "auto" }}
                  />
              </div>
          </div>
          <Line />
          {/*Rust Prevention:*/}

          <div className="grid grid-cols-1 gap-10 justify-between lg:justify-center lg:grid-cols-2 items-start mt-2 mb-2">
              <div className="lg:mt-0 mt-4 ">
                  <h5 className="mb-2 text-lg font-normal text-gray-900 ">
                      {DataServices.woolwaxInhibitor.title}
                  </h5>
                  <ul className="space-y-1 text-gray-500 list-disc list-inside mb-12">
                      {DataServices.woolwaxInhibitor.list.map((item, index) => (
                          <li key={index}>{item}</li>
                      ))}
                  </ul>
              </div>
              <div className="rounded-md flex justify-center items-center lg:justify-end ">
                  <Image
                      src={rangeRoverGif}
                      width={700}
                      height={500}
                      alt="Our Services"
                      className="rounded-md"
                      style={{ maxWidth: "100%", height: "auto" }}
                  />
              </div>
          </div>

          <Line />
          {/*Commercial Vehicle Upfitting:*/}

          <div className="grid grid-cols-1 gap-10 justify-between lg:justify-center lg:grid-cols-2 items-start mt-2 mb-2">
              <div className="lg:mt-0 mt-4 lg:order-2">
                  <h5 className="mb-2 text-lg font-normal text-gray-900 ">
                      {DataServices.CommercialInhibitor.title}
                  </h5>
                  <ul className="space-y-1 text-gray-500 list-disc list-inside mb-12">
                      {DataServices.CommercialInhibitor.list.map((item, index) => (
                          <li key={index}>{item}</li>
                      ))}
                  </ul>
              </div>
              <div className="rounded-md flex justify-center items-center lg:justify-end lg:order-1">
                  <Image
                      src={rangeRoverGif}
                      width={700}
                      height={500}
                      alt="Our Services"
                      className="rounded-md"
                      style={{ maxWidth: "100%", height: "auto" }}
                  />
              </div>
          </div>
          <Line />
          {/*Auto & Truck Accessories:*/}

          <div className="grid grid-cols-1 gap-10 justify-between lg:justify-center lg:grid-cols-2 items-start mt-2 mb-2">
              <div className="lg:mt-0 mt-4 ">
                  <h5 className="mb-2 text-lg font-normal text-gray-900 ">
                      {DataServices.AutoTruckInhibitor.title}
                  </h5>
                  <ul className="space-y-1 text-gray-500 list-disc list-inside mb-12">
                      {DataServices.AutoTruckInhibitor.list.map((item, index) => (
                          <li key={index}>{item}</li>
                      ))}
                  </ul>
              </div>
              <div className="rounded-md flex justify-center items-center lg:justify-end ">
                  <Image
                      src={rangeRoverGif}
                      width={700}
                      height={500}
                      alt="Our Services"
                      className="rounded-md"
                      style={{ maxWidth: "100%", height: "auto" }}
                  />
              </div>
          </div>

          <Line />
          {/*Suspension Upgrades:*/}

          <div className="grid grid-cols-1 gap-10 justify-between lg:justify-center lg:grid-cols-2 items-start mt-2 mb-2">
              <div className="lg:mt-0 mt-4 lg:order-2">
                  <h5 className="mb-2 text-lg font-normal text-gray-900 ">
                      {DataServices.SuspensionInhibitor.title}
                  </h5>
                  <ul className="space-y-1 text-gray-500 list-disc list-inside mb-12">
                      {DataServices.SuspensionInhibitor.list.map((item, index) => (
                          <li key={index}>{item}</li>
                      ))}
                  </ul>
              </div>
              <div className="rounded-md flex justify-center items-center lg:justify-end lg:order-1">
                  <Image
                      src={rangeRoverGif}
                      width={700}
                      height={500}
                      alt="Our Services"
                      className="rounded-md"
                      style={{ maxWidth: "100%", height: "auto" }}
                  />
              </div>
          </div>

          <Line />
          {/*Commercial Coatings:*/}

          <div className="grid grid-cols-1 gap-10 justify-between lg:justify-center lg:grid-cols-2 items-start mt-2 mb-2">
              <div className="lg:mt-0 mt-4 ">
                  <h5 className="mb-2 text-lg font-normal text-gray-900 ">
                      {DataServices.CommerciaCoatingslInhibitor.title}
                  </h5>
                  <ul className="space-y-1 text-gray-500 list-disc list-inside mb-12">
                      {DataServices.CommerciaCoatingslInhibitor.list.map((item, index) => (
                          <li key={index}>{item}</li>
                      ))}
                  </ul>
              </div>
              <div className="rounded-md flex justify-center items-center lg:justify-end ">
                  <Image
                      src={rangeRoverGif}
                      width={700}
                      height={500}
                      alt="Our Services"
                      className="rounded-md"
                      style={{ maxWidth: "100%", height: "auto" }}
                  />
              </div>
          </div>

          <Line />
          {/*Commercial Vehicle Upfitting:*/}

          <div className="grid grid-cols-1 gap-10 justify-between lg:justify-center lg:grid-cols-2 items-start mt-2 mb-2">
              <div className="lg:mt-0 mt-4 lg:order-2">
                  <h5 className="mb-2 text-lg font-normal text-gray-900 ">
                      {DataServices.CommercialInhibitor.title}
                  </h5>
                  <ul className="space-y-1 text-gray-500 list-disc list-inside mb-12">
                      {DataServices.CommercialInhibitor.list.map((item, index) => (
                          <li key={index}>{item}</li>
                      ))}
                  </ul>
              </div>
              <div className="rounded-md flex justify-center items-center lg:justify-end lg:order-1">
                  <Image
                      src={rangeRoverGif}
                      width={700}
                      height={500}
                      alt="Our Services"
                      className="rounded-md"
                      style={{ maxWidth: "100%", height: "auto" }}
                  />
              </div>
          </div>
          <Line />

          <DoubleSidedCard title="title" list={listXpel} />
          <Title tag="h4" cn="mb-10">
              Contact us
          </Title>
          <CustomForm />
      </div>

  );
}
