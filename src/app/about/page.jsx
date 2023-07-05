import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div>
        <div className="w-full h-[300px] relative">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className="object-cover filter grayscale"
        />
        <div className="absolute z-50 bottom-5 left-5 bg-[#53c28b] text-white p-2">
            <h2 className="text-2xl font-bold">Digital Storytellers</h2>
            <h3 className="text-xl font-semibold"> Handcrafting award winning digital experiences</h3>
        </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[100px]">
        <div className="flex-1 mt-12 flex flex-col gap-7">
          <h1 className="text-3xl font-bold">Who Are We?</h1>
          <p className="text-xl font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex-1 mt-12 flex flex-col gap-7">
          <h1 className="text-3xl font-bold">What We Do?</h1>
          <p className="text-xl font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
