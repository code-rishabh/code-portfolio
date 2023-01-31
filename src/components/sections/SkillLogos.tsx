import { motion } from "framer-motion";
// import React, { FC } from "react";
// import { PropsWithChildren } from "react";

interface Props {
    directionLeft?: boolean;
    proficiency?: string;
    img?:string;
}

const SkillLogos = ({ directionLeft,proficiency,img }: Props) => {
    return (
        <div className="group relative cursor-pointer flex ">
            <motion.img
                initial={{
                    x: directionLeft ? -105 : 105,
                    opacity: 0,
                }}
                transition={{
                    duration: 1,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                className=" h-14 w-14 md:h-20 md:w-20 rounded-full border-2 border-solid border-white/25 p-1 shadow-xl shadow-black filter group-hover:grayscale transition duration-300 ease-in-out"
                src={img} alt="nahi aaaya"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-14 w-14 md:h-20 md:w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="font-bold text-black opacity-100 text-lg">{proficiency}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default SkillLogos;


