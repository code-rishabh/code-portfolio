import React from "react";
import { motion } from "framer-motion";
import skillsContent from "../../utils/projectsData";


interface Props{
    img?:string;
    heading?:string;
    desc?:string;
}

// {img, heading, desc}: Props

const Projects = () => {

    // const projects = [1, 2, 3, 4, 5];


    return (

        <section id="projects" className="snap-start h-screen">
        
            <motion.div
                initial={{ opacity: 0, }}
                transition={{ duration: 1, }}
                whileInView={{ opacity: 1, }}

                className="flex flex-col overflow-hidden relative text-center md:text-left xl:flex-row h-screen max-w-full z-0 justify-evenly mx-auto items-center">
                <h3 className="uppercase tracking-[20px] top-24 absolute text-2xl text-gray-500">Projects</h3>

                <div className="relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7af0a]/80">

                    {skillsContent.map((s, i) => (
                        <> 
                            <div className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center space-y-5 h-screen mt-10">
                                <motion.img
                                    initial={{
                                        opacity: 0,
                                        y: -300
                                    }}
                                    transition={{
                                        duration: 1.2,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}

                                    src={s.img} alt="" />
                                <div className="space-y-5 max-w-6xl px-12 md:px-10">
                                    <h4 className="text-center text-2xl md:text-4xl font-semibold">
                                        <span className="underline decoration-[#f7ab0a]/50">Case Study {i + 1} of {skillsContent.length} : {s.heading}</span> 
                                    </h4>
                                    <p className="text-center md:text-lg md:text-left">{s.desc}</p>
                                </div>
                            </div>
                        </>
                    ))}

                </div>

                <div className="w-full absolute bg-[#f7ab0a]/10 top-[26%] h-[350px] -skew-y-12"></div>




            </motion.div>


        </section>
    );
}

export default Projects;