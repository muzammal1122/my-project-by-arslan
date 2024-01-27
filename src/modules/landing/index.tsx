import ReuseableBanner from "@/components/ReuseableBanner";
import ReuseableMission from "@/components/ReuseableMission";
import React from "react";
import OurServices from "./components/OurServices";
import OurFinanceServes from "./components/OurFinanceServices";
import ReuseableOurLibrary from "@/components/ReuseableOurLibrary";

const Landing = () => {
  return (
    <div>
      <ReuseableBanner
        title="Your Trusted Partner for Strantegic Growth"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
      excepturi eum, voluptatibus quas doloremque sequi non repellat qui
      et, rerum fugit cum dolorem optio odio, illum adipisci repellendus
      ipsam. Sapiente!"
        btn=" Let's Gets Started"
        imgUrl="imges/banner1.jpg"
      />

      <ReuseableMission
        HeadingBlack="Our"
        HeadingBlue="Mission"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              harum ipsa accusamus quasi esse. Eum, repellendus excepturi
              maiores nobis, tempora voluptate rerum cum laboriosam ducimus
              sequi explicabo at ipsum nulla. nobis, tempora voluptate rerum cum
              laboriosam ducimus sequi explicabo at ipsum nulla.
"
        imgUrl="https://i0.wp.com/eos.org/wp-content/uploads/2023/02/collaborative-writing-laptops-paper-pads.jpg?fit=1200%2C675&ssl=1"
      />

      <OurServices />
      <ReuseableBanner
        title="Ready To transform your bussiness ?"
        desc="Your Trusted Partner for Strantegic Growth and et, rerum fugit cum dolorem optio odio, illum adipisci repellendus
            ipsam. Sapiente!"
        btn="Contact Us"
        imgUrl="https://media.istockphoto.com/id/1408255024/photo/developers-discussing-programming-code.jpg?s=612x612&w=0&k=20&c=W8HQvPEwDMzk5Vw9bA0EoJIhG-ETDiW0wed4GB8lReA="
      />

      <OurFinanceServes />
      <ReuseableOurLibrary
        HeadingBlack="Our"
        HeadingBlue="Resource Library"
        imgUrl="imges/ourLabrary.PNG"
        title="How Much Dose It Cost to Develop an App:2024 Estimate"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt harum ipsa accusamus quasi esse. Eum, repellendus
                excepturi maiores nobis, tempora voluptate rerum cum laboriosam
                ducimus sequi explicabo at ipsum nulla. nobis, tempora voluptate
                rerum cum laboriosam ducimus sequi explicabo at ipsum nulla."
        subHeading="Continue Reading"
        desc2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              expedita excepturi provident quidem adipisci!"
      />
    </div>
  );
};

export default Landing;
