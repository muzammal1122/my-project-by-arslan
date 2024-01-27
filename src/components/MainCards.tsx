import React from "react";

type Props = {
  title: string;
  desc: string;
  imageUrl: string;
};

const MainCards = (props: Props) => {
  const { imageUrl, title, desc } = props;
  return (
    <div className="w-[100%] bg-slate-100 hover:shadow-lg rounded-lg  py-4 px-4  mb-5">
      <img className="w-[100%] rounded-lg" src={imageUrl} alt="" />
      <h1 className="w-40 font-bold py-3">{title}</h1>
      <h4 className="text-xs">{desc}</h4>
      <a className="font-bold text-xs py-2" href="">
        Continue Reading
      </a>
    </div>
  );
};

export default MainCards;
