import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-4 font-sans">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8 rounded-2xl bg-white p-8 text-center shadow-lg sm:p-12">
        <div className="rounded-full bg-primary/10 p-4">
          <Package className="h-10 w-10 text-primary" />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frontend Interview Task
          </h1>
          <p className="mx-auto max-w-md text-lg text-gray-600">
            Welcome! This project demonstrates a responsive product details page
            built with Next.js 16, Tailwind CSS, and Shadcn UI.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full sm:w-auto sm:flex-row">
          <Button asChild size="lg" className="gap-2">
            <Link href="/products/1">
              View Product Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

      </main>

      <footer className="mt-8 text-sm text-gray-400">
        Built for the frontend developer assessment
      </footer>
    </div>
  );
}
