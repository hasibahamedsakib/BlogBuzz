import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold capitalize text-center my-10">
        Lets keep in touch
      </h1>
      <div className="block md:flex justify-between items-center gap-8 my-5">
        <div>
          <Image
            src="/contact.png"
            alt="Contact"
            width={700}
            height={500}
            className=" object-cover"
          />
        </div>
        <div className="space-y-5">
          <input
            type="text"
            required
            className=" w-full focus:outline-none bg-transparent p-3 shadow shadow-slate-300 rounded-md"
            placeholder="Enter your Name"
          />
          <input
            type="email"
            required
            className=" w-full focus:outline-none bg-transparent p-3 shadow shadow-slate-300 rounded-md"
            placeholder="Enter your Email"
          />
          <textarea
            name=""
            className=" w-full focus:outline-none bg-transparent p-3 shadow shadow-slate-300 rounded-md"
            cols="30"
            rows="10"
            placeholder="Type Your Message"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 hover:bg-green-500 transition-all duration-300 text-white cursor-pointer rounded-md"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
