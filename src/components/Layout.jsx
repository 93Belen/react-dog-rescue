import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}){
    return (
        <div className='w-full min-h-screen bg-white h-fit overflow-x-hidden box-border'>
            <Header/>
            <main className='md:min-h-[80vh] min-h-[70vh] overflow-x-hidden w-full'>
            {children}
            </main>
            <Footer/>
        </div>
    )
}