import React from "react";
import { SectionWrapper } from "../hoc";
import git from "../assets/GIT.png";
import mongodb from "../assets/MONGO DB.png";
import reactjs from "../assets/REACT.png";
import reduxjs from "../assets/REDUX.png";
import javascript from "../assets/JAVASCRIPT.png";
import jestjs from "../assets/JEST.png";
import nodejs from "../assets/NODE JS.png";
import { github } from "../assets";
import typescript from "../assets/TYPESCRIPT.png";
import tailwind from "../assets/TAILWIND.png";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Holopins.</h2>
      </motion.div>
      <div className="pt-8">
        <a href="https://holopin.io/@mainak0907">
          <img
            src="https://holopin.me/mainak0907"
            alt="@mainak0907's Holopin board"
            class="mx-auto rounded-xl cursor-pointer grayscale-50 hover:grayscale-0 w-[800px] h-[300px] mb-[100px]  "
          />
        </a>
      </div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Tech Stacks Explored.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-[9px] p-2 pb-8">
        <img src={git} className="w-[100px] h-[100px]" />
        <img src={mongodb} className="w-[100px] h-[100px]" alt="skill" />
        <img src={javascript} className="w-[100px] h-[100px]" alt="skill" />
        <img src={reactjs} className="w-[100px] h-[100px]" alt="skill" />
        <img src={reduxjs} className="w-[100px] h-[100px]" alt="skill" />
        <img src={jestjs} className="w-[100px] h-[100px]" alt="skill" />
        <img src={github} className="w-[100px] h-[100px]" alt="skill" />
        <img src={nodejs} className="w-[100px] h-[100px]" alt="skill" />
        <img src={typescript} className="w-[100px] h-[100px]" alt="skill" />
        <img src={tailwind} className="w-[100px] h-[100px]" alt="skill" />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-8 p-2 mt-3 pb-8">
        <img
          src="https://skillicons.dev/icons?i=vercel&theme=light"
          alt="skill"
          className="w-[80px] h-[80px] gap-[9px]"
        />
        <img
          src="https://skillicons.dev/icons?i=express&theme=light"
          alt="skill"
          className="w-[80px] h-[80px] gap-[9px]"
        />
        <img
          src="https://skillicons.dev/icons?i=figma&theme=light"
          alt="skill"
          className="w-[80px] h-[80px] gap-[9px]"
        />
        <img
          src="https://skillicons.dev/icons?i=r&theme=light"
          alt="skill"
          className="w-[80px] h-[80px] gap-[9px]"
        />
        <img
          src="https://skillicons.dev/icons?i=docker&theme=light"
          alt="skill"
          className="w-[80px] h-[80px] gap-[9px]"
        />
        <img
          src="https://skillicons.dev/icons?i=tensorflow&theme=light"
          alt="skill"
          className="w-[80px] h-[80px] gap-[9px]"
        />
        <img
          src="https://skillicons.dev/icons?i=c&theme=light"
          alt="skill"
          className="w-[80px] h-[80px] gap-[9px]"
        />
        <img
          src="https://skillicons.dev/icons?i=nextjs&theme=light"
          alt="skill"
          className="w-[80px] h-[80px] gap-[9px]"
        />
        <img
          src="https://skillicons.dev/icons?i=cpp&theme=light"
          alt="skill"
          className="w-[80px] h-[80px] gap-[9px]"
        />
        <img
          src="https://skillicons.dev/icons?i=opencv&theme=light"
          alt="skill"
          className="w-[80px] h-[80px] gap-[9px]"
        />
      </div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Bored ?</h2>
      </motion.div>
      <div className="">
        <iframe
          src="https://previews.customer.envatousercontent.com/files/284246327/index.html"
          className="mx-auto w-[200px] h-[350px] mt-6 lg:"
        ></iframe>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
