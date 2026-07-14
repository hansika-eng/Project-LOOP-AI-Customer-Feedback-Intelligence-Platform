import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        <h1 className="text-6xl font-bold">
          LOOP AI
        </h1>

        <p className="mt-4 text-2xl text-gray-300">
          Customer Feedback Intelligence Platform
        </p>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Collect customer feedback, analyze sentiment using AI,
          generate reports, and improve customer experience
          from one powerful dashboard.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <Link
            href="/auth/login"
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Login
          </Link>

          <Link
            href="/auth/register"
            className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Get Started
          </Link>

        </div>

      </div>
    </main>
  );
}