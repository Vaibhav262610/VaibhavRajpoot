import React from "react";
import Link from "next/link";
import { BsGithub } from 'react-icons/bs';
import { BsFillTreeFill } from 'react-icons/bs';
// import Contact from "../pages/contact";
const Header = () => {
  const greaterThan = "<";
  return (
    <>
     <div className="flex flex-col items-center">
      <div className="main h-screen flex flex-col w-4/6 justify-center">
      <h2 className="text-5xl sm:text-4xl  text-green-400 pt-12">👋 Hi, I am</h2>
          <h1 className="main-heading pt-2 text-9xl font-bold">Vaibhav Rajpoot</h1>
          <h1 className="head-text pt-14 text-7xl text-gray-400 font-semibold">
            I speak in{" "}
            <span className=" text-yellow-400">{greaterThan}code /&gt; </span>{" "}
            so you don&apos;t have to
          </h1>
          <p className="main-para  sm:w-8/12 pt-10 text-4xl text-gray-400">
            I&apos;m your friendly neighborhood <span className="font-bold">Front-End Developer</span>. Helping people
            turn their ideas into sites & apps that work. I enjoy using my
            skill-set to empower people to accomplish their goals.
          </p>
            <div className="flex pt-10 gap-5">
              <a href="https://github.com/Vaibhav262610" target="_blank">
              <button className="github-btn hover:text-white flex gap-2">
              <BsGithub className="github-icon"/>
              Github
              </button>
              </a>
              <a href="https://linktr.ee/vaibhavrajpoot" target="_blank">
              <button className="contact-btn hover:text-white flex gap-2">
              <BsFillTreeFill className="github-icon"/>
              LinkTree
              </button>
              </a>
            </div>
      </div>
     </div>

    </>
  );
};

export default Header;
