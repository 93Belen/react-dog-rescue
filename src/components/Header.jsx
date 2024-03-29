import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { NavLink } from "react-router-dom";


export default function Header(){
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((state) => !state)
    }


    return (
        <header className={`${open ? 'bg-blue pb-0' : 'bg-white'} w-full md:h-fit p-4  md:bg-white overflow-x-hidden`}>
            {/*  visible part of header */}
            <div className='flex justify-between w-full md:h-[140px] gap-20'>
                {/* LOGO */}
                <div>
                    <img alt='logo' src='/logo-1.png'/>
                </div>
                {/* =============== MOBILE ICON ============================== */}
                <div className='md:hidden w-[50px] h-[50px]'>
                    <AnimatePresence>
                        <motion.svg
                        id='menuicon'
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
                 <div className='hidden md:flex w-full justify-end h-fit overflow-visible pr-5'>
                 <nav className='flex w-full justify-between max-w-[800px] text-black navbar overflow-visible'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <div className="dropdown dropdown-hover overflow-visible">
                        <div tabIndex={0} role="button">
                           Get Involved
                        </div>
                        <div tabIndex={0} className="menu dropdown-content flex flex-col gap-4 p-0"> 
                        <NavLink to='/donate'>Donate</NavLink>
                        <NavLink to='/foster'>Foster</NavLink>
                        <NavLink to='/volunteer'>Volunteer</NavLink>
                        </div>
                    </div>
                    <div className="dropdown dropdown-hover overflow-visible">
                        <div tabIndex={0} role="button">
                           Adopt
                        </div>
                        <div tabIndex={0} className="menu dropdown-content flex flex-col gap-4 p-0"> 
                            <NavLink to='/adopt'>Dogs</NavLink>
                            <NavLink to='/qualifications'>Qualifications</NavLink>
                        </div>
                    </div>
                    <NavLink to='/events'>Events</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </nav>
                 </div>
            </div>
            {/* MOBILE NAV - toggleable part of header */}
            <AnimatePresence>
                {open && (
                <motion.nav className='navbar overflow-x-hidden bg-gradient-to-b from-blue to-lightblue ml-[-15px] p-4 flex flex-col h-fit min-h-[90vh] justify-around bg-blue w-screen text-center text-white font-[600] text-[2rem] md:hidden'>
                    <NavLink onClick={toggleOpen} to='/'>Home</NavLink>
                    <NavLink onClick={toggleOpen} to='/about'>About</NavLink>
                    <div className="collapse h-fit">
                        <input type="checkbox" /> 
                        <h3 tabIndex={0} className="collapse-title p-0">
                           Get Involved
                        </h3>
                        <div tabIndex={0} className="collapse-content flex flex-col gap-4 font-[400] text-[1.5rem]"> 
                        <NavLink onClick={toggleOpen} to='/donate'>Donate</NavLink>
                        <NavLink onClick={toggleOpen} to='/foster'>Foster</NavLink>
                        <NavLink onClick={toggleOpen} to='/volunteer'>Volunteer</NavLink>
                        </div>
                    </div>
                    <div className="collapse h-fit">
                        <input type="checkbox" /> 
                        <h3 tabIndex={0} className="collapse-title p-0 ">
                           Adopt
                        </h3>
                        <div tabIndex={0} className="collapse-content flex flex-col gap-4 font-[400] text-[1.5rem]"> 
                            <NavLink onClick={toggleOpen} to='/adopt'>Dogs</NavLink>
                            <NavLink onClick={toggleOpen} to='/qualifications'>Qualifications</NavLink>
                        </div>
                    </div>
                    <NavLink onClick={toggleOpen} to='/events'>Events</NavLink>
                    <NavLink onClick={toggleOpen} to='/contact'>Contact</NavLink>
                    <div></div>
                    <div></div>
                </motion.nav>
                )}
            </AnimatePresence>

        </header>
    )
}