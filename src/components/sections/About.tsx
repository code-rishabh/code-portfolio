import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="snap-center min-h-screen">
            <motion.div
                initial={{ opacity: 0, }}
                transition={{ duration: 1.2, }}
                whileInView={{ opacity: 1, }}
                // viewport={{ once: true }}
                className="flex flex-col relative h-screen text-center px-10 max-w-7xl md:max-w-4xl justify-evenly items-center mx-auto md:text-left md:flex-row">
                <h3 className="uppercase tracking-[20px] top-24 absolute text-2xl text-gray-500">About</h3>
                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    src="/new me.jpg" alt="nahi aaya"
                    className="shadow-xl shadow-black -mb-20 h-40 w-40 rounded-full object-cover flex-shrink-0 md:mb-0 md:rounded-lg md:w-52 md:h-52 xl:w-[300px] xl:h-[400px]"
                />
                <div className="space-y-10 px-0 md:px-10">
                    <h4 className="text-2xl font-semibold">Here is a <span className="underline decoration-yellow-600">little</span> background</h4>
                    <p className="text-sm leading-7 [word-spacing:5px] tracking-wider">I am <span className="underline font-semibold decoration-yellow-600">Frontend Developer</span>  and I am very passionate and dedicated to my work. I have acquired the skills and knowledge neccessary to make your project a success. I enjoy every step of design and development process from discussion and collaboration to concept and excution. I find the most satisfaction in seeing the finised product do everything for you that it was created to do.</p>
                </div>
            </motion.div>
        </section>
    );
}

export default About;