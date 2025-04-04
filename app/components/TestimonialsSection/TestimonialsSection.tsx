'use client'

import TestimonialCard from './TestimonialCard'

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 md:py-12"
    >
      <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
        What Our Customers Are Saying
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <TestimonialCard
          name="Jane Doe"
          title="Freelancer"
          quote="“I love the range of products here. The shipping was super fast!”"
        />
        <TestimonialCard
          name="John Smith"
          title="Event Organizer"
          quote="“Great customer service and fantastic deals. Highly recommended!”"
        />
        <TestimonialCard
          name="Lisa Chan"
          title="Student"
          quote="“Always find something new and exciting on Huntshake.”"
        />
      </div>
    </section>
  )
}
