import Image from "next/image";
import Marquee from "react-fast-marquee";
import reactLogo from "../../../../public/assets/react.png";
import nodeLogo from "../../../../public/assets/node.png";
import expressLogo from "../../../../public/assets/express.png";
import tailwindLogo from "../../../../public/assets/tailwind.png";
import firebaseLogo from "../../../../public/assets/firebase.png";

const SkillSlideSection = () => {
  const technologies = [
    { name: "react", image: reactLogo },
    { name: "node", image: nodeLogo },
    {
      name: "next",
      image:
        "https://seeklogo.com/images/N/nextjs-logo-963D40B71E-seeklogo.com.png",
    },
    {
      name: "mongodb",
      image: "https://www.techasoft.com/debug/img/mongo.png",
    },
    {
      name: "express",
      image: expressLogo,
    },
    {
      name: "tailwind",
      image: tailwindLogo,
    },
    {
      name: "firebase",
      image: firebaseLogo,
    },
  ];

  return (
    <div className="py-6 px-4 mb-20">
      <Marquee autoFill={true} className="">
        {technologies.map((item, idx) => (
          <Image
            className="mr-6"
            key={idx}
            width={150}
            height={150}
            src={item.image}
            alt={item.name}
          ></Image>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillSlideSection;
