import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post("https://lms-lbh0.onrender.com/user/login", data);
            if (res.data) {
                toast.success('Logged in Successfully');
                localStorage.setItem("Users", JSON.stringify(res.data));
                navigate('/');
            }
        } catch (err) {
            toast.error("Login Failed: " + err.response?.data?.message || "Unknown error");
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-96 p-6 border rounded-md">
                <h3 className="text-lg font-bold">Login</h3>

                <label>Email</label>
                <input type="email" placeholder="Enter your email"
                    className="w-full px-3 py-1 border rounded-md outline-none"
                    {...register("email", { required: true })} />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

                <label>Password</label>
                <input type="password" placeholder="Enter your password"
                    className="w-full px-3 py-1 border rounded-md outline-none"
                    {...register("password", { required: true })} />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}

                <button type="submit" className="mt-4 bg-blue-900 text-white w-full py-2 rounded-md">
                    Login
                </button>
                <p className="mt-2 text-center">
                    Not registered? <Link to="/signup" className="underline text-blue-500">Signup</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
