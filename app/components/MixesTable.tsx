import React, { useState } from "react";
import ReactPlayer from "react-player";

export const MixesTable = () => {
  return (
    <div className=" grid absolute justify-center items-center grid-cols-2 max-w-fit gap-20 pl-10 p-4">
      <div className="">
        <ReactPlayer
          className="w-[100%]  border border-white border-solid rounded-sm"
          url="https://soundcloud.com/djeldras/u-k-g-bass?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        />
      </div>
      <div className="">
        <ReactPlayer
          className="w-[100%]  border border-white border-solid rounded-sm"
          url="https://soundcloud.com/djeldras/riddimexp3?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        />
      </div>
      <div className="">
        <ReactPlayer
          className="w-[100%]  border border-white border-solid rounded-sm "
          url="https://soundcloud.com/djeldras/liquidjazznbass?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        />
      </div>
    </div>
  );
};
