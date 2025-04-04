'use client'

import { Button } from '@/components/ui/button'

export default function CategoryButton({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <Button
      variant={active ? 'default' : 'outline'}
      onClick={onClick}
      className="text-sm"
    >
      {label}
    </Button>
  )
}
