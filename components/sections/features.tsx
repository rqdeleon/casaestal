'use client'
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star,Wifi,Bed,Tv } from "lucide-react";

export default function Features(){
  const highlights = [
      {
        text: 5,
        icon: <Star className="w-5"/>
      },
      {
        text: '100mbps',
        icon: <Wifi className="w-5" />
      },
      {
        text: '2 Bed',
        icon: <Bed className="w-5" />
      },
      {
        text: 'Smart TV 55"',
        icon: <Tv className="w-5" />
      }
  ]
  const featureData = [
    {
      slideNo: 1,
      title: "Covent Garden, Santa Mesa",
      image: "https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718597736/casaestal/g4rryyrav3swwhnuwxho.jpg",
      descript: "Experience the ultimate urban retreat at Casa Estal Staycation. Perfect for both leisure and business travelers seeking comfort and sophistication",
    },
    {
      slideNo: 2,
      title: "SMDC Air Residences, Makati City",
      image: "https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718550985/casaestal/equyuxfnfn3ejenhgmrb.jpg",
      descript: "offer modern amenities, stylish interiors, and convenient access to vibrant city attractions ",

    },
  ];
  return(
    <section id="stay" className="relative h-screen flex items-center">
    <div className="container relative">
      <div className="gap-x-11 relative px-5">
        <h2 className="text-4xl font-bold mb-6 ">Immerse yourself in our featured suites</h2>
        <p className="mb-12">Experience a stay like no other as you immerse yourself in our featured rooms, carefully crafted to provide the perfect blend of comfort and luxury.</p>
      </div>       
        <div className="">
          <Carousel opts={{align:"start"}} className="w-full">
            <CarouselContent>
              {featureData.map((data)=>(
                <CarouselItem key={data.slideNo} className="md:basis-3/4">
                  <div className="relative overflow-hidden w-full min-h-[450px]">
                    <Image src={data.image} alt={data.title} fill style={{objectFit:"cover"}} className="transition-all delay-150 w-full  object-cover rounded-lg shadow-lg top-0 left-0 hover:scale-110" />
                    <div className="absolute bottom-5 left-5 max-w-lg rounded-sm bg-secondary/85 p-8 bg-gray-900 text-secondary-foreground bg-opacity-50">
                      <h3 className="text-2xl font-bold">{data.title}</h3>
                      <p className="mt-2 text-sm">{data.descript}</p>
                      <div className="flex items-center mt-7 text-sm">
                        {highlights.map((f)=>(
                          <span key={f.text} className="flex gap-1 mr-7">{f.icon} {f.text}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                 
                </CarouselItem>
              ))} 
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
    </div>
  </section>
  );
}