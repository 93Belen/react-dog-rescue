export default function DogModal(props){
    const dog = props.dog
    return(
        <section className='text-white'>
        <dialog id="my_modal_dog" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-blue h-fit w-full flex flex-col gap-4">
            <h3 className="font-bold text-lg">{dog}</h3>
            <form className='flex flex-col gap-4 w-full p-5'>
                <input required placeholder='Full Name' className='bg-white text-black p-2 rounded-md' type="text" />
                <input required placeholder='Email' className='bg-white text-black p-2 rounded-md' type="email" />
                <select required placeholder='Dog' className='bg-white text-black p-2 rounded-md appearance-none' >
                <option value="option 1">option 1</option>
                <option value="option 1">option 2</option>
                <option value="option 1">option 3</option>
                <option value="option 1">option 4</option>
                </select>
                <input required placeholder='Street Address' className='bg-white text-black p-2 rounded-md' type="text" />
                <input required placeholder='City' className='bg-white text-black p-2 rounded-md' type="text" />
                <input required placeholder='Postal Code' className='bg-white text-black p-2 rounded-md' type="text" />
                <input required placeholder='Phone Number 1' className='bg-white text-black p-2 rounded-md' type="tel" />
                <input placeholder='Phone Number 2' className='bg-white text-black p-2 rounded-md' type="tel" />
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