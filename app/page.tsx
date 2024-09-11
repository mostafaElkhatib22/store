import LoadingContainer from '@/components/global/LoadingContainer';
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Suspense } from "react";
export default function HomePage() {
  return (
    <div>
     <Hero/>
     <Suspense fallback={<LoadingContainer/>}/>
     <FeaturedProducts/>
    </div>
  )
}
