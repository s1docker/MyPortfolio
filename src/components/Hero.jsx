import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-30`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm
            <span className=" bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
              Anshul
            </span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I am a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              {" "}
              Full-stack
            </span>{" "}
            developer with a passion for creating seamless user experiences by
            Leveraging my expertise in{" "}
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-white">
              JavaScript,&nbsp;
            </span>
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-cyan-200">
              React,&nbsp;
            </span>
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500">
              Node.js,&nbsp;
            </span>
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 to-white">
              SQ
              <span className="bg-clip-text text-transparent  bg-amber-500">
                L
              </span>
              ,&nbsp;
            </span>
            and&nbsp;
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-emerald-900 to-emerald-100">
              MongoDB&nbsp;
            </span>
            .
          </p>
        </div>
      </div>

      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px} h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-red-400 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
