import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast';

function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };
        await axios
            .post("https://lms-lbh0.onrender.com/signup", userInfo)
            .then((res) => {
                console.log(res);
                if (res.data) {
                    toast.success('Signup Successfully');
                    navigate(from, { replace: true });
                }
                localStorage.setItem("Users", JSON.stringify(res.data));
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error:" + err.response.data.message);
                }
            });
    };

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* If there is a button in the form, it will close the modal */}
                            <Link to="/"
                                type="button"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                aria-label="Close">
                                ✕
                            </Link>

                            <h3 className="font-bold text-lg">Signup</h3>
                            <div className="mt-4 space-y-2">
                                <label htmlFor="name" className="block">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your Fullname"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("fullname", { required: true })}
                                />
                                <br />
                                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Email */}
                            <div className="mt-4 space-y-2">
                                <label htmlFor="email" className="block">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Password */}
                            <div className="mt-4 space-y-2">
                                <label htmlFor="password" className="block">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Button */}
                            <div className="flex justify-around mt-4 items-center">
                                <button
                                    type="submit"
                                    className="bg-blue-900 text-white rounded-md px-3 py-1 hover:bg-blue-950 duration-200">
                                    Signup
                                </button>
                                <p className='text-md'>
                                    Have account?{' '}
                                    <button>
                                        <span className="underline text-blue-500 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>
                                            Login
                                        </span>
                                    </button>
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
