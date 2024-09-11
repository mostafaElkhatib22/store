import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
import hero from "@/public/61C-jIPw9FS._AC_SL1001_.jpg";
import hero2 from "@/public/OIP (1).jpeg";
import hero3 from "@/public/OIP.jpeg";
import hero4 from "@/public/R (1).jpeg";
import hero5 from "@/public/R.jpeg";
import Image from "next/image";
const carouselImages = [hero, hero2, hero3, hero4, hero5];
function HeroCarousel() {
  return (
    <div className="hidden lg:block mr-7">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent>
                    <Image
                      src={image}
                      alt=""
                      className="w-full h-[27rem] rounded-md object-cover"
                      
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
