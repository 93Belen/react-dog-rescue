import Layout from "../Layout";
import { motion } from "framer-motion";
import DonateButton from "../DonateButton";

export default function Volunteer(){
    return (
            <div className='text-black'>
                <section className='xl:px-32 w-full p-4 md:p-12 py-12 pt-4 flex flex-col gap-6'>
                <h1 className='text-[2rem] md:text-[2.5rem] h-fit'>Volunteer</h1>
                <motion.p
                 initial={{x: -250}}
                 whileInView={{ x: 0}}
                 transition={{duration: 0.5, delay: 0}}
                 viewport={{ once: true }}
                 className='col-start-1'
                >
                Lucky 13 Rescue is comprised of volunteers who help out in many ways. We are always in need of foster homes however, if you cannot foster we have other needs. Below are a few areas where we could use you.
                <ol>
                <motion.li
                initial={{x: -250}}
                whileInView={{ x: 0}}
                transition={{duration: 0.5, delay: 0.1}}
                viewport={{ once: true }}
                className='col-start-1'
                >1. Transportation to vet appointments and events</motion.li>
                <motion.li
                initial={{x: -250}}
                whileInView={{ x: 0}}
                transition={{duration: 0.5, delay: 0.2}}
                viewport={{ once: true }}
                className='col-start-1'
                >2. Event coordination</motion.li>
                <motion.li
                initial={{x: -250}}
                whileInView={{ x: 0}}
                transition={{duration: 0.5, delay: 0.3}}
                viewport={{ once: true }}
                className='col-start-1'
                >3. Donation collection</motion.li>
                <motion.li
                initial={{x: -250}}
                whileInView={{ x: 0}}
                transition={{duration: 0.5, delay: 0.4}}
                viewport={{ once: true }}
                className='col-start-1'
                >4. Application processing</motion.li>
                <motion.li
                initial={{x: -250}}
                whileInView={{ x: 0}}
                transition={{duration: 0.5, delay: 0.5}}
                viewport={{ once: true }}
                className='col-start-1'
                >5. Website manager</motion.li>
                                <motion.li
                initial={{x: -250}}
                whileInView={{ x: 0}}
                transition={{duration: 0.5, delay: 0.6}}
                viewport={{ once: true }}
                className='col-start-1'
                >6. Software Management</motion.li>
                                <motion.li
                initial={{x: -250}}
                whileInView={{ x: 0}}
                transition={{duration: 0.5, delay: 0.7}}
                viewport={{ once: true }}
                className='col-start-1'
                >7. Website Management</motion.li>
                </ol>
                </motion.p>
                </section>
                <section className='w-screen h-[450px]'>
                <img 
                className='w-full object-cover h-[450px] object-center'
                src="/troy-5.png" alt="" />
                </section>
                <section className='px-6 py-12 text-center flex flex-col items-center gap-6 md:gap-12 md:py-20'>
                    <h2 className='text-[2rem]'>Help Our Cause</h2>
                    <motion.p 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{duration: 0.5}}
                    viewport={{ once: true }}
                    className='md: max-w-[600px]'>                    
                    We are a foster based rescue as we do not have a facility to intake dogs on the spot.
                    All of our rescue dogs are provided with medical attention and behavioral rehabilitation. 
                    They will be adopted into their forever home spayed/neutered, fully vaccinated, microchipped, and le.
                    Tax ID 81-3473567.
                    </motion.p>
                    <DonateButton/>
            </section>
            </div>
    )
}