import { motion } from "framer-motion"

export default function EventCard(props){
    const title = props.title;
    const text = props.text
    return (
        <motion.section
        whileInView={{ rotate: [-5, 0] }}
        whileHover={{scale: 1.07}}
        initial={{ rotate: 0, scale: 1}}
        viewport={{ once: true }}
         className={`bg-blue justify-self-center h-[300px] min-h-fit w-full md:h-[350px] w-[90%] rounded-xl border-black border-2`}>
            <div className='bg-white h-[95%] text-center p-4 flex flex-col justify-around items-center'>
                               
            </div>
        </motion.section>
    )
}