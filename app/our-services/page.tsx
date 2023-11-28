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

import ceramicCoatings from "../../public/portfolio/ceramic-coatings/cc1.jpg";
import ceramicCoatings1 from "../../public/portfolio/ceramic-coatings/cc2.jpg";
import ceramicCoatings2 from "../../public/portfolio/ceramic-coatings/cc3.jpg";
import ceramicCoatings3 from "../../public/portfolio/ceramic-coatings/cc4.jpg";
import ceramicCoatings4 from "../../public/portfolio/ceramic-coatings/cc5.jpg";
import ceramicCoatings5 from "../../public/portfolio/ceramic-coatings/cc6.jpg";
import ceramicCoatings6 from "../../public/portfolio/ceramic-coatings/cc7.jpg";
import ceramicCoatings7 from "../../public/portfolio/ceramic-coatings/cc8.jpg";


import fleet1 from "../../public/portfolio/fleet/f1.jpg";
import fleet2 from "../../public/portfolio/fleet/f2.jpg";
import fleet3 from "../../public/portfolio/fleet/f3.jpg";
import fleet4 from "../../public/portfolio/fleet/f4.jpg";
import fleet5 from "../../public/portfolio/fleet/f5.jpg";
import fleet6 from "../../public/portfolio/fleet/f6.jpg";


import hitches4 from "../../public/Slider/SliderHitches.jpg";
import patriotLiner1 from "../../public/Slider/Slider1.png";




import undercoating1 from "../../public/portfolio/undercoating/u1.jpg";
import undercoating2 from "../../public/portfolio/undercoating/u2.jpg";
import undercoating3 from "../../public/portfolio/undercoating/u3.jpg";
import undercoating4 from "../../public/portfolio/undercoating/u4.jpg";

