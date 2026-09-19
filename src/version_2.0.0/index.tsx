import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const Index = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100 text-neutral-950">
      <Navbar />

      <main className="flex flex-1 flex-col py-12">
        <Outlet />
      </main>

      <Footer />
      <ScrollRestoration />
    </main>
  );
};
