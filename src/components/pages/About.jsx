import Layout from "../Layout";
import {motion} from "framer-motion"

export default function About(){
    return (
        <Layout>
            <div className='text-black w-full p-4 md:p-12 flex flex-col gap-6 md:grid grid-cols-2'>
                <h1 className='text-[2.5rem] h-fit'>About Us</h1>
                <motion.p
                 initial={{x: -250}}
                 whileInView={{ x: 0}}
                 transition={{duration: 0.5}}
                 viewport={{ once: true }}
                 className='col-start-1'
                >
                Lucky 13 Rescue is a federal 501(c)3 non-profit rescue founded in Drexel, 
                Missouri in August 2016 and recently moved to the Kansas City, Missouri area.
                </motion.p>
                <motion.img 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 0.3}}
                viewport={{ once: true }}
                className='w-full col-start-2 row-start-1 row-span-3 rounded-lg md:w-auto md:h-full md:mx-auto object-cover object-[35%]'
                src="/troy-2.png" alt="" />
                <motion.p
                 initial={{x: 250}}
                 whileInView={{ x: 0}}
                 transition={{duration: 0.5}}
                 viewport={{ once: true }}
                >
                Lucky 13 Rescue is an organization dedicated to the rescue and aid of homeless and neglected dogs in the Kansas City metro and surrounding rural areas. We do not limit our efforts to a specific breed, but rather strive to assist any dog that is facing neglect, homelessness, abuse or death. Our ultimate goal is to rehabilitate each canine in our care through placement in loving fosters homes until they can be carefully matched with adoptive families.
                We are a foster based rescue as we do not have a facility to intake dogs on the spot.
                All of our rescue dogs are provided with medical attention and behavioral rehabilitation. 
                They will be adopted into their forever home spayed/neutered, fully vaccinated, microchipped, 
                and heartworm negative.
                We are always looking for fosters and volunteers who love dogs! We have needs in online 
                management, transportation, vet scheduler, fundraising and event help, and fostering.
                If you cannot volunteer, please consider donating to our organization. Your donation is 
                tax deductible.
                Tax ID 81-3473567.
                </motion.p>
            </div>
        </Layout>
    )
}