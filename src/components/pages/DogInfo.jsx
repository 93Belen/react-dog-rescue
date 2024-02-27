import Chip from "../Chip"
import { motion } from "framer-motion"
import AdoptButton from '../AdoptButton'
import DonateButton from '../DonateButton'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";
import { DogInfoArr } from "../../DogInfo/DogInfoArr";

export default function DogInfo(){
    
    const { name, sex, breed, arrived, size, age } = useParams();

    const dog = DogInfoArr.filter(item => item.name === name)

    return(
        <section className='text-black w-full h-fit'>
            <section className='xl:px-32 w-full p-4 md:p-12 md:py-0 py-12 flex flex-col gap-6 md:gap-12'>
            <Link className='text-[3rem]' to='/adopt'><FaArrowLeft /></Link>
            <h1 className="text-[2rem] md:text-[2.5rem] h-fit">{name}</h1>
            <div className='mx-auto'>
            <div className="carousel w-auto md:w-[550px] m-auto max-h-[35vh]">
                <div id="item1" className="carousel-item w-full rounded-lg">
                    <img src="./troy.png" className="w-full rounded-lg" />
                </div> 
                <div id="item2" className="carousel-item w-full rounded-lg">
                    <img src="./troy-4.png" className="w-full rounded-lg" />
                </div> 
                <div id="item3" className="carousel-item w-full rounded-lg">
                    <img src="./troy-2.png" className="w-full rounded-lg" />
                </div> 
                <div id="item4" className="carousel-item w-full rounded-lg">
                    <img src="./troy-3.png" className="w-full rounded-lg" />
                </div>
                </div> 
                <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn bg-white text-black btn-xs">1</a> 
                <a href="#item2" className="btn bg-white text-black btn-xs">2</a> 
                <a href="#item3" className="btn bg-white text-black btn-xs">3</a> 
                <a href="#item4" className="btn bg-white text-black btn-xs">4</a>
                </div>
            </div>
            
                <div className='flex md:justify-between md:max-w-[600px] flex-wrap gap-2'>
                    <Chip text={sex} />
                    <Chip text={size} />
                    <Chip text={breed} />
                    <Chip text={age} />
                </div>
                <div className='flex flex-col gap-12'>
                    <motion.ul className='flex flex-col gap-4'>
                        <motion.li
                        initial={{x: -250}}
                        whileInView={{ x: 0}}
                        transition={{duration: 0.5, delay: 0}}
                        viewport={{ once: true }}
                        >
                        <span className='font-bold'>ARRIVED:</span> {arrived}
                        </motion.li>
                    </motion.ul>
                    <p>
                        {dog[0].text}
                    </p>
                </div>
                <div className='flex justify-between md:max-w-[500px] gap-4 flex-wrap pb-4 md:pb-20' >
                    <AdoptButton />
                    <DonateButton/>
                </div>
            </section>
            <section id='faqs' className='bg-gradient-to-b from-blue to-lightblue text-white px-6 py-12 text-center flex flex-col items-center gap-6 md:gap-12'>
                    <h3 className='text-[2rem]'>Adoption Process</h3>
                    <motion.ol>
                        <motion.li
                        initial={{x: 250}}
                        whileInView={{ x: 0}}
                        transition={{duration: 0.5, delay: 0}}
                        viewport={{ once: true }}
                        >1. Fill out application.</motion.li>
                        <motion.li
                        initial={{x: 250}}
                        whileInView={{ x: 0}}
                        transition={{duration: 0.5, delay: 0.1}}
                        viewport={{ once: true }}
                        >2. Meet and greet scheduled once approved.</motion.li>
                        <motion.li
                        initial={{x: 250}}
                        whileInView={{ x: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        viewport={{ once: true }}
                        >3. If the meet and greet goes well, you may possibly be able to adopt at that time. </motion.li>
                        <motion.li
                        initial={{x: 250}}
                        whileInView={{ x: 0}}
                        transition={{duration: 0.5, delay: 0.3}}
                        viewport={{ once: true }}
                        >4. Home check required.</motion.li>
                    </motion.ol>
                    <p>
                    Once your application is approved, we will contact you to answer any 
                    questions you may have and to set up a meet & greet. This process can 
                    take several hours to several days, as we are entirely volunteer based. ​ 
                    There are many times we get multiple applicants for a dog. In those instances, 
                    we contact people in the order applications are received. We will do our best
                    to notify you if this occurs. PLEASE ADD ADOPTIONS@LUCKY13RESCUE.ORG TO YOUR 
                    LIST. We will be replying by email. 
                    </p>
                </section>
    </section>
    )
}