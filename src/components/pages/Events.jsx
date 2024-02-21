import EventCard from "../EventCard";
import { eventsInfo } from "../EventsInfo/EventsInfo";

export default function Events(){
    return (
             <div className='text-black'>
                <section className='xl:px-32 w-full p-4 md:p-12 py-12 pt-4 flex flex-col gap-6'>
                    <h1 className='text-[2rem] md:text-[2.5rem] h-fit'>Events</h1>
                </section>
                <section className='flex flex-col gap-6 justify-center w-full items-center xl:px-32 w-full p-4 md:p-12 py-12 pt-4'>
                    {
                        eventsInfo.map(event => {
                            return <EventCard title={event.title} text={event.text} date={event.date} location={event.location} />
                        })
                    }
                </section>
            </div>
    )
}