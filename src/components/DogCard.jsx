import AdoptButton from "./AdoptButton";
import Chip from "./Chip";
import ApplicationModal from "./ApplicationModal";
import DogModal from "./DogModal";
import ReadMoreButton from "./ReadMoreButton";

export default function DogCard(props){
    const sex = props.sex;
    const age = props.age;
    const breed = props.breed;
    const size = props.size;

    return (
        <section className='bg-yellow h-[350px] min-h-fit w-full border-2 m-auto max-w-[550px] border-black rounded-xl flex justify-center'>
            <ApplicationModal dog='Dogs name' />
            <DogModal dog='Dogs name' />
            <div className='bg-white h-[95%] w-full flex flex-col gap-4 justify-between p-4 md:flex-row'>
                <img className='w-full rounded-lg object-cover object-[top_left] md:w-[120%]' src="/troy.png" alt="" />
                <div className='w-full flex justify-between md:flex-col min-h-[40px]'>
                    <div className='flex flex-col gap-4'>
                    <h3 onClick={()=>document.getElementById('my_modal_dog').showModal()} className='text-[1.3rem] h-fit cursor-pointer'>Dog's Name</h3>
                    <div className='hidden md:flex flex-wrap flex-row gap-1'>
                        <Chip text={sex} />
                        <Chip text={size} />
                        <Chip text={breed} />
                        <Chip text={age} />
                    </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <ReadMoreButton/>
                        <AdoptButton />
                    </div>     
                </div>
            </div>
        </section>
    )
}