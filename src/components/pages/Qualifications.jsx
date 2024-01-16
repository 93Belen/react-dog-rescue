import Layout from "../Layout";
import { motion } from "framer-motion";

export default function Qualifications(){
    return (
        <Layout>
            <div className='text-black w-full'>
                <section className='xl:px-32 w-full p-4 md:p-12 flex flex-col gap-6 md:grid grid-cols-[40%_60%]'>
                    <h1 className='text-[2.5rem] h-fit'>Adoption Qualifications</h1>
                        <motion.p
                        initial={{x: -250}}
                        whileInView={{ x: 0}}
                        transition={{duration: 0.5}}
                        viewport={{ once: true }}
                        className='col-start-1'
                        >
                        Adoption application must be completed with veterinary reference. 
                        Vet reference must have valid information to establish a history of 
                        responsible pet ownership. We must be able to verify that previous or 
                        current dogs are/were spayed/neutered, current on vaccines, and current 
                        on heartworm prevention and testing. Cats must be/have been spayed/neutered 
                        and current on rabies and FVRCP. Without this vital information, 
                        we are unable to approve adoptions. Our mission to adopt our rescues is not 
                        based on "good faith". Our ability to approve applications is based off of 
                        an established history or responsible pet parenting. We have witnessed far 
                        too many animals suffer to allow "good faith" to forecast their future.
                        Must be 21 years of age, or older
                        Have valid driver's license and/or other photo ID
                        Must be open to home inspection
                        All pets must reside inside your home as part of your family
                        Adoption application must be completed in their entirety. 
                        Deceptive information is not tolerated, nor excused.
                        </motion.p>
                        <motion.img 
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        transition={{duration: 0.3}}
                        viewport={{ once: true }}
                        className='w-full col-start-2 row-start-1 row-span-3 rounded-lg md:w-auto md:h-full md:mx-auto object-cover object-[35%]'
                        src="/troy-6.png" alt="" />
                </section>
                <section className='bg-gradient-to-b from-blue to-lightblue text-white px-6 py-12 text-center flex flex-col items-center gap-6 md:gap-12'>
                    <p
                    className='md: max-w-[1050px]'>
                    We are unable to approve applicants: <br/>
                    <motion.ul>
                    <motion.li
                     initial={{x: 250}}
                     whileInView={{ x: 0}}
                     transition={{duration: 0.5, delay: 0}}
                     viewport={{ once: true }}
                    > - If there is an un-spayed or un-neutered pets in the home
                    unless there is a valid, documented health reason from your veterinarian.</motion.li>
                    <motion.li
                     initial={{x: 250}}
                     whileInView={{ x: 0}}
                     transition={{duration: 0.5, delay: 0.1}}
                     viewport={{ once: true }}
                    > - The pet will be outdoors only or you have an outdoor pet currently.</motion.li>
                    <motion.li
                     initial={{x: 250}}
                     whileInView={{ x: 0}}
                     transition={{duration: 0.5, delay: 0.2}}
                     viewport={{ once: true }}
                    > - The pet is intended as a gift</motion.li>
                    <motion.li
                     initial={{x: 250}}
                     whileInView={{ x: 0}}
                     transition={{duration: 0.5, delay: 0.3}}
                     viewport={{ once: true }}
                    > - History of repeated rehoming of pets</motion.li>
                    <motion.li
                     initial={{x: 250}}
                     whileInView={{ x: 0}}
                     transition={{duration: 0.5, delay: 0.4}}
                     viewport={{ once: true }}
                    > - Over city limit for pets</motion.li>
                    <motion.li
                     initial={{x: 250}}
                     whileInView={{ x: 0}}
                     transition={{duration: 0.5, delay: 0.5}}
                     viewport={{ once: true }}
                    > - You are renting and landlord will not approve pet
                    Unwanted litters/breeding history</motion.li>
                    </motion.ul>
                    </p>
                    <p className='max-w-[600px]'>
                    In addition to the above, we reserve the right to decline any applicant for any reason. 
                    We have rescued these babies once. We have rescued them for a better life. Rescuing an animal 
                    to place in a less than ideal home is futile. We sincerely hope applicants will appreciate 
                    and honor our goals to protect the rescued pets current in our care. We are here for them. 
                    We hope you are too.
                    </p>
                </section>
                <section className='xl:px-32 w-full p-4 md:p-12'>
                    <h3 className='text-[2rem]'>Frequanly Asked Questions</h3>
                </section>
            </div>
        </Layout>
    )
}