'use client'
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import {myFunction} from "./script";
import { useEffect, useState } from 'react'

export default function Home() {


  return (
    <><Navbar />
    <section id="section1" className="z-50">
    <div className="bg-red-100 relative">
      <div className="flex items-center self-center ml-32 ">
        <div className="relative w-1/2">
          <Image src={"/assets/Groupe 47.png"} alt={"Icon awesome-tiktok"} width={1000} height={10} className=""/>
          <Image src={"/assets/Groupe 49.png"} alt={"Icon awesome-tiktok"} width={150} height={10} className="absolute top-2/3 right-60"/>
        </div>
        <Link href={""} className="">
          <Image src={"/assets/Ellipse 10.png"} alt={"rezra"} width={80} height={100} className="absolute bottom-3 left-1/2 " />
          <Image src={"/assets/Ellipse 1.png"} alt={"rezra"} width={80} height={100} className="absolute bottom-5 left-1/2 " />
          
          <Image src={"/assets/118232.png"} alt={"rezra"} width={80} height={100} className="-translate-x-1/2 absolute bottom-2 left-1/2 animate-bounce_animation" />
        </Link>
        <div className="w-1/2 ">
          <Image src={"/assets/Groupe 28.png"} alt={"Icon awesome-tiktok"} width={1000} height={10} className="w-1/2"/>
          <Image src={"/assets/Groupe 16.png"} alt={"Icon awesome-tiktok"} width={1000} height={10} className="w-1/2"/>
          <Link href={""}><p className="text-red-100 bg-yellow-600  py-4 text-xl font-extrabold text-center w-1/3 rounded-full m-auto -translate-x-3/4 my-11 font-CooperArabic-Regular">أشارك في المسابقة</p></Link>
        </div>
      </div>  
        <Image src={"/assets/Image 4.png"} alt={"Icon awesome-tiktok"} width={1000} height={10} className="absolute left-0 bottom-16 w-1/12 "/>
      </div>
    </section>

    <section id="section2" className="z-0 pb-16">
      <div>
        <div className="text-center pt-16 text-red-100 pb-8">
          <h1 className="text-6xl pb-10 font-CooperArabic-Regular">خطوات المشاركة</h1>
          <p className="text-3xl font-FFHekaya-Light">كپريس ولاّت و جابت معاها العديد من المفاجآت!</p> 
          <p className="text-3xl font-FFHekaya-Light">لِكل محبي كپريس، لِكل من كبّر بها، هاذه المسابقة لكم خصيصا!</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly items-center">
          <div className="relative">
            <Image src={"/assets/Rectangle 110.png"} alt={""} width={1000} height={100} className="w-full"/>
            <Image src={"/assets/Ellipse 1.png"} alt={"rezra"} width={80} height={100} className="absolute top-12 left-1/3 -translate-x-3/4 w-1/6" />
            <Image src={"/assets/Groupe 54.png"} alt={""} width={1000} height={100} className="w-1/2 absolute top-12 right-1/2 translate-x-1/2"/>
            <Image src={"/assets/Groupe 103.png"} alt={""} width={1000} height={100} className="w-3/4 absolute -bottom-5 right-1/2 translate-x-1/2"/>
            <p className="absolute bottom-1/2 translate-y-1/3 text-white font-FFHekaya-Light text-4xl w-full text-center font-bold">طاقي 5 صحابك<br/>
                لي يكونوا هوما تاني
                <br/>متابعين صفحة كپريس</p>
          </div>
          <div className="relative">
            <Image src={"/assets/Rectangle 110.png"} alt={""} width={1000} height={100} className="w-full"/>
            <Image src={"/assets/Ellipse 1.png"} alt={"rezra"} width={80} height={100} className="absolute top-12 left-1/3 -translate-x-3/4 w-1/6" />
            <Image src={"/assets/Groupe 53.png"} alt={""} width={1000} height={100} className="w-1/2 absolute top-12 right-1/2 translate-x-1/2"/>
            <Image src={"/assets/Groupe 102.png"} alt={""} width={1000} height={100} className="w-3/4 absolute -bottom-5 right-1/2 translate-x-1/2"/>
            <p className="absolute bottom-1/2 translate-y-1/3 text-white font-FFHekaya-Light text-4xl w-full text-center font-bold">تابع صفحة
                <br/>كپريس</p>
          </div>
          <div className="relative">
            <Image src={"/assets/Rectangle 110.png"} alt={""} width={1000} height={100} className="w-full"/>
            <Image src={"/assets/Ellipse 1.png"} alt={"rezra"} width={80} height={100} className="absolute top-12 left-1/3 -translate-x-3/4 w-1/6" />
            <Image src={"/assets/Groupe 51.png"} alt={""} width={1000} height={100} className="w-1/2 absolute top-12 right-1/2 translate-x-1/2"/>
            <Image src={"/assets/Groupe 101.png"} alt={""} width={1000} height={100} className="w-3/4 absolute -bottom-5 right-1/2 translate-x-1/2"/>
            <p className="absolute bottom-1/2 translate-y-1/3 text-white font-FFHekaya-Light text-4xl w-full text-center font-bold">اكتب’’ ياك باينة؟’’
                <br/>
                بحبات كپريس،
                <br/>صوّرْها و ابعتها</p>
          </div>
        </div>
      </div>
    </section>

    <section id="section3">
      <div className="bg-red-100 ">
        <div className="text-center pt-16 text-white pb-8">
          <h1 className="text-5xl pb-10 font-CooperArabic-Regular">سجل الآن</h1>
        </div>
        <div className="flex-col bg-white rounded-[50px] lg:w-1/3 translate-x-full justify-center items-center py-5">
          <form>
            <div className="relative">
              <input type="text" id="name" lang="ar" dir='rtl' className="w-2/3 py-5 px-3 mb-8 mt-8 translate-x-1/4 border-yellow-300 border-2 rounded-full  pb-2.5 pt-4 text-sm  bg-transparent appearance-non focus:outline-none focus:ring-0  peer" placeholder=" " />
              <label lang="ar" dir='rtl' htmlFor="name" className="absolute text-2xl font-FFHekaya-Light text-red-100 -translate-x-1/4 duration-300 -top-0 transform -translate-y-4 scale-75 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1/3 peer-focus:bg-yellow-300 rounded-full peer-focus:scale-75  rtl:peer-focus:left-auto peer-focus:translate-x-1">الإسم واللقب</label>
            </div>
            <div className="relative">
              <input type="text" id="addresse" lang="ar" dir='rtl' className="w-2/3 py-5 px-3 mb-8 mt-8 translate-x-1/4 border-yellow-300 border-2 rounded-full  pb-2.5 pt-4 text-sm  bg-transparent appearance-non focus:outline-none focus:ring-0  peer" placeholder=" " />
              <label lang="ar" dir='rtl' htmlFor="addresse" className="absolute text-2xl font-FFHekaya-Light text-red-100 translate-x-1/2 duration-300 -top-0 transform -translate-y-4 scale-75 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1/3 peer-focus:bg-yellow-300 rounded-full peer-focus:scale-75  rtl:peer-focus:left-auto">العنوان</label>
            </div>
            <div className="relative">
              <input type="text" id="num" lang="ar" dir='rtl' className="w-2/3 py-5 px-3 mb-8 mt-8 translate-x-1/4 border-yellow-300 border-2 rounded-full  pb-2.5 pt-4 text-sm  bg-transparent appearance-non focus:outline-none focus:ring-0  peer" placeholder=" " />
              <label lang="ar" dir='rtl' htmlFor="num" className="absolute text-2xl font-FFHekaya-Light text-red-100  duration-300 top-0 transform -translate-y-4 scale-75 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1/3 peer-focus:bg-yellow-300 rounded-full peer-focus:scale-75  rtl:peer-focus:left-auto peer-focus:translate-x-2">رقم الهاتف</label>
            </div>
            <div className="relative border-yellow-400 border-2 rounded-full w-2/3 translate-x-1/4 m-5 px-5 py-3 text-xl border-dashed" style={{ height: "15vh" }}>
              {/* Input de type fichier caché */}
              <input type="file" name="file" id="file" className="hidden" multiple />
              
              {/* Label contenant l'image */}
              <label htmlFor="file" className="cursor-pointer flex justify-center items-center flex-col">
                <Image src={"/assets/Rectangle 124.png"} alt={""} width={100} height={100} className="absolute right-0 -translate-x-1/2 top-5 z-1" />
                <Image src={"/assets/Groupe 107.png"} alt={""} width={100} height={100} className="absolute right-0 -translate-x-1/2 top-5 z-1" />
                <p className="font-FFHekaya-Light text-red-100 w-1/2 text-3xl text-center absolute left-10 top-5">صورة ''ياك باينة؟'' بحبات كپريس</p>
              </label>
            </div>
            <div className="flex border" lang="ar" dir="rtl">
              <input type="checkbox" className="color-red-100"/>
            </div>

          </form>
        </div>
      </div>
    </section>
    
    <Footer /></>
  );
}
