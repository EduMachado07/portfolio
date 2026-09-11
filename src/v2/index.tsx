import { Outlet } from "react-router";
import { Navbar } from "@/components/v2/navbar";
import { Footer } from "@/components/v2/footer";

export const Index = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100 text-neutral-950">
      <Navbar />

      <main className="flex flex-1 flex-col py-12">
        <Outlet />
      </main>

      <Footer />
    </main>
  );
};
