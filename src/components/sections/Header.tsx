import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link';


const Header = () => {
    return (
        <header className='flex sticky top-0 items-start justify-between mx-auto max-w-7xl z-20 p-5 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 1 / 2,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex items-center'>
                <SocialIcon url='https://twitter.com/iamRissu' bgColor='transparent' fgColor='gray' />
                <SocialIcon url='https://github.com/code-rishabh' bgColor='transparent' fgColor='gray' />
                <SocialIcon url='https://www.linkedin.com/in/rishabh-sharma-9864741b8/' bgColor='transparent' fgColor='gray' />
                <SocialIcon url='https://www.instagram.com/ig_rissu_/' bgColor='transparent' fgColor='gray' />
            </motion.div>

            <Link href='mailto:r08s2001@gmail.com'>
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 1 / 2,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    className=' hover:text-[#f7af0a] flex items-center text-gray-300 cursor-pointer'>
                    <SocialIcon url='mailto:r08s2001@gmail.com' bgColor='transparent' fgColor='gray' />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>get in touch</p>
                </motion.div>
            </Link>

        </header>
    );
}

export default Header;

