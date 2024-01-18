import AdoptButton from "./AdoptButton";

export default function DogCard(){
    return (
        <section className='bg-yellow h-[350px] min-h-fit w-full border-2 m-auto max-w-[500px] border-black rounded-xl flex justify-center'>
            <div className='bg-white h-[95%] w-full flex flex-col gap-4 justify-between p-4 md:flex-row'>
                <img className='w-full rounded-lg object-cover object-[top_left] md:w-[130%]' src="/troy.png" alt="" />
                <div className='w-full flex justify-between md:flex-col min-h-[40px]'>
                    <div>
                    <h3 className='text-[1.3rem] h-fit'>Dog's Name</h3>
                    </div>
                    <AdoptButton />
                </div>
            </div>
        </section>
    )
}