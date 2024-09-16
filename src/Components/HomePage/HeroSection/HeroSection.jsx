"use client";
import React from "react";
import { Abril_Fatface } from "next/font/google";
import { Jost } from "next/font/google";
import { motion } from "framer-motion";
import hero from "../../../../public/assets/hero/hero.jpg";
import Image from "next/image";
import { paragraphFont } from "@/lib/Font";
import Line from "@/Components/Shared/Line";

const HeroSection = () => {
  return (
    <div className="snap-start">
      <div className="min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center px-4 gap-6 lg:max-w-screen-2xl lg:mx-auto text-gray-800 ">
        {/* Description */}
        <div
          className={`text-center sm:text-start space-y-2 sm:space-y-8 ${paragraphFont.className}`}
        >
          <h1 className=" text-xl uppercase ml-1 tracking-[5px] ">
            Md Sazzad Hossen
          </h1>
          <div
            className={`relative uppercase text-3xl lg:text-8xl font-extrabold tracking-wider lg:tracking-widest ${paragraphFont}`}
          >
            <div className="relative">
              <span className="text-red-600">full stack </span>
              <span>web developer</span>
            </div>

            <div className="hidden sm:inline-block">
              <Line></Line>
            </div>
          </div>
          <p className="text-sm ml-1">
            A junior fullstack developer who currently focused on Web
            Development. Other than that, I also interested in UX/UI Design,
            Mobile and AI Development. I love to learn new things and always
            open to new opportunities
          </p>
          <button className="px-6 py-2 border border-black ml-1">
            Start a new project with me
          </button>
        </div>

        {/* Image */}
        <div className=" w-2/3  lg:w-1/2">
          <Image
            className="rounded-full sm:rounded-full"
            src={hero}
            alt="hero"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
