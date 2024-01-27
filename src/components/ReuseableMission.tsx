import React from "react";

type Props = {
  HeadingBlack: string;
  HeadingBlue: string;
  desc: string;
  imgUrl: string;
};

const ReuseableMission = ({
  HeadingBlack,
  HeadingBlue,
  desc,
  imgUrl,
}: Props) => {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="flex flex-col md:flex-row py-20 ">
        <div className="flex-1">
          <div>
            <h1 className="w-72 text-2xl font-bold">
              {HeadingBlack}{" "}
              <span className="text-blue-500">{HeadingBlue}</span>
            </h1>
            <h4 className="pt-8">{desc}</h4>
          </div>
        </div>
        <div className="flex flex-1 justify-end relative">
          <img src={imgUrl} alt="" className="w-[100%] rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ReuseableMission;
