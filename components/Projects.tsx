import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "TaskWarriors",
    description:
      "A Service based web application developed to match skilled University/college students with local demand. The main purpose of this app is to provide students with industry experience as not all students are able to land internships..",
    image: "/Project-0.jpg",
    github: "https://github.com/Harveer-kalkat/TaskWarriors",
    link: "https://taskwarriors.onrender.com/",
  },
  {
    name: "GetAway Drives",
    description:
      "GetAway Drives is a private car rental website developed using Spring boot and MySql.",
    image: "/Project-1.png",
    github: "https://github.com/Harveer-kalkat/GetAwayDrives-main",
    link: "https://getaway-drives.herokuapp.com/",
  },
  {
    name: "Weather App",
    description: "Weather app using React and OpenWeather API.",
    image: "/Project-2.png",
    github: "https://github.com/Harveer-kalkat/weather-app",
    link: "https://snazzy-faun-bfee59.netlify.app",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
