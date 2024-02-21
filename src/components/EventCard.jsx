import { motion } from "framer-motion"

export default function EventCard(props){
    const title = props.title;
    const text = props.text
    const day = props.date.day;
    const month = props.date.month;
    const time = props.date.time;
    const location = props.location

    return (
        <motion.section
        whileInView={{ rotate: [-5, 0] }}
        whileHover={{scale: 1.07}}
        initial={{ rotate: 0, scale: 1}}
        viewport={{ once: true }}
         className={`bg-blue justify-self-center h-[450px] md:h-[300px] w-full w-[90%] rounded-xl border-black border-2`}>
            <div className='bg-white h-[95%] text-center p-4 grid grid-cols-[45%_55%] grid-rows-[35%_45%_20%] md:grid-cols-[15%_50%_35%] md:grid-rows-[40%_60%]'>
                <h3 className='flex flex-col justify-center items-center text-[2rem] border-r-8 border-yellow'><span>{day}</span>{month}</h3>
                <h4 className='flex items-center text-[1.3rem] text-left p-2 md:p-4'>{title}</h4>
                <p className='col-span-2 md:col-start-2 md:col-span-1 flex justify-center items-center text-left'>{text}</p>
                <div className='col-span-2 flex flex-col md:gap-4 justify-around md:col-start-3 md:justify-self-center md:justify-center'>
                    <p className='flex gap-2 text-left'><span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="25" viewBox="0 0 17 25" fill="none">
                    <ellipse cx="8.5" cy="7.8125" rx="8.5" ry="7.8125" fill="#F1EB98"/>
                    <path d="M7.72727 25C11.0467 19.2032 12.9078 15.9531 16.2273 10.1562H0.772743C3.48865 15.9531 5.01136 19.2032 7.72727 25Z" fill="#F1EB98"/>
                    </svg></span>{location}</p>
                    <p className='flex gap-2'><span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <circle cx="8.5" cy="8.5" r="7.5" stroke="#F1EB98" stroke-width="2"/>
                    <line x1="8.65997" y1="4.08008" x2="8.65997" y2="8.84008" stroke="#F1EB98"/>
                    <line x1="12.92" y1="9.33984" x2="8.15998" y2="9.33984" stroke="#F1EB98"/>
                    </svg></span>{time}</p>
                </div>
            </div>
        </motion.section>
    )
}