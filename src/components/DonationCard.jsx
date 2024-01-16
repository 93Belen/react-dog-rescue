import { motion } from "framer-motion";
import DonateButton from "./DonateButton";

export default function DonationCard(props){
    const title = props.title;
    const text = props.text;
    const donateButton = props.donateButton;

    return (
        <motion.section
        whileInView={{ rotate: [-5, 0] }}
        whileHover={{scale: 1.07}}
        initial={{ rotate: 0, scale: 1}}
        viewport={{ once: true }}
         className={`${donateButton ? 'bg-blue' : 'bg-yellow'} justify-self-center h-[300px] min-h-fit md:w-[300px] md:h-[350px] w-[90%] rounded-xl border-black border-2`}>
            <div className='bg-white h-[95%] text-center p-4 flex flex-col justify-around items-center'>
                <h3 className='text-[2rem]'>{title}</h3>
                <p className='max-w-[80%] mx-auto'>{text}</p>
                {donateButton && (
                    <DonateButton/>
                )}                
            </div>
        </motion.section>
    )
}