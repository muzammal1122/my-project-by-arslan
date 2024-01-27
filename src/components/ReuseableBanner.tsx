import React from "react";

type Props = {
  title: string;
  desc: string;
  btn: string;
  imgUrl: string;
};

const ReuseableBanner = ({ title, desc, btn, imgUrl }: Props) => {
  return (
    <div>
      <div className="flex justify-center max-sm:block">
        <div className="w-[90%] h-[100%] bg-slate-200 flex justify-around py-8 max-sm:w-[100%] rounded-lg">
          <div>
            <h1 className="w-80 font-bold text-3xl max-lg:text-xl max-lg:w-56 max-md:text-3xl max-md:w-80 max-sm:w-64 max-sm:text-xl">
              {title}
            </h1>
            <h4 className="w-80 py-3 max-lg:w-56 max-lg:text-xs max-md:w-80 max-sm:w-64">
              {desc}
            </h4>
            <div className="py-3">
              <button className="w-40 h-10 rounded-xl bg-blue-500">
                {btn}
              </button>
            </div>
          </div>
          <div className="w-96 max-md:hidden ">
            <img className="rounded-2xl" src={imgUrl} alt="Image 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReuseableBanner;
