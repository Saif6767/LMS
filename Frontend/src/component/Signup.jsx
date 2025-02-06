import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const userInfo = {
                fullname: data.fullname,
                email: data.email,
                password: data.password,
            };
            const res = await axios.post("https://lms-lbh0.onrender.com/user/signup", userInfo);

            if (res.data) {
                toast.success('Signup Successfully');
                localStorage.setItem("Users", JSON.stringify(res.data));
                navigate(from, { replace: true });
            }
        } catch (err) {
            toast.error("Signup Failed: " + err.response?.data?.message || "Unknown error");
        }
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className="w-[600px]">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="font-bold text-lg">Signup</h3>
                        <div className="mt-4 space-y-2">
                            <label>Name</label>
                            <input type="text" placeholder="Enter your Fullname"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("fullname", { required: true })} />
                            {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className="mt-4 space-y-2">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("email", { required: true })} />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className="mt-4 space-y-2">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("password", { required: true })} />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className="flex justify-around mt-4 items-center">
                            <button type="submit" className="bg-blue-900 text-white rounded-md px-3 py-1 hover:bg-blue-950 duration-200">
                                Signup
                            </button>
                            <p className='text-md'>
                                Have account? <Link to="/login" className="underline text-blue-500">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
