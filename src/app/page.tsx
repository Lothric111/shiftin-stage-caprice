'use client'
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from 'axios';
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    address: '',
    image_path: ''
  });
  
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files) {
        setSelectedFiles(Array.from(files));
      }
    };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/participants', formData);
      console.log(response.data); // Log the response from backend
      // Reset form after successful submission if needed
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <><Navbar />
    <section id="section1" className="z-40 relative">
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
          <Link href={""}><p className="text-red-100 bg-yellow-400  py-4 text-xl font-extrabold text-center w-1/3 rounded-full m-auto -translate-x-3/4 my-11 font-CooperArabic-Regular">أشارك في المسابقة</p></Link>
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
      <div className="bg-red-100  relative z-1 rounded-b-[50px]">
        <div className="text-center pt-16 text-white pb-8 ">
          <h1 className="text-5xl pb-10 font-CooperArabic-Regular">سجل الآن</h1>
        </div>
        <div className="flex flex-col items-center bg-white rounded-[50px] lg:w-1/3 translate-x-full justify-center py-5 shadow-[#6a040f_0px_10px_0px_0px]">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input type="text" required name="full_name" value={formData.full_name} onChange={handleChange}  lang="ar" dir='rtl' className="w-2/3 py-5 px-3 mb-8 mt-8 translate-x-1/4 border-yellow-300 border-2 rounded-full  pb-2.5 pt-4 text-sm  bg-transparent appearance-non focus:outline-none focus:ring-0  peer" placeholder=" " />
              <label lang="ar" dir='rtl' htmlFor="full_name" className="absolute text-2xl font-FFHekaya-Light text-red-100 -translate-x-3/4 duration-300 -top-0 transform -translate-y-4 scale-75 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1/3 peer-focus:bg-yellow-300 rounded-full peer-focus:scale-75  rtl:peer-focus:left-auto peer-focus:-translate-x-7">الإسم واللقب</label>
            </div>
            <div className="relative">
              <input type="text" required name="address" value={formData.address} onChange={handleChange} lang="ar" dir='rtl' className="w-2/3 py-5 px-3 mb-8 mt-8 translate-x-1/4 border-yellow-300 border-2 rounded-full  pb-2.5 pt-4 text-sm  bg-transparent appearance-non focus:outline-none focus:ring-0  peer" placeholder=" " />
              <label lang="ar" dir='rtl' htmlFor="address" className="absolute text-2xl font-FFHekaya-Light text-red-100 -translate-x-1/2 duration-300 -top-0 transform -translate-y-4 scale-75 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1/3 peer-focus:bg-yellow-300 rounded-full peer-focus:scale-75  rtl:peer-focus:left-auto peer-focus:translate-x-1">العنوان</label>
            </div>
            <div className="relative">
              <input type="text" required name="phone" value={formData.phone} onChange={handleChange} lang="ar" dir='rtl' className="w-2/3 py-5 px-3 mb-8 mt-8 translate-x-1/4 border-yellow-300 border-2 rounded-full  pb-2.5 pt-4 text-sm  bg-transparent appearance-non focus:outline-none focus:ring-0  peer" placeholder=" " />
              <label lang="ar" dir='rtl' htmlFor="phone" className="absolute text-2xl font-FFHekaya-Light text-red-100 -translate-x-1/2 duration-300 top-0 transform -translate-y-4 scale-75 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1/3 peer-focus:bg-yellow-300 rounded-full peer-focus:scale-75  rtl:peer-focus:left-auto peer-focus:-translate-x-1 ">رقم الهاتف</label>
            </div>
            <div className="relative border-yellow-400 border-2 rounded-full m-5 px-5 py-3 text-xl border-dashed" style={{ height: "15dvh" }}>
              {/* Input de type fichier caché */}
               <input type="file" required name="image_path" onChange={handleFileChange} multiple />
              <label htmlFor="image_path"  className="cursor-pointer flex justify-center items-center flex-col">
                <Image src={"/assets/Rectangle 124.png"} alt={""} width={100} height={100} className="absolute right-0 -translate-x-1/2 top-5 z-1" />
                <Image src={"/assets/Groupe 107.png"} alt={""} width={100} height={100} className="absolute right-0 -translate-x-1/2 top-5 z-1" />
                <p className="font-FFHekaya-Light text-red-100 w-1/2 text-3xl text-center absolute left-10 top-5">صورة ''ياك باينة؟'' بحبات كپريس</p>
              </label>
            </div>
            <div className="flex font-FFHekaya-Light" lang="ar" dir="rtl" >
              <input type="checkbox" required className="accent-red-100 outline-red-100 mr-32 ml-5 rounded-[50px]"/>
              <label lang="ar" dir='rtl' htmlFor="validate" className="text-red-100 text-3xl">أوافق على</label>
              <Link href={""} className="text-red-100 text-3xl underline"> شروط المسابقة </Link>
            </div>
            <button type="submit"><p className="text-red-100 bg-yellow-400  py-4 text-xl font-extrabold text-center px-32 rounded-full justify-center my-11 font-CooperArabic-Regular  shadow-[#BF1725_0px_5px_0px_0px]"> ارسال </p></button>
          </form>
        </div>
        <Image src={"/assets/Groupe de masques 6.png"} alt={""} width={10000} height={10000} className="absolute right-0 top-1/4 w-1/5"/>
        <Image src={"/assets/Groupe 106.png"} alt={""} width={10000} height={10000} className="absolute left-0 top-0 translate-y-1/3 w-1/6"/>
        <Image src={"/assets/Rectangle 100.png"} alt={""} width={10000} height={10000} className="absolute left-1/4 top-1/2 translate-y-1/2 -translate-x-1/4 w-1/6" />
        <Image src={"/assets/Rectangle 102.png"} alt={""} width={10000} height={10000} className="absolute left-1/4 top-0 translate-y-1/4 w-1/6" />
        <Image src={"/assets/Rectangle 101.png"} alt={""} width={10000} height={10000} className="absolute right-1/4 top-0 translate-y-full -translate-x-1/3 w-1/12" />


        <div className="">
          <div className="bg-yellow-400 w-1/4 mx-auto text-center mt-5 rounded-full">
            <p className="text-red-100 font-FFHekaya-Light text-2xl px-3 py-2"> لا تفوّتوا الفرصة: ابدؤوا الآن متابعة العد التنازلي للمسابقة </p>
          </div>
          <div className="bg-red-900 w-1/5 m-auto text-center rounded-t-[50px] -translate-y-2">
            <p className="text-white font-FFHekaya-Light text-8xl">20 : 17 :24</p>
            <p className="text-white font-FFHekaya-Light text-4xl"> دقيقة : ساعة : يوم </p>
          </div>
        </div>
      </div>
    </section>
    
    <section id="section4">
      <div className="py-8">
        <div className="text-center pt-16 text-red-100 pb-8 ">
          <h1 className="text-5xl pb-10 font-CooperArabic-Regular"> كبريسة اليوم بحلة الزمان </h1>
          <h1 className="text-3xl py-5 font-FFHekaya-Light"> كيما حبيتوها درناها و كيما بكري ردينها!</h1>
        </div>
        <div className="relative ">
          <Image src={"/assets/Groupe de masques 1.png"} alt={""} width={10000} height={10000} className="w-1/2 m-auto cursor-pointer" />
          <Image src={"/assets/Groupe 473.png"} alt={""} width={10000} height={10000} className="w-1/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute cursor-pointer" />  
          <Image src={"/assets/Groupe de masques 6.png"} alt={""} width={10000} height={10000} className="absolute left-1/4 top-1/4 w-1/12 -translate-x-full translate-y-1/4"/>
          <Image src={"/assets/Groupe 472.png"} alt={""} width={10000} height={10000} className="absolute right-0 top-0 w-1/12 -translate-x-full -translate-y-1/4"/>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-evenly items-center py-16">
          <div className="relative group">
            <Image src={"/assets/Rectangle 110.png"} alt={""} width={1000} height={100} className="w-full"/>
            <Image src={"/assets/Groupe 408.png"} alt={"rezra"} width={1000} height={100} className="absolute top-0 -translate-y-1/4  w-full" />
            <Image src={"/assets/Groupe de masques 4.png"} alt={""} width={1000} height={100} className="w-full absolute top-0 group-hover:rotate-180 transition duration-150"/>
            <Image src={"/assets/Groupe 486.png"} alt={""} width={1000} height={100} className="w-3/4 absolute bottom-0 -translate-y-1/4 right-1/2 translate-x-1/2"/>            
          </div>
          <div className="relative group">
            <Image src={"/assets/Rectangle 110.png"} alt={""} width={1000} height={100} className="w-full"/>
            <Image src={"/assets/Groupe 458.png"} alt={"rezra"} width={1000} height={100} className="absolute top-0 -translate-y-1/4 w-full" />
            <Image src={"/assets/Tracé 3616.png"} alt={"rezra"} width={1000} height={100} className="absolute top-1/4 w-full" />
            <Image src={"/assets/Groupe de masques 4.png"} alt={""} width={1000} height={100} className="w-full absolute top-0 group-hover:rotate-180 transition duration-150"/>
            <Image src={"/assets/Groupe 486.png"} alt={""} width={1000} height={100} className="w-3/4 absolute bottom-0 -translate-y-1/4 right-1/2 translate-x-1/2"/>            
          </div>
          <div className="relative group">
            <Image src={"/assets/Rectangle 110.png"} alt={""} width={1000} height={100} className="w-full"/>
            <Image src={"/assets/Groupe de masques 5.png"} alt={"rezra"} width={1000} height={100} className="absolute top-0  w-full" />
            <Image src={"/assets/Groupe de masques 4.png"} alt={""} width={1000} height={100} className="w-full absolute top-0 group-hover:rotate-180 transition duration-150"/>
            <Image src={"/assets/Groupe 486.png"} alt={""} width={1000} height={100} className="w-3/4 absolute bottom-0 -translate-y-1/4 right-1/2 translate-x-1/2"/>            
          </div>
        </div>

        <div className="flex items-center justify-between gap-5 w-4/5 mx-auto">
          <div className="flex items-center justify-start gap-3 pt-2 pb-4 ml-28 ">
            <Link href={""}><Image src={"/assets/Icon awesome-youtube-white.png"} alt={"Icon awesome-youtube"} width={1000} height={10} className="bg-red-100 p-2 rounded-full h-9 w-full border-b-2 border-l-2 border-yellow-500"/></Link>
            <Link href={""}><Image src={"/assets/Icon awesome-instagram-white.png"} alt={"Icon awesome-insta"} width={1000} height={10} className="bg-red-100  p-2 rounded-full h-9 w-full border-b-2 border-l-2 border-yellow-500"/></Link>
            <Link href={""}><Image src={"/assets/Icon simple-tiktok-white.png"} alt={"Icon awesome-tiktok"}    width={1000} height={10} className="bg-red-100  p-2 rounded-full h-9 w-full border-b-2 border-l-2 border-yellow-500"/></Link>
            <Link href={""}><Image src={"/assets/Icon zocial-facebook-white.png"} alt={"Icon awesome-faceboo"} width={1000} height={10} className="bg-red-100  p-2 rounded-full h-9 w-full border-b-2 border-l-2 border-yellow-500"/></Link>
            <Link href={""} className="font-CooperArabic-Regular border-b-2 border-yellow-500 rounded-md text-red-100">تابعونا</Link>
          </div>
          <div className="">
            <Image src={"/assets/Groupe 28.png"} alt={"Icon awesome-tiktok"} width={1000} height={10} className="w-1/3 translate-x-2/3"/>
            <Image src={"/assets/Groupe 379.png"} alt={"Icon awesome-tiktok"} width={1000} height={10} className="w-1/3 translate-x-2/3"/>
          </div>
          <Image src={"/assets/Groupe 378.png"} alt={"Icon awesome-tiktok"} width={1000} height={10} className="w-1/6"/>

        </div>
      </div>
    </section>
    <Footer /></>
  );
}
