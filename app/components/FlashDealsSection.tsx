'use client'

import { Button } from '@/components/ui/button'

export default function FlashDealsSection({ countdown }: { countdown: number }) {
  // Convert seconds to hh:mm:ss
  const hours = Math.floor(countdown / 3600)
  const minutes = Math.floor((countdown % 3600) / 60)
  const seconds = countdown % 60

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 md:py-8">
      <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-red-500 to-orange-400 p-6 text-white shadow-lg">
        <h2 className="mb-2 text-2xl font-extrabold sm:text-3xl">Flash Deals!</h2>
        <p className="mb-4 max-w-md text-sm sm:text-base">
          Hurry up! These deals expire in:
        </p>
        <div className="mb-4 flex items-center space-x-4 text-xl font-bold sm:text-2xl">
          <span>{String(hours).padStart(2, '0')}</span>:
          <span>{String(minutes).padStart(2, '0')}</span>:
          <span>{String(seconds).padStart(2, '0')}</span>
        </div>
        <Button variant="secondary" className="text-sm sm:text-base">
          Grab Deals
        </Button>
      </div>
    </section>
  )
}
