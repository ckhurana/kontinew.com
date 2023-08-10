import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-slate-50 px-16">
      <div className="relative w-full h-72 max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute flex w-full h-full items-center justify-center">
          <p className="text-6xl font-bold">kontinew</p>
        </div>
      </div>
      <Link
        className="absolute bottom-24 border p-4 px-6 rounded-md border-gray-700"
        href="http://apps.kontinew.com"
      >
        Apps
      </Link>
    </main>
  );
}
