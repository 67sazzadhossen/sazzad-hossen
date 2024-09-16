"use client";

import Heading from "@/Components/Shared/Heading";
import about from "../../../../public/assets/hero/about.jpg";
import Image from "next/image";
import SimpleParallax from "simple-parallax-js";
import Tilt from "react-parallax-tilt";
import { useState } from "react";

const AboutMeSection = () => {
  const [imageScale, setImageScale] = useState(1);
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto snap-start px-4 lg:px-0">
      <Heading title={"About Me"}></Heading>

      <div
        className={`space-y-4 md:flex md:flex-row md:items-center md:gap-6 `}
      >
        <div
          className={`rounded-lg overflow-hidden  -translate-x-${imageScale}  duration-1000`}
        >
          <SimpleParallax delay={0.5} scale={1.5}>
            <Image
              className="rounded-lg"
              width={1200}
              src={about}
              alt="About Me"
            ></Image>
          </SimpleParallax>
        </div>

        <Tilt
          tiltEnable={false}
          scale={1.05}
          transitionSpeed={1500}
          onEnter={() => setImageScale(6)}
          onLeave={() => setImageScale(-6)}
        >
          <div className="space-y-2">
            <p className="">
              Hi, I`m Md Sazzad Hossen, a full-stack web developer with a deep
              passion for building scalable and efficient web applications.
              Specializing in modern technologies like React, Next.js, Node.js,
              and MongoDB, I create high-performance, user-centric solutions
              that meet today`s web standards.
            </p>
            <p className="hidden lg:block text-lg">
              On the front end, I focus on delivering interactive and intuitive
              user interfaces with React and Next.js, ensuring a seamless user
              experience. On the back end, I design and implement robust APIs
              and database architectures using Node.js and MongoDB, ensuring
              that applications are fast, reliable, and secure.
            </p>
            <button className="border border-black px-6 py-2">
              View Details
            </button>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default AboutMeSection;
