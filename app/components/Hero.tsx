import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import HeroLogo from "@/app/assets/pngwing.com.png"
import Queue from "./Queue";

export function Hero(){
    return(
        <section className="relative flex items-center gap-2 p-8 rounded-2xl shadow-2xl">
            <div className="grid grid-cols-8">
            <div className="flex-1 col-span-2" >
                <h1 className="text-white text-4xl font-bold mb-3 w-3xs">
                   Let The Music Take You Beyond
                </h1>
                <p className="text-slate-300 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline">&larr;</Button>
                  <Button variant="outline">&rarr;</Button>
                </div>
            </div>
        <div className="col-span-4 flex-1 flex flex-col items-center justify-center">
          <div className="relative aspect-square w-32 sm:w-48 md:w-72 lg:w-96 flex items-center justify-center">
            <div
              className="
                bg-yellow-300/70
                absolute inset-0
                z-0
                rounded-full
                transition-all
                duration-300
              "
            ></div>
            <Image
              className="absolute inset-0 z-10 object-contain"
              src={HeroLogo}
              alt="Hero logo"
              fill
              sizes="(max-width: 640px) 8rem, (max-width: 768px) 12rem, (max-width: 1024px) 18rem, 24rem"
            />
          </div>
        </div>
        <div className="col-span-2">
           <Queue/>
          </div>
        </div>
        </section>
        
    )
}