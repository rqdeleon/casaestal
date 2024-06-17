"use client"
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Testimony(){
  
  const testimonialData = [
    {
      slideNo: 1,
      name: "Ria",
      profile: "/images/testimonials/ria.webp",
      text: "Kimberly is a great host. Communication was great throughout. The unit is in a wonderful building close to the corner of Buendia Ave and Ayala Ave. The mall on the first and second floor have great restaurants as well as a convenient grocery store, convenience store and hardware store. It also had a salon and spa. And we loved the green space, pool and rec area on the 7th and 8th floor. We definitely hope to come back!",
      job: "St. Louis, Missouri"
    },
    {
      slideNo: 2,
      name: "Benjamin",
      profile: "/images/testimonials/benjamin.webp",
      text: "Staying at Kimberly's Airbnb at Air Residences was an absolute delight from start to finish. Perched on the 57th floor, the panoramic views of Makati were breathtaking, offering a serene escape from the bustling city below. Kimberly's attentiveness and responsiveness truly stood out; her thoughtful recommendations enriched my stay, guiding us to hidden gems and must-visit spots in the area. It was a memorable experience, and I can't wait to return. Highly recommended for anyone looking for a luxurious and convenient stay in Manila!",
      job: "Houston, Texas"
    },
    {
      slideNo: 3,
      name: "Sophie",
      profile: "/images/testimonials/sophie.webp",
      text: "We loved the apartment! very luxurious, large, the view is very beautiful. the host was very nice and very proactive in his responses. we highly recommend it.",
      job: "Montreal, Canada"
    },
  ];
  
  return(
    <section id="review" className="pb-20 pt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px] bg-secondary/50">
      <div className="container ">
        <h3 className="text-4xl font-bold mb-6">Every stay has a story</h3>
        <div className="relative flex justify-center ">
          <div className="relative w-full" >
            <Carousel
              opts={{ align: "start", }}
              className=""
            >
              <CarouselPrevious />
              <CarouselNext />
              <CarouselContent>
                {testimonialData.map((index) => (
                  <CarouselItem key={index.slideNo} className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-secondary p-11 min-h-72 rounded-lg" >
                      <div className="">
                        <main className="">
                          <p className="text-md mb-11 font-normal italic text-body-color dark:text-dark-6" >
                            {index.text}
                          </p>
                        </main>
                        <footer className="flex gap-x-4">
                          <div className="relative rounded-full overflow-hidden w-20 h-20">
                            <Image
                                src={index.profile}
                                alt="profile image"
                                fill
                                className="bg-cover object-cover"
                            />
                          </div>
                          <div className="content-center">
                            <h4 className="text-md font-semibold text-dark dark:text-white"
                            >
                              {index.name}
                            </h4>
                            <p className="text-xs text-body-color dark:text-dark-6">
                              {index.job}
                            </p>
                          </div>
                        </footer>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            </div>
          </div>
      </div>
    </section>
  );
}