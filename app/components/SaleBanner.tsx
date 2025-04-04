'use client'

import { Button } from '@/components/ui/button'

export default function SaleBanner() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 md:py-10">
      <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-pink-400 to-orange-300 p-6 text-white shadow-lg">
        <h2 className="mb-2 text-2xl font-extrabold sm:text-3xl">
          Mega Sale! Up to 50% Off
        </h2>
        <p className="mb-4 max-w-md text-sm sm:text-base">
          Grab your favorite items at unbelievable prices. Limited time only!
        </p>
        <Button variant="secondary" className="text-sm sm:text-base">
          Shop Sale
        </Button>
      </div>
    </section>
  )
}
