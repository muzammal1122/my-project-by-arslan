import React from "react";

type Props = {
  HeadingBlack: string;
  HeadingBlue: string;
  title: string;
  desc: string;
  imgUrl: string;
  subHeading: string;
  desc2: string;
};

const ReuseableOurLibrary = ({
  HeadingBlack,
  HeadingBlue,
  title,
  desc,
  imgUrl,
  subHeading,
  desc2,
}: Props) => {
  return (
    <div className="bg-blue-50">
      <div className="container mx-auto max-w-screen-lg">
        <h1 className="w-72 text-2xl font-bold py-10">
          {HeadingBlack} <span className="text-blue-500">{HeadingBlue}</span>
        </h1>
        <div className="flex flex-col md:flex-row  bg-white rounded-2xl">
          <div className="flex flex-1 justify-end py-3 px-3">
            <img src={imgUrl} alt="" className="w-[100%] rounded-2xl" />
          </div>
          <div className="flex-1 py-3 px-3">
            <div>
              <h1 className="font-bold text-2xl">{title}</h1>
              <h4 className="pt-8">{desc}</h4>
              <a href="" className="font-bold underline">
                {subHeading}
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
          <div className="w-[100%] rounded-2xl bg-white hover:shadow-lg py-4 px-4  mb-5">
            <img className="w-[100%] rounded-lg" src={imgUrl} alt="" />
            <h1 className="w-40 font-bold py-3"> {title}</h1>
            <h4 className="text-xs">{desc2} </h4>
            <a className="font-bold text-xs py-2" href="">
              {subHeading}
            </a>
          </div>
          <div className="w-[100%] rounded-2xl bg-white hover:shadow-lg py-4 px-4  mb-5">
            <img className="w-[100%] rounded-lg" src={imgUrl} alt="" />
            <h1 className="w-40 font-bold py-3"> {title}</h1>
            <h4 className="text-xs">{desc2} </h4>
            <a className="font-bold text-xs py-2" href="">
              {subHeading}
            </a>
          </div>
          <div className="w-[100%] rounded-2xl bg-white hover:shadow-lg py-4 px-4  mb-5">
            <img className="w-[100%] rounded-lg" src={imgUrl} alt="" />
            <h1 className="w-40 font-bold py-3"> {title}</h1>
            <h4 className="text-xs">{desc2} </h4>
            <a className="font-bold text-xs py-2" href="">
              {subHeading}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReuseableOurLibrary;
