'use client'

import Image from 'next/image'

// Dummy brand images
import brand1 from '@/public/brand1.jpg'
import brand2 from '@/public/brand2.jpg'
import brand3 from '@/public/brand3.jpg'
import brand4 from '@/public/brand4.jpg'
import brand5 from '@/public/brand5.jpg'
import brand6 from '@/public/brand6.jpg'

export default function BrandCarousel() {
  const brandLogos = [brand1, brand2, brand3, brand4, brand5, brand6]

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Our Brands</h2>
      <div className="flex gap-6 overflow-x-auto pb-2">
        {brandLogos.map((logo, idx) => (
          <div key={idx} className="relative h-24 w-40 flex-shrink-0">
            <Image
              src={logo}
              alt={`Brand ${idx + 1}`}
              fill
              className="object-contain object-center"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
