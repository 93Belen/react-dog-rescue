import Layout from "../Layout";
import EventCard from "../EventCard";

export default function Events(){
    return (
        <Layout>
             <div className='text-black'>
                <section className='xl:px-32 w-full p-4 md:p-12 py-12 pt-4 flex flex-col gap-6'>
                    <h1 className='text-[2rem] md:text-[2.5rem] h-fit'>Events</h1>
                </section>
                <section className='flex flex-col gap-6 justify-center w-full items-center xl:px-32 w-full p-4 md:p-12 py-12 pt-4'>
                    <EventCard title='Puppy Yoga with Yoga Patch' text='Come puppy pose with us and Lucky 13 Rescue! Add some playfulness to your practice while supporting a local canine organization. Class will be...' />
                    <EventCard title='Puppy Yoga with Yoga Patch' text='Come puppy pose with us and Lucky 13 Rescue! Add some playfulness to your practice while supporting a local canine organization. Class will be...' />
                    <EventCard title='Puppy Yoga with Yoga Patch' text='Come puppy pose with us and Lucky 13 Rescue! Add some playfulness to your practice while supporting a local canine organization. Class will be...' />
                    <EventCard title='Puppy Yoga with Yoga Patch' text='Come puppy pose with us and Lucky 13 Rescue! Add some playfulness to your practice while supporting a local canine organization. Class will be...' />
                    <EventCard title='Puppy Yoga with Yoga Patch' text='Come puppy pose with us and Lucky 13 Rescue! Add some playfulness to your practice while supporting a local canine organization. Class will be...' />
                </section>
            </div>
        </Layout>
    )
}