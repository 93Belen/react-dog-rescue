import Header from "./Header";

export default function Layout({children}){
    return (
        <div className='w-screen min-h-screen bg-white h-fit overflow-x-hidden'>
            <Header/>
            <main className='p-4'>
            {children}
            </main>
        </div>
    )
}