import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}){
    return (
        <div className='w-screen min-h-screen bg-white h-fit overflow-x-hidden box-border'>
            <Header/>
            <main className='p-4 min-h-[50vh] overflow-x-hidden w-full'>
            {children}
            </main>
            <Footer/>
        </div>
    )
}