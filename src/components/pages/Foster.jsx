import Layout from "../Layout";
import { motion } from "framer-motion";
import ApplyButton from "../ApplyButton";

export default function Foster(){
    return (
            <div className='w-full text-black'>
                <section className='text-white bg-gradient-to-b from-blue to-lightblue xl:px-32 w-full p-4 md:p-12 flex flex-col gap-6 md:grid grid-cols-[40%_60%]'>
                <h1 className='text-[2.5rem] h-fit'>Foster</h1>
                <motion.p
                 initial={{x: -250}}
                 whileInView={{ x: 0}}
                 transition={{duration: 0.5}}
                 viewport={{ once: true }}
                 className='col-start-1'
                >
                As a foster home based rescue, we are dependent upon local foster 
                homes providing temporary care for our homeless dogs. Join our Lucky 13 
                foster family and help dogs in need. All supplies and medical care provided - 
                you provide the love!
                What do pet foster families do?
                Foster families are very much like child foster parents, they care for a homeless
                pet as if he was their own until he is adopted. The foster family is able to learn
                about the pet’s personality, likes, and dislikes so that he can be better matched
                to the right forever home. We train you to screen potential adopters to determine
                if they are a suitable match for your foster pet. You will then get to experience the joy 
                of helping a homeless animal find a loving family of his own.
                Lucky 13 Rescue provides you with all of the needed supplies to care for your foster
                pet. This is food, treats, toys, kennel, bed and anything else needed. We also pay the 
                vet bills 100%! Any trip to the Vet must first be approved by Lucky 13 Rescue. 
                All we ask of you is to provide shelter, transportation to and from vet appointments 
                and meet and greets, training, and plenty of snuggles!
                </motion.p>
                <motion.img 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 0.3}}
                viewport={{ once: true }}
                className='w-full col-start-2 row-start-1 row-span-3 rounded-lg md:w-auto md:h-full md:mx-auto object-cover object-left'
                src="/troy-4.png" alt="" />
                </section>
                <section className='p-4 md:p-12 md:grid md:grid-cols-2 xl:gap-0 xl:grid-cols-[55%_30%] gap-12'>
                <motion.img 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 0.3}}
                viewport={{ once: true }}
                className='w-full col-start-1 hidden md:block rounded-lg md:w-auto md:h-full md:mx-auto object-cover object-left'
                src="/troy-3.png" alt="" />
                <motion.p
                 initial={{x: 250}}
                 whileInView={{ x: 0}}
                 transition={{duration: 0.5}}
                 viewport={{ once: true }}
                 className='flex flex-col gap-6'
                >
                How long will I have to foster?​
                We cannot predict how long a pet will remain in foster care. 
                Some pets are adopted within 24 hours of becoming available, 
                while others wait weeks or even months for a home. Lucky 13 Rescue 
                will never euthanize a pet for taking too long to find the perfect home. 
                If you cannot commit to this kind of unpredictable long-term care, you 
                might wish to help in other ways. We expect our adopters to never give 
                up on their pets, so we expect the same from our foster families.
                What is foster to adopt?
                If you are on the fence about adopting a new family member, f
                ostering is a great way to know for sure. Not only does it save a 
                homeless pet in need, but you can see if a new pet fits with your lifestyle.
                How do I become a pet foster?
                If you feel you can help in any way, please fill out the application below. 
                If you have specific questions about our foster program, please contact us 
                at foster@lucky13rescue.org.   
                <span><ApplyButton/></span>
                </motion.p>
                </section>
            </div>
    )
}