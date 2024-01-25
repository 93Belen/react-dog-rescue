import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}){
    return (
        <div className='w-full min-h-screen bg-white h-fit overflow-x-hidden box-border'>
            <Header/>
            <main className='md:min-h-[70vh] min-h-[64vh] overflow-x-hidden w-full'>
            <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}