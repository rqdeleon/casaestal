'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils";
import { Waves, Sparkles, BedDouble, Laptop2 } from "lucide-react";

const tabContent = [
  {
    tabValue: "SwimmingPool",
    images:[
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718599966/casaestal/ymaa4rnvuwgbuslr2ygl.jpg',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718599975/casaestal/b8lrt9gzul0608h5es1y.jpg',
        divStyle: 'col-span-1 md:col-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718549846/casaestal/wjmjn5wrpos503ppvsfb.jpg',
        divStyle: '',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718549874/casaestal/wyj1tldkxanfw7sy1jtg.jpg',
        divStyle: '',
      },
    ]
  },
  {
    tabValue: "amenities",
    images:[
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718550973/casaestal/uhonmammbqsdflb6oyyj.jpg',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718550891/casaestal/fadldfvhihhgrps3lzob.jpg',
        divStyle: '',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718607850/casaestal/ybc5fpcztwtt3wyk5alo.jpg',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718603053/casaestal/wfuimh4lcwhyydgmj1mx.jpg',
        divStyle: '',
      },
    ]
  },
  {
    tabValue: "luxery",
    images:[
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718597736/casaestal/g4rryyrav3swwhnuwxho.jpg',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718550985/casaestal/equyuxfnfn3ejenhgmrb.jpg',
        divStyle: '',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718549935/casaestal/ahwg1mgdrhzxgovtxp7q.jpg',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718549780/casaestal/bfou57xzp1mb1rrfhbkf.jpg',
        divStyle: '',
      },
    ]
  },
  {
    tabValue: "lodging",
    images:[
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718603031/casaestal/ovuynmexosk5n7ahlaij.jpg',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718607847/casaestal/o8qqtqtmjvc6wpwo2omr.jpg',
        divStyle: '',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718607934/casaestal/cjzw4roqdmrp1dglwete.jpg',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718607860/casaestal/cjtttjmafplco59ajltb.jpg',
        divStyle: '',
      },
    ]
  },
]



export default function Gallery(){
  return(
    <section id="ameneties" className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Amenities</h2>
        <p className="text-gray-600">Explore our luxurious amenities</p>
      </div>

      <div className="container mx-auto px-4 ">
        <Tabs defaultValue="SwimmingPool" className="w-full text-center">
          <TabsList className="grid w-full grid-cols-2 min-h-[150px] mb-11 md:grid-cols-4  md:mb-3 md:min-h-24">
            <TabsTrigger value="SwimmingPool" className="flex gap-2 h-16"> <Waves /> Swimming Pool</TabsTrigger>
            <TabsTrigger value="amenities" className="flex gap-2 h-16"><Sparkles />Amenities & Sportcenter</TabsTrigger>
            <TabsTrigger value="luxery" className="flex gap-2 h-16"><BedDouble />Stay in style</TabsTrigger>
            <TabsTrigger value="lodging" className="flex gap-2 h-16"><Laptop2 />Workspaces & Lodging</TabsTrigger>
          </TabsList>

          {
            tabContent.map((tab)=>(
              <TabsContent key={tab.tabValue} value={tab.tabValue} >
                <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 gap-4 max-h-[450px]">
                  {tab.images.map((img)=>(
                    <div key={img.source} className={cn('relative overflow-hidden',img.divStyle)}>
                      <img loading="lazy" src={img.source} alt="Image 1" className="object-cover w-full h-full rounded-lg shadow-md" />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))
          }

        </Tabs>
      </div>
    </section>
  );

}