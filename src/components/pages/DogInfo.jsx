import Chip from "../Chip"
import { motion } from "framer-motion"

export default function DogInfo(props){
    const dog = props.dog
    const sex = props.sex
    const age = props.age
    const breed = props.breed
    const size = props.size
    return(
        <section className='text-black w-full h-fit'>
            <section className='px-6 py-12 flex flex-col gap-6 md:gap-12'>
            <h3 className="font-bold text-[2rem]">{'Dog\'s name'}</h3>
            <div className='mx-auto'>
            <div className="carousel w-auto md:w-[400px] m-auto max-h-[35vh]">
                <div id="item1" className="carousel-item w-full">
                    <img src="./troy.png" className="w-full" />
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <img src="./troy-4.png" className="w-full" />
                </div> 
                <div id="item3" className="carousel-item w-full">
                    <img src="./troy-2.png" className="w-full" />
                </div> 
                <div id="item4" className="carousel-item w-full">
                    <img src="./troy-3.png" className="w-full" />
                </div>
                </div> 
                <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn bg-white text-black btn-xs">1</a> 
                <a href="#item2" className="btn bg-white text-black btn-xs">2</a> 
                <a href="#item3" className="btn bg-white text-black btn-xs">3</a> 
                <a href="#item4" className="btn bg-white text-black btn-xs">4</a>
                </div>
            </div>
            
                <div className='flex justify-between md:w-[65%]'>
                    <Chip text={'Female'} />
                    <Chip text={'Big'} />
                    <Chip text={'Pit Mix'} />
                    <Chip text={'Young'} />
                </div>
                <div>
                    <p>
                    Meet Brie! Hi guys, I'm a super sweet and cuddly pittie. 
                    I came to Lucky 13 Rescue pretty sad after my Dad passed away, 
                    but this really nice foster family took me in and have been showing 
                    me the real good life. I love my kennel, I keep it clean and tidy.
                    I can be a little protective of my food, so I like to eat away 
                    from my foster siblings, but I LOVE to snuggle with them. 
                    I'm gentle and goofy and have a great personality. 
                    I have some foster siblings to play with and I love to wrestle. 
                    Do you think you would have a place in your heart and home for a girl like me?
                    Brie's estimated birthdate is 4/2/20.Brie's adoption fee has been sponsored
                    which means to adopt her fee is $0 with an approve application. 
                    Brie will come with all age-appropriate vaccines, HW prevention, 
                    microchip, and spay. Want to meet me?? Apply at
                    https://www.shelterluv.com/matchme/adopt/LUCK/Dog or
                    https://linktr.ee/lucky13rescue.
                    </p>
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