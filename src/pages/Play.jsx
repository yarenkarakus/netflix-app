import React from "react";

const Play = () => {
  return (
    <div className="text-white font-bold ww-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[70%] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[400px] mx-auto py-16">
            <h1 className="text-3xl h-[250px] font-bold items-center flex justify-center">
              Can't Play This Right Now
            </h1>
            <p className="text-xl  flex justify-center items-center">
              Sorry...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
