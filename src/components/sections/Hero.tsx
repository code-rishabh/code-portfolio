import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {

    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Rishabh Sharma",
            "Guy-Who-Loves-Tea.tsx",
            "<ButLovesToCodeMore/>",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <section className='snap-start min-h-screen' id='hero'>

            <div className='h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden'>
                <BackgroundCircles />

                <img className=' shadow-black shadow-xl relative rounded-full h-32 w-32 mx-auto object-cover' src="/me-002.jpg" alt="nahi aaya" />

                <div className='z-20'>
                    <h2 className='text-sm md:text-xl uppercase tracking-[15px] ml-3 text-gray-500 pb-2'>frontend developer</h2>
                    <h1 className='text-[27px] leading-9 xl:text-6xl font-semibold px-10'>
                        <span className='mr-3 '>{text}</span>
                        <Cursor cursorColor='yellow' />
                    </h1>
                    <div className='pt-5'>
                        <Link href="#about">
                            <button className='heroButton'>About</button>
                        </Link>
                        <Link href="#experience">
                            <button className='heroButton'>Experience</button>
                        </Link>
                        <Link href="#skills">
                            <button className='heroButton'>Skills</button>
                        </Link>
                        <Link href="#projects">
                            <button className='heroButton'>Projects</button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;