import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import MainContent from "./components/mainContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <section className="mx-16 md:mx-32 lg:mx-48 xl:mx-96">
        <Navbar />
        <MainContent />
      </section>
    </main>
  );
}
