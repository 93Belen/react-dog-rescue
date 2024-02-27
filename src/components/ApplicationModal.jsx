import { DogInfoArr } from "../DogInfo/DogInfoArr";

export default function ApplicationModal(props){
    const name = props.name;
    return(
        <section className='text-white'>
            <dialog id="my_modal_adoption" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-blue h-fit w-full flex flex-col gap-4">
                <h3 className="font-bold text-lg">Adoption Application</h3>
                <form className='flex flex-col gap-4 w-full p-5'>
                    <input required placeholder='Full Name' className='bg-white text-black p-2 rounded-md' type="text" />
                    <input required placeholder='Email' className='bg-white text-black p-2 rounded-md' type="email" />
                    <select required placeholder='Dog' className='bg-white text-black p-2 rounded-md appearance-none' >
                    <option selected >{name}</option>
                    {
                        DogInfoArr.map(dog => {
                            if(dog.name !== name){
                                return  <option value={dog.name}>{dog.name}</option>
                            }
                        })
                    }
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