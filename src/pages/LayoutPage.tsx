// import logo from '../assets/my_logo.png'
import Navbar from "@/components/navbar"
import { Dot } from "lucide-react"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <main className="min-h-dvh pb-12 dark:bg-[#0d0d0d] bg-[#f1f1f1] flex flex-col gap-4">
            <Navbar />

            <main className="">
                <Outlet />
            </main>

            {/* footer */}
            <section className="px-[12vw] dark:text-zinc-50 flex justify-center items-center gap-5">
                <h3 className="font-supreme-bold">Eduardo da Silva Machado &copy; 2025</h3>
                <Dot />
                <a href="" className="font-supreme-bold hover:underline underline-offset-2">Email</a>
                <a href="" className="font-supreme-bold hover:underline underline-offset-2">Instagram</a>
                <a href="" className="font-supreme-bold hover:underline underline-offset-2">GitHub</a>
                <a href="" className="font-supreme-bold hover:underline underline-offset-2">LinkedIn</a>
            </section>
        </main>
    )
}

export default Layout