import { NavLink } from "react-router-dom"


export default function Footer(){
    return (
        <footer className='p-4 h-[500px] bg-blue overflow-x-hidden grid grid-cols-[10%_90%] md:grid-cols-[20%_40%_40%] grid-rows-3 md:grid-rows-2'>
            {/* NAVIGATION */}
            <section className='collapse md:collapse-open justify-self-center col-span-2 md:col-start-2 md:col-span-1 text-white h-fit w-[90%] collapse-arrow'>
                <input type='checkbox'/>
                <div className="collapse-title font-[700] md:hidden">
                    NAVIGATION
                </div>
                <div className="collapse-content flex flex-col gap-2 text-[1rem] font-[300] md:grid md:grid-rows-4 md:grid-cols-2"> 
                <NavLink to='/'>Foster</NavLink>
                <NavLink to='/'>Volunteer</NavLink>
                <NavLink to='/'>Dogs</NavLink>
                <NavLink to='/'>Application</NavLink>
                <NavLink to='/'>FAQs</NavLink>
                <NavLink to='/'>Shop</NavLink>
                <NavLink to='/'>Events</NavLink>
                <NavLink to='/'>Board of Directors</NavLink>
                </div>
            </section>
            {/* CONTACT */}
            <section>

            </section>
            {/* COMPANY INFO */}
            <section>

            </section>
            {/* SOCIAL MEDIA */}
            <section>

            </section>
        </footer>
    )
}