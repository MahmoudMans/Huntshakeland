'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface Product {
  id: number
  name: string
  price: number
  image: any
  category: string
  rating: number
  onSale?: boolean
}

export default function CartDialog({
  cartItems,
  onRemoveFromCart,
}: {
  cartItems: Product[]
  onRemoveFromCart: (index: number) => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          Cart ({cartItems.length})
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Shopping Cart</DialogTitle>
        </DialogHeader>
        {cartItems.length === 0 ? (
          <p className="py-4 text-sm text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-2 text-sm"
              >
                <span>{item.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">${item.price.toFixed(2)}</span>
                  <Button
                    variant="destructive"
                    size="xs"
                    onClick={() => onRemoveFromCart(index)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
            <div className="flex justify-end pt-2">
              <Button variant="default">Checkout</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
