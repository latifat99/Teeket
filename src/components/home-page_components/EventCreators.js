import React from "react";
import image from "../../assets/homepage_images/user pictures.jpg";

function EventCreators() {
  return (
    <div className="bg-[#FFFFFF] py-10">
      <div className="text-center">
        <h2 className="text-[24px] font-bold text-[#1A1919] text-center">
          Empowering event creators everywhere
        </h2>
        <h6 className="text-[14px] mt-[1rem] font-bold text-[#000000] text-center">
          More than 1 million people across 5 continents choose Teeket
        </h6>
      </div>
      <img src={image} className="mx-auto mt-[2rem]" alt="user-pictures" />
    </div>
  );
}

export default EventCreators;
