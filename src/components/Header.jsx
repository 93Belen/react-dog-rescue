import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"


export default function Header(){
    const [open, setOpen] = useState(false);


    const toggleOpen = () => {
        setOpen((state) => !state)
    }


    return (
        <header>
            {/* LOGO */}
            <div>
                <img src='/logo.png'/>
            </div>
            {/* MOBILE NAV */}
            <div>
                {/* Menu Icon */}
                <div>
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
            </div>
        </header>
    )
}