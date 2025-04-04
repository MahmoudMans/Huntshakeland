'use client'

import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: number
  image: any
  category: string
  rating: number
  onSale?: boolean
}

export default function RecommendedCarousel({
  onAddToCart,
  title,
  products,
}: {
  onAddToCart: (p: Product) => void
  title: string
  products: Product[]
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 md:py-10">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {products.map((product) => (
          <Card
            key={product.id}
            className="w-56 flex-shrink-0 shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl"
          >
            <CardHeader className="relative h-32 w-full overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-sm font-semibold text-gray-800">{product.name}</p>
              <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
              <Button
                variant="default"
                size="sm"
                className="mt-2"
                onClick={() => onAddToCart(product)}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
