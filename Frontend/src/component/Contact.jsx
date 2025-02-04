import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import contactImg from '../../public/contimg.png';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        };
        try {
            await axios.post('https://getform.io/f/alllmexa', userInfo);
            toast.success('Your message has been sent');
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };

    return (
        <div id="Contact">
            <hr />
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-14 dark:bg-slate-900 dark:text-white'>
                <div className='order-1 w-full md:w-1/2'>
                    <img src={contactImg} className='w-86 h-86' alt="Contact" />
                </div>

                <div className='max-w-screen-2xl container mx-auto px-4 order-2 md:order-1 md:w-1/2 mt-12 md:mt-3 md:px-7 my-10'>
                    <h1 className='text-3xl font-bold mb-2'>Contact Us</h1>
                    <span>Please fill out the form below to contact me</span>
                    <div className='flex flex-col items-center justify-center mt-5'>
                        <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-200 w-96 px-8 py-3 rounded-xl'>
                            <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                            <div className='flex flex-col mb-4'>
                                <label className="block text-gray-700">Full Name</label>
                                <input
                                    {...register("name", { required: true })}
                                    className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-900 dark:text-white"
                                    id="name"
                                    placeholder="Enter your full name"
                                />
                                {errors.name && <span className='text-red-500'>This field is required</span>}
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="block text-gray-700">Email Address</label>
                                <input
                                    {...register("email", { required: true })}
                                    className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-900 dark:text-white"
                                    id="email"
                                    placeholder="Enter your email address"
                                />
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="block text-gray-700">Message</label>
                                <textarea
                                    {...register("message", { required: true })}
                                    className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-900 dark:text-white"
                                    id="message"
                                    placeholder="Enter your query"
                                ></textarea>
                                {errors.message && <span className='text-red-500'>This field is required</span>}
                            </div>

                            <button
                                type="submit"
                                className="bg-green-800 text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
