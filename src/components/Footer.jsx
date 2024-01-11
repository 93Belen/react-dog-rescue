import { NavLink } from "react-router-dom"
import Facebook from './assets/Facebook'
import X from "./assets/x"
import Instagram from './assets/Instagram'
import Linkedin from './assets/Linkedin'
import Tiktok from './assets/Tiktok'


export default function Footer(){
    return (
        <footer className='p-4 md:p-12 h-fit bg-blue overflow-x-hidden gap-y-6 gap-x-4 grid grid-cols-[10%_90%] md:grid-cols-[20%_40%_40%] grid-rows-[repeat(3, fit-content)] md:grid-rows-2'>
            {/* NAVIGATION */}
            <section className='collapse md:collapse-open md:row-span-2 col-span-2 md:col-start-2 md:col-span-1 text-white h-fit w-[90%] collapse-arrow'>
                <input className='md:hidden' type='checkbox'/>
                <div className="collapse-title font-[700] md:hidden pl-0">
                    NAVIGATION
                </div>
                <div className="collapse-content md:justify-self-center pl-0 flex flex-col gap-2 text-[1rem] font-[300] md:grid md:grid-rows-4 md:grid-cols-2"> 
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
            <section className='flex h-fit flex-col gap-2 col-start-2 text-white text-[0.85rem] md:col-start-3'>
                <p className='flex flex-row gap-2'><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 5H18C18.7956 5 19.5587 5.31607 20.1213 5.87868C20.6839 6.44129 21 7.20435 21 8V17C21 17.7956 20.6839 18.5587 20.1213 19.1213C19.5587 19.6839 18.7956 20 18 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7956 2 17V8C2 7.20435 2.31607 6.44129 2.87868 5.87868C3.44129 5.31607 4.20435 5 5 5ZM5 6C4.5 6 4.06 6.17 3.72 6.47L11.5 11.5L19.28 6.47C18.94 6.17 18.5 6 18 6H5ZM11.5 12.71L3.13 7.28C3.05 7.5 3 7.75 3 8V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H18C18.5304 19 19.0391 18.7893 19.4142 18.4142C19.7893 18.0391 20 17.5304 20 17V8C20 7.75 19.95 7.5 19.87 7.28L11.5 12.71Z" fill="#F9F8F8"/>
                </svg></span>name@gmail.com</p>
                <p className='flex flex-row gap-2'><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.7143 8.57143C19.7143 12.84 12 23.1429 12 23.1429C12 23.1429 4.28572 12.84 4.28572 8.57143C4.28572 6.52548 5.09847 4.56332 6.54518 3.11661C7.99189 1.6699 9.95405 0.857147 12 0.857147C14.046 0.857147 16.0081 1.6699 17.4548 3.11661C18.9015 4.56332 19.7143 6.52548 19.7143 8.57143Z" stroke="#F9F8F8" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 11.1429C13.4202 11.1429 14.5714 9.99159 14.5714 8.57143C14.5714 7.15127 13.4202 6 12 6C10.5798 6 9.42857 7.15127 9.42857 8.57143C9.42857 9.99159 10.5798 11.1429 12 11.1429Z" stroke="#F9F8F8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></span>119 W. Gregory Blvd. #7907, Kansas City, Missouri 64114</p>
                <p className='flex flex-row gap-2'><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.7741 15.0281L16.3453 13.0434C16.1446 12.9575 15.9257 12.9229 15.7083 12.9429C15.4909 12.9628 15.2819 13.0367 15.1003 13.1578C15.0819 13.1696 15.0643 13.1828 15.0478 13.1972L12.7331 15.1659C12.7091 15.179 12.6824 15.1863 12.655 15.1873C12.6277 15.1883 12.6005 15.1829 12.5756 15.1716C11.0878 14.4534 9.54656 12.9216 8.82562 11.4544C8.81362 11.4299 8.80737 11.4029 8.80737 11.3756C8.80737 11.3483 8.81362 11.3214 8.82562 11.2969L10.8009 8.95312C10.8151 8.93578 10.8283 8.91762 10.8403 8.89874C10.9597 8.7164 11.0319 8.50719 11.0502 8.29C11.0685 8.0728 11.0325 7.85446 10.9453 7.65468L8.97468 3.23343C8.86277 2.97244 8.66923 2.75478 8.42311 2.61313C8.17699 2.47147 7.89157 2.41346 7.60968 2.44781C6.38458 2.60886 5.26004 3.2105 4.4462 4.14027C3.63237 5.07005 3.18493 6.26435 3.1875 7.49999C3.1875 14.8406 9.15937 20.8125 16.5 20.8125C17.7356 20.8149 18.9298 20.3673 19.8595 19.5536C20.7892 18.7398 21.3909 17.6153 21.5522 16.3903C21.5865 16.1097 21.5292 15.8256 21.389 15.5802C21.2488 15.3347 21.0331 15.1411 20.7741 15.0281ZM16.5 19.6875C9.78 19.6875 4.3125 14.22 4.3125 7.49999C4.30936 6.53805 4.65656 5.60787 5.28923 4.88325C5.92189 4.15863 6.79674 3.68914 7.75031 3.56249H7.77187C7.80965 3.5632 7.84634 3.5753 7.87712 3.59722C7.9079 3.61913 7.93134 3.64984 7.94437 3.68531L9.92249 8.10187C9.93378 8.12642 9.93962 8.15313 9.93962 8.18015C9.93962 8.20717 9.93378 8.23387 9.92249 8.25843L7.94343 10.6078C7.92867 10.6246 7.91519 10.6424 7.90312 10.6612C7.77928 10.8503 7.70636 11.0681 7.69141 11.2936C7.67647 11.5191 7.72 11.7447 7.81781 11.9484C8.64937 13.6509 10.365 15.3534 12.0862 16.185C12.2912 16.2823 12.5178 16.3247 12.7441 16.3083C12.9703 16.2919 13.1885 16.2171 13.3772 16.0912C13.395 16.0791 13.4128 16.0659 13.4297 16.0519L15.7434 14.0831C15.7663 14.0708 15.7915 14.0636 15.8174 14.062C15.8433 14.0604 15.8692 14.0644 15.8934 14.0737L20.3231 16.0584C20.3593 16.0738 20.3897 16.1002 20.4101 16.1339C20.4304 16.1675 20.4397 16.2067 20.4366 16.2459C20.3106 17.1999 19.8415 18.0754 19.1171 18.7088C18.3926 19.3422 17.4623 19.6901 16.5 19.6875Z" fill="#F9F8F8"/>
                </svg></span>913.555.5555</p>
            </section>
            {/* COMPANY INFO */}
            <section className='col-start-2 text-white h-fit md:col-start-1 md:row-start-1 row-span-2'>
                <h3>COMPANY NAME</h3>
                <p>Copyright © 2023 Lucky 13 Rescue Inc. - A Lucky Rescue for the Unlucky - All Rights Reserved.</p>
            </section>
            {/* SOCIAL MEDIA */}
            <section className='flex flex-col col-start-1 row-span-2 row-start-2 w-fit gap-2 md:col-start-3 md:flex-row md:w-[50%] md:min-w-[250px] md:justify-between'>
                <Facebook/>
                <X/>
                <Instagram />
                <Linkedin />
                <Tiktok />
            </section>
        </footer>
    )
}