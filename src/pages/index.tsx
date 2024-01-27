import Image from "next/image";
import { Inter } from "next/font/google";
import Landing from "@/modules/landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Landing />
    </div>
  );
}
