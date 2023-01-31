import { motion } from "framer-motion";
import Link from "next/link";

const ExperienceCard = () => {
    return (
        <article className="flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[700px] mx-auto snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 transition-opacity duration-200">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
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
                className="w-24 h-24 rounded-full object-cover xl:w-[130px] xl:h-[130px] shadow-xl shadow-black object-center" src="/hez.png" alt="Hezkrost Technologies" />

            <div className="px-0 md:px-20">
                <h4 className="uppercase text-2xl xl:text-3xl font-light">Frontend Developer</h4>
                <p className="uppercase font-bold text-sm xl:text-xl">Hezkrost Technologies</p>
                <div className="flex space-x-2 my-2">
                    <img className=" h-5 w-5 xl:h-7 xl:w-7 rounded-full" src="https://rishabhsharma-portfolio.vercel.app/fonts/html/html5-without-wordmark-color.svg" alt="html" />
                    <img className=" h-5 w-5 xl:h-7 xl:w-7 rounded-full" src="https://rishabhsharma-portfolio.vercel.app/fonts/css/css-3-seeklogo.com.svg" alt="css" />
                    <img className=" h-5 w-5 xl:h-7 xl:w-7 rounded-full" src="https://rishabhsharma-portfolio.vercel.app/fonts/js/javascript-js-seeklogo.com.svg" alt="javascript" />
                </div>
                <p className="uppercase font-semibold text-sm xl:text-lg xl:py-3 py-1 text-gray-300">october 2021 - april 2022</p>
                <ul className="list-disc space-y-2 ml-5 text-sm">
                    <li>Developed a fully functional website using HTML, CSS, JavaScript.</li>
                    <li className="hover:underline"> <a href="http://linkedlabs.co/" target="_blank" rel="noopener noreferrer">http://linkedlabs.co/</a> </li>
                    <li>Designed and developed landing pages for three more websites under the same parent company.</li>
                    <li className="hover:underline"><a href="http://hezkrost.com/" target="_blank" rel="noopener noreferrer">http://hezkrost.com/index.html</a></li>
                    <li className="hover:underline"><a href="http://theonehour.co/" target="_blank" rel="noopener noreferrer">http://theonehour.co/index.html</a></li>
                    <li className="hover:underline"><a href="http://mynaukri.co/index.html" target="_blank" rel="noopener noreferrer">http://mynaukri.co/</a></li>
                    


                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard;