import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const WorkExperience = () => {
    return (
        <section id="experience" className="snap-center min-h-screen">
            <motion.div
                initial={{ opacity: 0, }}
                transition={{ duration: 1.2, }}
                whileInView={{ opacity: 1, }}
                className="flex flex-col relative overflow-hidden min-h-screen text-left md:flex-row px-10 justify-evenly max-w-full mx-auto items-center">
                <h3 className="uppercase tracking-[20px] top-24 absolute text-2xl text-gray-500">Experience</h3>

                <div className="w-full flex space-x-5 mt-32 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7af0a]/80">
                    <ExperienceCard />
                    
                </div>

            </motion.div>

        </section>
    );
}

export default WorkExperience;