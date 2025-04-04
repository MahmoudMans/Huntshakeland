// app/page.tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 md:px-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Welcome to Next.js 15
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Build modern web applications with Next.js, Tailwind CSS, and shadcn/ui.
        </p>
        <div className="mt-6">
          <Button size="lg">Get Started</Button>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>Easy Routing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Powerful and intuitive routing built-in with Next.js App Router.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>Tailwind Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Style your app seamlessly with utility-first CSS framework Tailwind.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>UI Components</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Quickly create consistent UIs using beautifully designed components from shadcn/ui.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-16 flex justify-center">
        <Image
          src="/nextjs-logo.svg"
          alt="Next.js Logo"
          width={120}
          height={120}
          priority
        />
      </section>

      <footer className="mt-16 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Next.js Homepage Example. All rights reserved.
      </footer>
    </main>
  );
}
