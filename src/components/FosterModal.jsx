export default function FosterModal(){
    return(
        <section className='text-white'>
            <dialog id="my_modal_foster" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-blue h-fit w-full flex flex-col gap-4">
                <h3 className="font-bold text-lg">Foster Application</h3>
                <form className='flex flex-col gap-4 w-full p-5'>
                    <input required placeholder='Full Name' className='bg-white text-black p-2 rounded-md' type="text" />
                    <input required placeholder='Email' className='bg-white text-black p-2 rounded-md' type="email" />
                    <input required placeholder='Postal Code' className='bg-white text-black p-2 rounded-md' type="text" />
                    <input required placeholder='Phone Number' className='bg-white text-black p-2 rounded-md' type="tel" />
                    <textarea rows={7} placeholder='Tell us about you, your home, family, and preferences' className='bg-white text-black p-2 rounded-md' />
                    <button type='submit'>Submit</button>
                </form>
                <div className="modal-action justify-start w-full">
                <form method="dialog w-full flex flex-col gap-4">
                    <button className="text-white">Close</button>
                </form>
                </div>
            </div>
            </dialog>
        </section>
    )
}