import wheelsTires from "../../public/portfolio/wheels-tires/wt1.jpg";
import wheelsTires1 from "../../public/portfolio/wheels-tires/wt2.jpg";
import wheelsTires2 from "../../public/portfolio/wheels-tires/wt3.jpg";
import wheelsTires3 from "../../public/portfolio/wheels-tires/wt4.jpg";
import wheelsTires4 from "../../public/portfolio/wheels-tires/wt5.jpg";
import wheelsTires5 from "../../public/portfolio/wheels-tires/wt6.jpg";
import wheelsTires6 from "../../public/portfolio/wheels-tires/wt7.jpg";
import wheelsTires7 from "../../public/portfolio/wheels-tires/wt8.jpg";
import wheelsTires8 from "../../public/portfolio/wheels-tires/wt9.jpg";
import wheelsTires9 from "../../public/portfolio/wheels-tires/wt10.jpg";
import wheelsTires10 from "../../public/portfolio/wheels-tires/wt11.jpg";
import wheelsTires11 from "../../public/portfolio/wheels-tires/wt12.jpg";
import wheelsTires12 from "../../public/portfolio/wheels-tires/wt13.jpg";
import wheelsTires13 from "../../public/portfolio/wheels-tires/wt14.jpg";
import wheelsTires14 from "../../public/portfolio/wheels-tires/wt15.jpg";
import wheelsTires15 from "../../public/portfolio/wheels-tires/wt16.jpg";
import wheelsTires16 from "../../public/portfolio/wheels-tires/wt17.jpg";
import wheelsTires17 from "../../public/portfolio/wheels-tires/wt18.jpg";
import wheelsTires18 from "../../public/portfolio/wheels-tires/wt19.jpg";
import wheelsTires19 from "../../public/portfolio/wheels-tires/wt20.jpg";
import wheelsTires21 from "../../public/portfolio/wheels-tires/wt22.jpg";
import wheelsTires22 from "../../public/portfolio/wheels-tires/wt23.jpg";
import wheelsTires23 from "../../public/portfolio/wheels-tires/wt24.jpg";
import wheelsTires24 from "../../public/portfolio/wheels-tires/wt25.jpg";
import wheelsTires25 from "../../public/portfolio/wheels-tires/wt26.jpg";
import wheelsTires26 from "../../public/portfolio/wheels-tires/wt27.jpg";
import wheelsTires27 from "../../fsdfsd/public/portfolio/wheels-tires/wt28.jpg";
import wheelsTires28 from "../../public/portfolio/wheels-tires/wt29.jpg";
import wheelsTires29 from "../../public/portfolio/wheels-tires/wt30.jpg";
import wheelsTires30 from "../../public/portfolio/wheels-tires/wt31.jpg";
import wheelsTires31 from "../../public/portfolio/wheels-tires/wt32.jpg";
import wheelsTires32 from "../../public/portfolio/wheels-tires/wt33.jpg";
import wheelsTires33 from "../../public/portfolio/wheels-tires/wt34.jpg";
import wheelsTires34 from "../../public/portfolio/wheels-tires/wt35.jpg";
import wheelsTires35 from "../../public/portfolio/wheels-tires/wt36.jpg";
import wheelsTires36 from "../../public/portfolio/wheels-tires/wt37.jpg";
import wheelsTires37 from "../../public/portfolio/wheels-tires/wt38.jpg";
import wheelsTires38 from "../../public/portfolio/wheels-tires/wt39.jpg";
import wheelsTires39 from "../../public/portfolio/wheels-tires/wt40.jpg";
import wheelsTires40 from "../../public/portfolio/wheels-tires/wt41.jpg";
import wheelsTires41 from "../../public/portfolio/wheels-tires/wt42.jpg";
import wheelsTires42 from "../../public/portfolio/wheels-tires/wt43.jpg";
import wheelsTires43 from "../../public/portfolio/wheels-tires/wt44.jpg";
import wheelsTires44 from "../../public/portfolio/wheels-tires/wt45.jpg";
import wheelsTires45 from "../../public/portfolio/wheels-tires/wt46.jpg";
import wheelsTires46 from "../../public/portfolio/wheels-tires/wt47.jpg";
import wheelsTires47 from "../../public/portfolio/wheels-tires/wt48.jpg";
import wheelsTires48 from "../../public/portfolio/wheels-tires/wt49.jpg";
import wheelsTires49 from "../../public/portfolio/wheels-tires/wt50.jpg";
import wheelsTires50 from "../../public/portfolio/wheels-tires/wt51.jpg";
import wheelsTires51 from "../../public/portfolio/wheels-tires/wt52.jpg";
import wheelsTires52 from "../../public/portfolio/wheels-tires/wt53.jpg";
import wheelsTires53 from "../../public/portfolio/wheels-tires/wt54.jpg";
import wheelsTires54 from "../../public/portfolio/wheels-tires/wt55.jpg";
import wheelsTires55 from "../../public/portfolio/wheels-tires/wt56.jpg";
import wheelsTires56 from "../../public/portfolio/wheels-tires/wt57.jpg";
import wheelsTires57 from "../../public/portfolio/wheels-tires/wt58.jpg";
import wheelsTires58 from "../../public/portfolio/wheels-tires/wt59.jpg";
import wheelsTires59 from "../../public/portfolio/wheels-tires/wt60.jpg";
import wheelsTires60 from "../../public/portfolio/wheels-tires/wt61.jpg";
import wheelsTires61 from "../../public/portfolio/wheels-tires/wt62.jpg";
import wheelsTires62 from "../../public/portfolio/wheels-tires/wt63.jpg";
import wheelsTires63 from "../../public/portfolio/wheels-tires/wt64.jpg";
import wheelsTires64 from "../../public/portfolio/wheels-tires/wt65.jpg";
import wheelsTires66 from "../../public/portfolio/wheels-tires/wt66.jpg";
import wheelsTires67 from "../../public/portfolio/wheels-tires/wt67.jpg";
import wheelsTires68 from "../../public/portfolio/wheels-tires/wt68.jpg";
import ppfMain from "../../../public/images/ppf/dynomiami-blue_PPF_MAIN_PAGE.jpg";


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
                      src={hitches4}
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
                      src={patriotLiner1}
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
                      src={undercoating3}
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
