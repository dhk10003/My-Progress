import React from "react";
import anthony from "../assets/about.png";
import { github, gmail, linkedin } from "../helper/iconData";

const About = () => {
  return (
    <div className="grid place-content-center w-full mx-auto m-8">
      <div className="flex flex-col justify-center w-full p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
        <img
          src={anthony}
          alt="Anthony Harold"
          className="h-4/6 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              Anthony Harold
            </h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-400">
              Full-stack developer
            </p>
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
            <a
              rel="noopener noreferrer"
              href="https://github.com/anthonyharold67"
              target="true"
              aria-label="GitHub"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
              {github}
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/anthony-harold-67-fs"
              target="true"
              aria-label="Dribble"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
              {linkedin}
            </a>

            <a
              rel="noopener noreferrer"
              href="mailto:anthonyharold@gmail.com"
              aria-label="Email"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
              {gmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
