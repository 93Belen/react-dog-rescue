import AdoptButton from "./AdoptButton";
import Chip from "./Chip";
import ApplicationModal from "./ApplicationModal";
import DogModal from "./DogModal";
import ReadMoreButton from "./ReadMoreButton";
import { Link } from "react-router-dom";

export default function DogCard(props){
    const sex = props.sex;
    const age = props.age;
    const breed = props.breed;
    const size = props.size;
    const arrived = props.arrived

    // Define options for date formatting
        const options = { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit' 
        };

    return (
        <section className='bg-yellow h-[350px] min-h-fit w-full border-2 m-auto max-w-[550px] border-black rounded-xl flex justify-center'>
            <ApplicationModal dog='Dogs name' />
            {/* <DogModal sex={sex} size={size} breed={breed} age={age} dog='Dogs name' /> */}
            <div className='bg-white h-[95%] w-full flex flex-col gap-4 justify-between p-4 md:flex-row'>
                <img className='w-full rounded-lg object-cover object-[top_left] md:w-[120%]' src="/troy.png" alt="" />
                <div className='w-full flex justify-between md:flex-col min-h-[40px]'>
                    <div className='flex flex-col gap-4 md:justify-between'>
                    <Link to='/dog-info'><h3 className='text-[1.6rem] h-fit cursor-pointer'>Dog's Name</h3></Link>
                    <div className='hidden md:flex flex-wrap flex-row gap-1'>
                        <Chip text={sex} />
                        <Chip text={size} />
                        <Chip text={breed} />
                        <Chip text={age} />
                    </div>
                    <p className='text-[0.65rem] hidden md:block text-gray italic'>Arrived on {arrived.toLocaleDateString('en-US', options)}</p>
                    </div>
                    <div className='md:flex flex-col gap-4 hidden'>
                        <ReadMoreButton/>
                        <AdoptButton />
                    </div>     
                </div>
            </div>
        </section>
    )
}