import Image from "next/image";

export default function Footer(){
    return(
        <footer className="bg-red-100 w-2/3 flex relative bottom-0 left-1/3 rounded-t-3xl px-5 pt-3 pb-5 -translate-x-1/4">
            <div className=" flex items-center text-white px-5 justify-start">
                <Image src={"/assets/Groupe 376.png"} alt={"Groupe 376"} width={200} height={10}/>
                <p className="font-FFHekaya-Light text-xl px-2"> : مصمم و مطوّر من طرف</p> 
            </div>
            <div className="flex items-center text-white px-5 justify-end flex-grow">
                <p className="font-CooperArabic-Regular text-xl px-2">Caprice © جميع الحقوق محفوظة</p>
            </div>
        </footer>
    );
}