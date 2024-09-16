import React from "react";
import Line from "./Line";
import { paragraphFont } from "@/lib/Font";

const Heading = ({ title }) => {
  return (
    <div
      className={`${paragraphFont.className} text-center text-4xl lg:text-7xl font-extrabold`}
    >
      <h1>{title}</h1>
      <Line></Line>
    </div>
  );
};

export default Heading;
