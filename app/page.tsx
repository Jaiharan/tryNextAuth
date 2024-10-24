import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="http://v0.dev/">
          <Image
            src="/favicon.ico"
            alt="Vercel Logo"
            width={50}
            height={50}
            className="dark:invert"
          />
        </a>
      </footer>
    </div>
  );
}
