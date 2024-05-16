"use client"

import React, { FormEvent, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter()

    const [userData, setUserData] = useState({
        email:"",
        password:""
    })


    const login = async (e: FormEvent) => {
        e.preventDefault()
        const userLogin = await axios.post("http://localhost:3001/auth/login", userData, {
            withCredentials: true
        })

        if (userLogin?.data)
            router.replace('/dashboard/participants')

    }


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({
          ...userData,
          [name]: value,
        });
      };

    return (
    <>
        <div className="bg-red-100 relative z-10 rounded-b-[50px] h-screen w-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl pb-10 font-CooperArabic-Regular text-white">Login</h1>
            <div className="flex flex-col items-center bg-white rounded-[50px] lg:w-1/3  justify-center py-5 shadow-[#6a040f_0px_10px_0px_0px]">
            <form onSubmit={login}>
                <div className="relative mb-8 mt-8 ">
                    <input type="text" required name="email" value={userData.email} onChange={handleInputChange} className="w-2/3 py-5 px-3 translate-x-1/4 border-yellow-300 border-2 rounded-full  pb-2.5 pt-4 text-sm  bg-transparent appearance-non focus:outline-none focus:ring-0  peer" placeholder=" " />
                    <label  htmlFor="email" className="absolute text-2xl font-FFHekaya-Light text-red-100 -translate-x-3/4 duration-300 -top-0 transform -translate-y-4 scale-75 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-[:not(:placeholder-shown)]:bg-yellow-300 peer-placeholder-shown:top-1/2 peer-focus:top-1/3 peer-focus:bg-yellow-300 rounded-full peer-focus:scale-75 rtl:peer-focus:left-auto peer-[:not(:placeholder-shown)]:-translate-x-5 peer-focus:-translate-x-10 peer-focus:-translate-y-8"> Email</label>
                </div>
                <div className="relative mb-8 mt-8 ">
                    <input type="text" required name="password" value={userData.password} onChange={handleInputChange} className="w-2/3 py-5 px-3  translate-x-1/4 border-yellow-300 border-2 rounded-full  pb-2.5 pt-4 text-sm  bg-transparent appearance-non focus:outline-none focus:ring-0  peer" placeholder=" " />
                    <label  htmlFor="password" className="absolute text-2xl font-FFHekaya-Light text-red-100 -translate-x-3/4 duration-300 -top-0 transform -translate-y-4 scale-75 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-[:not(:placeholder-shown)]:bg-yellow-300 peer-placeholder-shown:top-1/2 peer-focus:top-1/3 peer-focus:bg-yellow-300 rounded-full peer-focus:scale-75 rtl:peer-focus:left-auto peer-[:not(:placeholder-shown)]:-translate-x-12 peer-focus:-translate-x-10 peer-focus:-translate-y-8">Password</label>
                </div>
                <button type="submit"><p className="text-red-100 bg-yellow-400  py-4 text-xl font-extrabold text-center px-32 rounded-full justify-center my-11 font-CooperArabic-Regular  shadow-[#BF1725_0px_5px_0px_0px]"> Login </p></button>
            </form>
            </div>
            <Image src={"/assets/Groupe de masques 6.png"} alt={""} width={10000} height={10000} className="absolute right-0 top-1/4 w-1/5"/>
            <Image src={"/assets/Groupe 106.png"} alt={""} width={10000} height={10000} className="absolute left-0 -top-1/4 translate-y-1/3 w-1/6"/>
            <Image src={"/assets/Rectangle 100.png"} alt={""} width={10000} height={10000} className="absolute left-1/4 top-1/2 translate-y-1/2 -translate-x-1/4 w-1/6" />
            <Image src={"/assets/Rectangle 102.png"} alt={""} width={10000} height={10000} className="absolute left-1/4 top-0 translate-y-1/4 w-1/6" />
            <Image src={"/assets/Rectangle 101.png"} alt={""} width={10000} height={10000} className="absolute right-1/4 top-0 translate-y-full -translate-x-1/3 w-1/12" />
        </div>
      
    </>
    )}