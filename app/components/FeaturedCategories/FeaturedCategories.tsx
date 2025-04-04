'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import CategoryCard from './CategoryCard'

export default function FeaturedCategories() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 md:py-12">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Featured Categories</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <CategoryCard title="New Arrivals" subtitle="Check out the latest trends" />
        <CategoryCard title="Best Sellers" subtitle="Our most popular products" />
        <CategoryCard title="Limited Edition" subtitle="Get them before they're gone" />
      </div>
    </section>
  )
}
