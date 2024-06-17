'use client'
import { HeartHandshake, Medal, Star, BedDouble, MapPin, Sparkles } from "lucide-react";

export default function Services(){
  return(
    <section id="aboutus" className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Where hospitality meets your dreams</h2>
          <p className="mt-4 text-lg">At Casa Estal, we believe in the power of exceptional experiences. With a passion for hospitality, we strive to create moments that linger in your heart long after your stay.</p>
          <button className="transition ease-in-out delay-150 mt-6 bg-primary hover:bg-primary/80 px-6 py-3 rounded-md duration-300 text-secondary">Know More</button>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <div className="mt-8 lg:w-1/2 mb-6 md:mb-0 transition ease-in-out delay-200 hover:-translate-y-2 duration-300 bg-cover bg-center rounded-lg overflow-hidden p-28"
            style={{backgroundImage:'url(https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718549846/casaestal/wjmjn5wrpos503ppvsfb.jpg)'}}
        >
            <div className="overflow-hidden text-slate-800 relative text-wrap mx-auto bg-slate-100/70 p-16 before:border-t-2 before:absolute before:top-4 before:left-4 before:block before:border-l-2 before:border-slate-500 before:h-16 before:w-16
            after:border-b-2 after:absolute after:bottom-4 after:right-4 after:block after:border-r-2 after:border-slate-500 after:h-16 after:w-16
            ">
              <MapPin className="mx-auto mb-2"/>
              <p className="">Air Residences, Makati City, Manila</p>
              <ul className="pt-2">
                <li>🤩 Airport (NAIA) 20 mins drive</li>
                <li>🤩 walk by Airmall </li>
                <li>🤩 walk by Makati&lsquos executive businesses</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 mb-6 lg:mb-0 transition ease-in-out delay-200 hover:-translate-y-2 duration-300 bg-cover bg-center rounded-lg overflow-hidden p-28"
            style={{backgroundImage:'url(https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718597736/casaestal/g4rryyrav3swwhnuwxho.jpg)'}}
          >
            <div className="overflow-hidden text-slate-800 relative text-wrap mx-auto bg-slate-100/70 p-16 before:border-t-2 before:absolute before:top-4 before:left-4 before:block before:border-l-2 before:border-slate-500 before:h-16 before:w-16
            after:border-b-2 after:absolute after:bottom-4 after:right-4 after:block after:border-r-2 after:border-slate-500 after:h-16 after:w-16">
              <MapPin className="mx-auto mb-2"/>
              <p className="">Covent Garden, Sta Mesa, Manila</p>
              <ul>
                <li>🎥 Unli Netflix in 55&quot; TV</li>
                <li>🤩 Fast Internet speed 100mbps</li>
                <li>🫰 Twin bed and Sofabed </li>
              </ul>
            </div>
          </div>
      </div>

      <div className="flex flex-col md:mt-10 md:flex-row justify-center gap-2 mt-8 ">
        <div className="transition ease-in-out delay-200 hover:-translate-y-2 flex gap-x-2 md:w-1/4 rounded-md p-5 mr-2 bg-teal-200/80 justify-center items-center duration-300">
          <div className="relative rounded-full bg-white p-5 text-secondary overflow-hiddens">
            <HeartHandshake className="absolute top-2 left-2.5 w-5 text-slate-900"/>
          </div>
          <div className="px-2">
            <p className="text-4xl font-bold text-black">245</p>
            <span className="text-sm">served clients and counting</span>
          </div>
        </div>
        <div className="transition ease-in-out delay-200 hover:-translate-y-2 flex gap-x-2 md:w-1/4 rounded-md p-5 mr-2 bg-orange-200/80 justify-center items-center duration-300">
          <div className="relative rounded-full bg-white p-5 text-secondary overflow-hiddens">
            <Medal className="absolute top-2 left-2.5 w-5 text-slate-900"/>
          </div>
          <div className="px-2">
            <p className="text-4xl font-bold text-black">Superhost</p>
            <span className="text-sm">airbnb</span>
          </div>
        </div>
        <div className="transition ease-in-out delay-200 hover:-translate-y-2 flex gap-x-2 md:w-1/4 rounded-md p-5 mr-2 bg-amber-200/80 justify-center items-center duration-300">
        <div className="relative rounded-full bg-white p-5 text-secondary overflow-hiddens">
            <Star className="absolute top-2 left-2.5 w-5 text-slate-900"/>
          </div>
          <div className="px-2">
            <p className="text-4xl font-bold text-black">5 Star</p>
            <span className="text-sm">reviews</span>
          </div>
        </div>
        <div className="transition ease-in-out delay-200 hover:-translate-y-2 flex gap-x-2 md:w-1/4 rounded-md p-5 mr-2 bg-sky-200/80 justify-center items-center duration-300">
          <div className="relative rounded-full bg-white p-5 text-secondary overflow-hiddens">
            <BedDouble className="absolute top-2 left-2.5 w-5 text-slate-900"/>
          </div>
          <div className="px-2">
            <p className="text-4xl font-bold text-black">365+</p>
            <span className="text-sm">nights booked</span>
          </div>
        </div>
      </div>
    </section>
  );
}