import { MdPhone, MdLocationPin, MdMail } from 'react-icons/md'
import { useForm, SubmitHandler } from "react-hook-form";
import Link from 'next/link';
// import { MdArrowUpward } from 'react-icons/md'

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

const Contact = () => {

    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto: r08s2001@gmail.com?subject=${(formData.subject)}&body=Hi, My name is ${(formData.name)}. My mailID is ${(formData.email)}. Message: ${(formData.message)} `;
    };


    return (
        <section id="contact" className="snap-start">
            <div className="relative h-screen flex flx-col text-center md:text-left md:flex-row max-w-7xl px-10 items-center justify-evenly mx-auto">
                <h3 className="uppercase tracking-[20px] top-24 absolute text-2xl text-gray-500">Contact
                </h3>

                <div className="flex flex-col mt-20 space-y-10">
                    <h4 className="text-3xl md:text-4xl font-semibold text-center">
                        I have got just what you need.{" "}
                        <span className="underline decoration-[#f7ab0a]/10">Let Us Talk.</span>
                    </h4>

                    <div className='space-y-5 md:space-y-10'>
                        {/* <div className='flex items-center space-x-5 justify-center'>
                            <MdPhone className='text-[#f7ab0a] animate-pulse' />
                            <p className='text-base font-semibold'>+1234567890</p>

                        </div> */}
                        <div className='flex items-center space-x-5 justify-center'>
                            <MdLocationPin className='text-[#f7ab0a] text-2xl animate-pulse' />
                            <p className='text-lg'>Pune, Maharashtra, India</p>

                        </div>
                        <div className='flex items-center space-x-5 justify-center'>
                            <MdMail className='text-[#f7ab0a] text-2xl animate-pulse' />
                            <p className='text-lg font-semibold'>r08s2001@gmail.com</p>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='flex flex-col space-y-2 w-fit mx-auto'>
                        <div className='flex space-x-2'>
                            <input
                                {...register('name')}
                                placeholder='Name'
                                className='contactInput'
                                type="text" />
                            <input
                                {...register('email')}
                                placeholder='Email'
                                className='contactInput'
                                type="email" />
                        </div>
                        <input
                            {...register('subject')}
                            placeholder='Subject'
                            className='contactInput'
                            type="text" />
                        <textarea
                            {...register('message')}
                            placeholder='Message'
                            className='contactInput' >
                        </textarea>
                        <button className='py-5 px-10 rounded-md text-black font-bold bg-[#f7ab0a] text-lg hover:shadow-lg hover:shadow-black hover:bg-yellow-500' type="submit">Submit</button>
                    </form>
                </div>
                
                {/* <div>

            <Link className='flex justify-end mb-20' href='#hero'>
                    <div className='sticky flex items-center justify-center text-gray-500 rounded-full bg-black mx-10 h-10 w-10'>
                        <MdArrowUpward className='text-3xl'/>
                    </div>
                
                </Link>
            </div> */}
            </div>
            
        </section>
    );
}

export default Contact;
