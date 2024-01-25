import Layout from "../Layout";
import { motion } from "framer-motion";


export default function Qualifications(){
    return (
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
                <section className='xl:px-32 w-full p-4 md:p-12 h-fit text-black flex flex-col gap-6 pb-20'>
                    <h3 className='text-[2rem]'>Frequanly Asked Questions</h3>
                    <section className='collapse h-fit w-full collapse-arrow border-2 border-black rounded-[0px] px-4'>
                        <input type='checkbox'/>
                        <div className="collapse-title font-[700]">
                        What are your adoption fees?
                        </div>
                        <div className="collapse-content flex flex-col gap-6 text-[1rem] font-[300]"> 
                        <p>Our adoption fees vary per animal and are listed on the profile for each animal. 
                            Please just click on their picture/bio for more information.</p>
                        </div>
                    </section>
                    <section className='collapse h-fit w-full collapse-arrow border-2 border-black rounded-[0px] px-4'>
                        <input type='checkbox'/>
                        <div className="collapse-title font-[700]">
                        Where are you located? 
                        </div>
                        <div className="collapse-content flex flex-col gap-6 text-[1rem] font-[300]"> 
                        <p>Lucky 13 Rescue does not have a physical location.  All of our dogs live 
                            in loving foster homes throughout the Kansas City area. This allows fosters to 
                            get to know each dog personally, 
                            so we can find the very best home for them.</p>
                        </div>
                    </section>
                    <section className='collapse h-fit w-full collapse-arrow border-2 border-black rounded-[0px] px-4'>
                        <input type='checkbox'/>
                        <div className="collapse-title font-[700]">
                        What are your hours?
                        </div>
                        <div className="collapse-content flex flex-col gap-6 text-[1rem] font-[300]"> 
                        <p>As a foster based rescue, every person with Lucky 13 Rescue is a volunteer. 
                            Because we do not have a facility, we do not have “open” hours but can be 
                            contacted between 8am and 9pm. Because our volunteers also work full time jobs, 
                            please be patient when awaiting a return call. </p>
                        </div>
                    </section>
                    <section className='collapse h-fit w-full collapse-arrow border-2 border-black rounded-[0px] px-4'>
                        <input type='checkbox'/>
                        <div className="collapse-title font-[700]">
                        What is the best way to reach Lucky 13 Rescue?
                        </div>
                        <div className="collapse-content flex flex-col gap-6 text-[1rem] font-[300]"> 
                        <p>The best way to reach us is to email at info@lucky13rescue.org or to Facebook Message us.  
                            While we do have a phone number, we rely on a volunteer to answer the phone at certain hours.  
                            Emails are answered quickly.  
                            You can contact our adoption coordinator at adoptions@lucky13rescue.org.</p>
                        </div>
                    </section>
                    <section className='collapse h-fit w-full collapse-arrow border-2 border-black rounded-[0px] px-4'>
                        <input type='checkbox'/>
                        <div className="collapse-title font-[700]">
                        Can I stop in to visit dogs and play with puppies?
                        </div>
                        <div className="collapse-content flex flex-col gap-6 text-[1rem] font-[300]"> 
                        <p>No. We require an approved application to be on file before meeting our dogs/puppies. 
                            In addition, our dogs live in foster homes, so we must work around the foster parents’ schedule.</p>
                        </div>
                    </section>
                    <section className='collapse h-fit w-full collapse-arrow border-2 border-black rounded-[0px] px-4'>
                        <input type='checkbox'/>
                        <div className="collapse-title font-[700]">
                        How do I apply to adopt?
                        </div>
                        <div className="collapse-content flex flex-col gap-6 text-[1rem] font-[300]"> 
                        <p>Apply with the online application found on the animal’s profile or go here.</p>
                        </div>
                    </section>
                    <section className='collapse h-fit w-full collapse-arrow border-2 border-black rounded-[0px] px-4'>
                        <input type='checkbox'/>
                        <div className="collapse-title font-[700]">
                        How long does the application process take?
                        </div>
                        <div className="collapse-content flex flex-col gap-6 text-[1rem] font-[300]"> 
                        <p>The time that approval takes can be dependent on how quickly we are able 
                            to confirm your landlord, veterinarian, and reference checks. Adoption 
                            time is also dependent upon everyone’s schedule for the introduction and 
                            home visit. Please keep in mind that we are a volunteer run organization 
                            so schedules can vary. If everything goes as it should, approval takes 
                            about 48 hours, and the time from application to adoption can all happen
                             within a week.</p>
                        </div>
                    </section>
                    <section className='collapse h-fit w-full collapse-arrow border-2 border-black rounded-[0px] px-4'>
                        <input type='checkbox'/>
                        <div className="collapse-title font-[700]">
                        How do I know if the dog that I want is available?
                        </div>
                        <div className="collapse-content flex flex-col gap-6 text-[1rem] font-[300]"> 
                        <p>Each dog is available unless “pending adoption” is listed on their photo/bio. 
                            We process applications in the order in which they were received, and schedule 
                            meet and greets accordingly. There is a possibility that the dog is not yet on 
                            hold but does have an application in front of yours. </p>
                        </div>
                    </section>
                    <section className='collapse h-fit w-full collapse-arrow border-2 border-black rounded-[0px] px-4'>
                        <input type='checkbox'/>
                        <div className="collapse-title font-[700]">
                        Can you hold a dog for me?
                        </div>
                        <div className="collapse-content flex flex-col gap-6 text-[1rem] font-[300]"> 
                        <p>We can only hold a dog/puppy for an adopter if they are not yet ready 
                            to be adopted. If the dog/puppy has been spayed or neutered and is 
                            ready to go home, we cannot hold them for more than 24 hours once you 
                            have met with them. As for puppies who are not ready to go to their 
                            forever homes just yet, they will be put on hold after a meet and greet 
                            until they are ready to go home.  We will require their adoption fee to 
                            be paid as a deposit. This fee is not refundable if you change your mind. 
                            We cannot hold them past this date. Please meet the puppy/dog as soon as possible. 
                            If you can't meet the dog/puppy for a week, it's possible that someone else may meet 
                            the them before you are able to.  We cannot hold a dog/puppy for you while waiting for you to meet them, 
                            when there are other interested parties.  After a meet and greet, please let us know 
                            within 24 hours if you would like to adopt the dog/puppy that you met.  
                            If you do not notify the foster, or email/call Lucky 13 Rescue within 24 hours 
                            of your meet and greet, we may move on to the next application.  
                            We will not notify you before moving on, as it is up to you to contact us within 24 hours. </p>
                        </div>
                    </section>
                    <section className='collapse h-fit w-full collapse-arrow border-2 border-black rounded-[0px] px-4'>
                        <input type='checkbox'/>
                        <div className="collapse-title font-[700]">
                        What is your process?
                        </div>
                        <div className="collapse-content flex flex-col gap-6 text-[1rem] font-[300]"> 
                        <p>Our first step in the process is to have you fill out an application. 
                            Please fill it out completely, as incomplete applications will NOT be 
                            processed. Lucky 13 Rescue is made up of an entirely volunteer "staff". 
                            We simply do not have the man power to track down missing answers. Once 
                            your application is approved, we will forward your information to the foster.
                             All of our fosters are volunteers who have families and jobs, so please 
                             allow 24 hours for the foster to contact you, after application approval. 
                             We do the majority of our communicating thru email, so please add to your 
                             "safe" list to ensure you get our emails and can respond in a timely manner. 
                             The foster will set up a time for you to come meet the dog/puppy that you are 
                             interested in.  If the foster attempts to contact you and leaves a message, 
                             please return their call within 24 hours. After that time, we may move on to the 
                             next applicant in line. Please plan to schedule this meeting within 48 hours of 
                             contact with the foster. If the meet and greet goes well, and the foster believes 
                             you are a good fit for the dog, the dog will be put on hold for you. We will then 
                             schedule a volunteer to contact you to schedule a home visit. You will then be notified 
                             of the date and time that you may pick up your new family member.</p>
                        </div>
                    </section>
                    <section className='collapse h-fit w-full collapse-arrow border-2 border-black rounded-[0px] px-4'>
                        <input type='checkbox'/>
                        <div className="collapse-title font-[700]">
                        Can the foster bring the dog to my home to meet me?
                        </div>
                        <div className="collapse-content flex flex-col gap-6 text-[1rem] font-[300]"> 
                        <p>For puppies, we require that the meet and greet take place at the fosters’ location. 
                            This is to protect the health of the puppies in our care. You are welcome to bring 
                            your fully vaccinated dog to the meet and greet. Meet and greets for adult dogs may 
                            be scheduled in a neutral location.</p>
                        </div>
                    </section>
                    <section className='collapse h-fit w-full collapse-arrow border-2 border-black rounded-[0px] px-4'>
                        <input type='checkbox'/>
                        <div className="collapse-title font-[700]">
                        Am I required to have a fenced yard?
                        </div>
                        <div className="collapse-content flex flex-col gap-6 text-[1rem] font-[300]"> 
                        <p>We do not require that you have a fence, we do require that you have a plan 
                            for how the dog will receive adequate exercise. Some dogs will require a fence, 
                            and we will give that information in their bio on the website.</p>
                        </div>
                    </section>
                    <section className='collapse h-fit w-full collapse-arrow border-2 border-black rounded-[0px] px-4'>
                        <input type='checkbox'/>
                        <div className="collapse-title font-[700]">
                        What is included in the adoption fee?
                        </div>
                        <div className="collapse-content flex flex-col gap-6 text-[1rem] font-[300]"> 
                        <p>All of our animals come up to date on age appropriate vaccines, 
                            which include: Canine Distemper, Adenovirus Type 1, Adenovirus Type 2 
                            (Respiratory Disease), Parainfluenza, and Parvovirus. If puppies are 
                            adopted at a young age, they will still require a puppy booster 
                            vaccination of which the adopting family will be responsible for.
                            Rabies is included for those over 4 months. Our dogs over 6 months of age are tested for heartworms 
                            and if negative, kept on heartworm prevention throughout their stay. (After adopters are asked to 
                            continue this very important prevention). If dogs test positive for heartworms, they are treated 
                            per our vet partners' recommendation. All dogs/puppies are kept on flea prevention for the length 
                            of their stay with us. Our dogs/puppies all come spayed or neutered and microchipped. NO animals 
                            will be sent home without being spayed or neutered, there are no exceptions to this policy. </p>
                        </div>
                    </section>
                    <section className='collapse h-fit w-full collapse-arrow border-2 border-black rounded-[0px] px-4'>
                        <input type='checkbox'/>
                        <div className="collapse-title font-[700]">
                        What is the dog/puppy I’m interested mixed with?
                        </div>
                        <div className="collapse-content flex flex-col gap-6 text-[1rem] font-[300]"> 
                        <p>In most cases, visual breed identification is unreliable, even by 
                            “trained” eyes. So, for the majority of the dogs/puppies, we are 
                            merely guessing, with our vets' assistance, at the predominant 
                            breed or a mix of breeds based on certain features. This is only 
                            a guess, and no guarantees are made as to the breed of the dog 
                            unless we have done a DNA test. If you live in a breed ban area, 
                            it is your responsibility to make sure the dog does not violate 
                            the requirement of your city. All of the information that we have 
                            is given to you. So, if a dog is listed as a Pointer mix, that means 
                            it’s features most resemble a Pointer, and we have no way of knowing 
                            for sure what else the dog may be mixed with. We strive to get to know 
                            each dog on a personal level, and describe them based on behavior and 
                            personality, rather than simply by breed. </p>
                        </div>
                    </section>
                    <section className='collapse h-fit w-full collapse-arrow border-2 border-black rounded-[0px] px-4'>
                        <input type='checkbox'/>
                        <div className="collapse-title font-[700]">
                        Where does my donation/adoption fee go? 
                        </div>
                        <div className="collapse-content flex flex-col gap-6 text-[1rem] font-[300]"> 
                        <p>We are completely foster based and run 100% by volunteer. 
                            Every hour spent running Lucky 13 Rescue is spent by a volunteer. 
                            This means we have no overhead and every dollar brought in goes directly 
                            back to the dogs in our care.  </p>
                        </div>
                    </section>
                </section>
            </div>
    )
}