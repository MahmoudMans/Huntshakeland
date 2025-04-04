'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function CategoryCard({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <Card className="shadow transition-transform hover:scale-[1.02] hover:shadow-md">
      <CardHeader className="bg-blue-50 p-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button variant="outline" size="sm">
          Explore
        </Button>
      </CardContent>
    </Card>
  )
}
