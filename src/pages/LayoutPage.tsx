// import logo from '../assets/my_logo.png'
import Navbar from "@/components/navbar"
import { Dot } from "lucide-react"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <main className="min-h-dvh pb-6 md:pb-10 dark:bg-[#0d0d0d] bg-[#f1f1f1] flex flex-col gap-4">
            <Navbar />

            <main className="">
                <Outlet />
            </main>

            {/* footer */}
            <section className="mt-4 px-[4vw] md:px-[12vw] dark:text-zinc-50 flex max-md:flex-col justify-center items-center gap-2 md:gap-5">
                <h3 className="font-supreme-bold">Eduardo da Silva Machado &copy; 2025</h3>
                <Dot className="max-md:hidden" />
                <div className="flex md:gap-5 gap-3">
                    <a href="" className="hover:underline underline-offset-2">Email</a>
                    <a href="" className="hover:underline underline-offset-2">Instagram</a>
                    <a href="" className="hover:underline underline-offset-2">GitHub</a>
                    <a href="" className="hover:underline underline-offset-2">LinkedIn</a>
                </div>
            </section>      
        </main>
    )
}

export default Layout