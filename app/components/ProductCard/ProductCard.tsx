
'use client'

import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Rating from './Rating'

interface Product {
  id: number
  name: string
  price: number
  image: any
  category: string
  rating: number
  onSale?: boolean
}

export default function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product
  onAddToCart: (p: Product) => void
}) {
  return (
    <Card className="shadow transition-transform hover:scale-[1.01] hover:shadow-md">
      <CardHeader className="relative h-48 w-full overflow-hidden">
        {product.onSale && (
          <div className="absolute left-2 top-2 rounded bg-red-500 px-2 py-1 text-xs text-white">
            SALE
          </div>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center"
        />
      </CardHeader>
      <CardContent className="flex flex-col space-y-2 p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-800">{product.name}</p>
          <span className="text-sm font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary">{product.category}</Badge>
          <Rating rating={product.rating} />
        </div>
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
  )
}
