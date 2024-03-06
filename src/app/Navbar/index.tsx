import Image from "next/image"; 
import Link from "next/link";

export default function Navbar() {
    return (
      <header> 
        <div className="relative top-0 bg-red-100 p-5 h-28 left-0 flex w-full justify-between z-50">
          <div className="flex items-center justify-start gap-3 pt-2 pb-4 ml-28 ">
            <Link href={""}><Image src={"/assets/Icon awesome-youtube.png"} alt={"Icon awesome-youtube"} width={1000} height={10} className="bg-white p-2 rounded-full h-9 w-full border-b-2 border-l-2 border-yellow-500"/></Link>
            <Link href={""}><Image src={"/assets/Icon awesome-instagram.png"} alt={"Icon awesome-insta"} width={1000} height={10} className="bg-white p-2 rounded-full h-9 w-full border-b-2 border-l-2 border-yellow-500"/></Link>
            <Link href={""}><Image src={"/assets/Icon simple-tiktok.png"} alt={"Icon awesome-tiktok"}    width={1000} height={10} className="bg-white p-2 rounded-full h-9 w-full border-b-2 border-l-2 border-yellow-500"/></Link>
            <Link href={""}><Image src={"/assets/Icon zocial-facebook.png"} alt={"Icon awesome-faceboo"} width={1000} height={10} className="bg-white p-2 rounded-full h-9 w-full border-b-2 border-l-2 border-yellow-500"/></Link>
            <Link href={""} className="font-CooperArabic-Regular border-b-2 border-yellow-500 rounded-md text-white">تابعونا</Link>
            </div>
          <div className=" top-0 left-1/2 justify-center -translate-x-1/2 fixed ">
            <Image src={"/assets/Groupe 25.png"} alt={"Groupe 25"} width={1000} height={10} className="w-full"/>
          </div>
          <div className="flex items-center justify-end gap-32 pt-2 pb-4 mr-28 z-50">
            <Link href={""} className="font-CooperArabic-Regular border-b-2 border-yellow-500 rounded-md text-white">سجل الآن</Link>
            <Link href={""} className="font-CooperArabic-Regular border-b-2 border-yellow-500 rounded-md text-white">خطوات المشاركة</Link>
          </div>
          <Image src={"/assets/zyro-image.png"} alt={"Icon awesome-tiktok"} width={1000} height={10} className="absolute top-0 right-0 w-1/4 z-40"/> 
        </div>
        {/* les 2 coins de lecran */}
        <div className="top-0 left-0 w-1/12 fixed z-10">
          <Image src={"/assets/Left.png"} alt={"Icon awesome-tiktok"} width={1000} height={10}/> 
        </div>
        <div className="top-0 right-0 w-1/12 fixed z-10">
          <Image src={"/assets/Right.png"} alt={"Icon awesome-tiktok"} width={1000} height={10} />
        </div>
      </header>
      
    );
  }