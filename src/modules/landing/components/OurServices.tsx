import MainCards from "@/components/MainCards";
import { CARD_DATA } from "@/utiltes/constant";
import React from "react";

type Props = {};

const OurServices = (props: Props) => {
  return (
    <div className="container mx-auto w max-w-screen-lg">
      <h1 className="w-72 text-2xl font-bold pb-6">
        Our <span className="text-blue-500">It Services</span>
      </h1>
      {/* <div className="container mx-auto w max-w-screen-lg"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CARD_DATA.map((item, index) => (
          <MainCards
            key={index}
            desc={item.desc}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
      {/* </div> */}
      <br />
      <br />
      <a className="float-right underline font-bold" href="">
        see more
      </a>
      <br />
      <br />
    </div>
  );
};

export default OurServices;
