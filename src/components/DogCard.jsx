import AdoptButton from "./AdoptButton";
import Chip from "./Chip";
import ApplicationModal from "./ApplicationModal";

export default function DogCard(props){
    const sex = props.sex;
    const age = props.age;
    const breed = props.breed;
    const size = props.size;
    const attributes = props.attributes

    return (
        <section className='bg-yellow h-[350px] min-h-fit w-full border-2 m-auto max-w-[550px] border-black rounded-xl flex justify-center'>
            <ApplicationModal dog='Dogs name' />
            <div className='bg-white h-[95%] w-full flex flex-col gap-4 justify-between p-4 md:flex-row'>
                <img className='w-full rounded-lg object-cover object-[top_left] md:w-[120%]' src="/troy.png" alt="" />
                <div className='w-full flex justify-between md:flex-col min-h-[40px]'>
                    <div className='flex flex-col gap-4'>
                    <h3 className='text-[1.3rem] h-fit'>Dog's Name</h3>
                    <div className='hidden md:flex flex-wrap flex-row gap-1'>
                        <Chip text={sex} />
                        <Chip text={size} />
                        <Chip text='Good with kids' />
                        <Chip text={breed} />
                        <Chip text={age} />
                        <Chip text='Special Needs' />
                    </div>
                    </div>
                    <AdoptButton />
                </div>
            </div>
        </section>
    )
}