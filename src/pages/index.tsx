import Image from "next/image";
import { Inter } from "next/font/google";
import Landing from "@/modules/landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex h-full flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Landing />
      </div>
    </main>
  );
}
