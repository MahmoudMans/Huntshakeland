'use client'

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'

export default function MegaMenu() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost">Categories</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-96">
        <div className="grid grid-cols-2 gap-4 p-2 text-sm">
          <div>
            <p className="mb-1 font-semibold text-gray-800">Clothing</p>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:underline">Tops & Tees</a></li>
              <li><a href="#" className="hover:underline">Jeans & Pants</a></li>
              <li><a href="#" className="hover:underline">Jackets</a></li>
              <li><a href="#" className="hover:underline">Activewear</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-1 font-semibold text-gray-800">Electronics</p>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:underline">Smartphones</a></li>
              <li><a href="#" className="hover:underline">Laptops</a></li>
              <li><a href="#" className="hover:underline">Headphones</a></li>
              <li><a href="#" className="hover:underline">Accessories</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-1 font-semibold text-gray-800">Shoes</p>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:underline">Sneakers</a></li>
              <li><a href="#" className="hover:underline">Sandals</a></li>
              <li><a href="#" className="hover:underline">Boots</a></li>
              <li><a href="#" className="hover:underline">Heels</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-1 font-semibold text-gray-800">Specials</p>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:underline">Limited Editions</a></li>
              <li><a href="#" className="hover:underline">Clearance</a></li>
              <li><a href="#" className="hover:underline">Bestsellers</a></li>
              <li><a href="#" className="hover:underline">Gift Ideas</a></li>
            </ul>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
