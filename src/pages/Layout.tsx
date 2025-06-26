// import logo from '../assets/my_logo.png'
import Navbar from "@/components/navbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <main className="px-[16vw] dark:bg-[#0d0d0d] flex flex-col gap-4">
            <Navbar />

            <Outlet />
        </main>
    )
}

export default Layout