import React from 'react';
import { Form, Link } from 'react-router-dom'; // Use react-router-dom for navigation
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };
        await axios
            .post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res);
                if (res.data) {
                    toast.success('Loggedin Successfully');
                    document.getElementById("my_modal_3").close();
                    setTimeout(() => {
                        window.location.reload();
                        localStorage.setItem("Users", JSON.stringify(res.data));
                    }, 1000)
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error:" + err.response.data.message);
                    setTimeout(() => {}, 2000)
                }
            });
    }

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Close Button */}
                        <Link to="/"
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            aria-label="Close"
                            onClick={() => document.getElementById("my_modal_3").close()}>
                            ✕
                        </Link>

                        {/* Login Form */}
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="space-y-4 mt-4">
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block font-medium">
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

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block font-medium">
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

                            {/* Login Button */}
                            <div className="flex justify-between items-center mt-4">
                                <button
                                    type="submit"
                                    className="bg-blue-900 text-white rounded-md px-4 py-2 hover:bg-blue-950 transition duration-200">
                                    Login
                                </button>

                                {/* Signup Redirect */}
                                <p className="text-sm">
                                    Not registered?{' '}
                                    <Link to="/Signup">
                                        <span className="underline text-blue-500 cursor-pointer">
                                            Signup
                                        </span>
                                    </Link>
                                </p>
                            </div>

                        </div>
                    </form >
                </div>
            </dialog>
        </div>
    );
}

export default Login;
