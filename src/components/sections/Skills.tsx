import { motion } from "framer-motion";
import SkillLogos from "./SkillLogos";
import skillsContent from '../../utils/skillsData';
import { link } from "fs";

const Skills = () => {
    return (
        <section id="skills" className="snap-start min-h-screen">
            <motion.div
                initial={{ opacity: 0, }}
                transition={{ duration: 1, }}
                whileInView={{ opacity: 1, }}
                // viewport={{ once: true }}
                
                className="flex flex-col relative text-center md:text-left xl:flex-row h-screen max-w-[2000px] xl:px-10 justify-center mx-auto items-center">

                <h3 className="uppercase tracking-[20px] top-24 absolute text-2xl text-gray-500">Skills</h3>
                <h3 className="top-36 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm absolute">Hover over a skill for current proficiency</h3>

                <div className="grid grid-cols-4 gap-5 md:mt-24">
                    {skillsContent.map((skill) => {
                        return <SkillLogos proficiency={skill.proficiency} img={skill.img} key={skill.img}/>
                    })}
                </div>



            </motion.div>
        </section>
    );
}

export default Skills;