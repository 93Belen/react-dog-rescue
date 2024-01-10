import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { NavLink } from "react-router-dom";


export default function Header(){
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((state) => !state)
    }


    return (
        <header className={`${open ? 'bg-blue pb-0 fixed overflow-y-scroll' : 'bg-white'} w-full p-4 overflow-x-hidden`}>
            {/*  visible part of header */}
            <div className='flex justify-between w-full'>
                {/* LOGO */}
                <div>
                    <img src='/logo.png'/>
                </div>
                {/* =============== MOBILE ICON ============================== */}
                <div className='md:hidden'>
                    <AnimatePresence>
                        <motion.svg
                        layout
                        onClick={toggleOpen}
                        animate={{
                        rotate: open ? 45 : 0,
                        origin: '50% 50%'
                        }}
                        transition={{ duration: 0.5}}
                        width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.rect 
                            animate={{
                            fill: open ? '#1D818B' : '#F9F8F8'
                            }}
                            transition={{duration: 0}}
                            width="38" height="38" fill="#F9F8F8"/>
                            <motion.rect
                            animate={{
                            opacity: open ? 0 : 1
                            }}
                            x="7" y="7" width="10" height="10" fill="black"/>
                            <motion.rect 
                            animate={{
                            rotate: open ? 180 : 0,
                            fill: open ? 'white' : 'black',
                            origin: '50% 50%'
                            }}
                            transition={{ duration: 0.7}}
                            x="21" y="7" width="10" height="10" fill="black"/>
                            <motion.rect 
                            animate={{
                            rotate: open ? 180 : 0,
                            fill: open ? 'white' : 'black',
                            origin: '50% 50%'
                            }}
                            transition={{ duration: 0.7}}
                            x="7" y="20" width="10" height="10" fill="black"/>
                            <motion.rect 
                            animate={{
                            opacity: open ? 0 : 1
                            }}
                            x="21" y="20" width="10" height="10" fill="black"/>
                            </motion.svg>
                        </AnimatePresence>
                </div>
                 {/* =============== DESKTOP NAV ============================== */}
            </div>
            {/* MOBILE NAV - toggleable part of header */}
            <AnimatePresence>
                {open && (
                <motion.nav className='navbar bg-gradient-to-b from-blue to-lightblue ml-[-15px] p-4 flex flex-col h-fit min-h-[90vh] justify-around bg-blue w-screen text-center text-white font-[600] text-[2rem]'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>About Us</NavLink>
                    <div className="collapse h-fit">
                        <input type="checkbox" /> 
                        <h3 tabIndex={0} className="collapse-title p-0">
                           Get Involved
                        </h3>
                        <div tabIndex={0} className="collapse-content flex flex-col gap-4 font-[400] text-[1.5rem]"> 
                        <NavLink to='/'>Donate</NavLink>
                        <NavLink to='/'>Foster</NavLink>
                        <NavLink to='/'>Volunteer</NavLink>
                        </div>
                    </div>
                    <div className="collapse h-fit">
                        <input type="checkbox" /> 
                        <h3 tabIndex={0} className="collapse-title p-0 ">
                           Adopt
                        </h3>
                        <div tabIndex={0} className="collapse-content flex flex-col gap-4 font-[400] text-[1.5rem]"> 
                            <NavLink to='/'>Adoptable Dogs</NavLink>
                            <NavLink to='/'>Adoption Qualifications</NavLink>
                            <NavLink to='/'>Adoption Application</NavLink>
                        </div>
                    </div>
                    <NavLink to='/'>Events</NavLink>
                    <NavLink to='/'>Contact</NavLink>
                    <div></div>
                    <div></div>
                </motion.nav>
                )}
            </AnimatePresence>

        </header>
    )
}