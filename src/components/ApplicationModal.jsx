export default function ApplicationModal(props){
    const dog = props.dog;
    return(
        <section className='text-white'>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-blue h-fit w-full flex flex-col gap-4">
                <h3 className="font-bold text-lg">Adopt {dog}</h3>
                <div className='flex flex-col gap-4 w-full'>
                    <input placeholder='Full Name' className='bg-white text-black' type="text" />
                    <input placeholder='Email' className='bg-white text-black' type="text" />
                    <select placeholder='Dog' className='bg-white text-black' type="text" >
                    <option selected >{dog}</option>
                    <option value="option 1">option 1</option>
                    <option value="option 1">option 2</option>
                    <option value="option 1">option 3</option>
                    <option value="option 1">option 4</option>
                    </select>
                    <input placeholder='Street Address' className='bg-white text-black' type="text" />
                    <input placeholder='City' className='bg-white text-black' type="text" />
                    <input placeholder='Postal Code' className='bg-white text-black' type="text" />
                    <input placeholder='Phone Number 1' className='bg-white text-black' type="text" />
                    <input placeholder='Phone Number 2' className='bg-white text-black' type="text" />
                </div>
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