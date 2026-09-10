import { Navbar } from "@/components/v2/navbar";
import { Footer } from "@/components/v2/footer";
import { HomePage } from "./HomePage/page";

export const Index = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100 text-neutral-950">
      <Navbar />

      <main className="py-12">
        <HomePage />
      </main>

      <Footer />
    </main>
  );
};
