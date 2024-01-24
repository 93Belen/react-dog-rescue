export default function DonationModal(props){
    const typeDonation = props.typeDonation;
    return(
        <section className='text-white'>
            <dialog id="my_modal_donation" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-blue h-fit w-full flex flex-col gap-4">
                <h3 className="font-bold text-lg">{typeDonation}</h3>
                <form className='flex flex-col gap-4 w-full p-5'>
                    <input required placeholder='Full Name' className='bg-white text-black p-2 rounded-md' type="text" />
                    <input required placeholder='Email' className='bg-white text-black p-2 rounded-md' type="email" />
                    <select required placeholder='Dog' className='bg-white text-black p-2 rounded-md appearance-none' >
                    <option selected >{typeDonation}</option>
                    <option value="option 1">option 1</option>
                    <option value="option 1">option 2</option>
                    <option value="option 1">option 3</option>
                    <option value="option 1">option 4</option>
                    </select>
                    <input type="number" id="donationAmount" min={5} className='bg-white text-black p-2 rounded-md' name="donationAmount" step="0.01" placeholder="0.00" required/>
                    <input required placeholder='Street Address' className='bg-white text-black p-2 rounded-md' type="text" />
                    <input required placeholder='City' className='bg-white text-black p-2 rounded-md' type="text" />
                    <input required placeholder='Postal Code' className='bg-white text-black p-2 rounded-md' type="text" />
                    <input required placeholder='State' className='bg-white text-black p-2 rounded-md' type="text" />
                    <input id="ccn" type="tel" className='bg-white text-black p-2 rounded-md' inputmode="numeric" pattern="[0-9\s]{13,19}" 
                    autocomplete="cc-number" maxlength="19" 
                    placeholder="Card Number" required/>

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