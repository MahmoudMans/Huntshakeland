'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function TestimonialCard({
  name,
  title,
  quote,
}: {
  name: string
  title: string
  quote: string
}) {
  return (
    <Card className="shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 italic">{quote}</p>
      </CardContent>
    </Card>
  )
}
