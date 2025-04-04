'use client'

export default function Rating({ rating }: { rating: number }) {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 > 0.4

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} filled />)
  }
  if (hasHalf) {
    stars.push(<Star key="half" half />)
  }
  while (stars.length < 5) {
    stars.push(<Star key={`empty-${stars.length}`} />)
  }

  return <div className="flex">{stars}</div>
}

function Star({ filled, half }: { filled?: boolean; half?: boolean }) {
  if (filled) {
    return <span className="text-yellow-500">★</span>
  }
  if (half) {
    return <span className="text-yellow-500">✬</span>
  }
  return <span className="text-gray-300">★</span>
}
