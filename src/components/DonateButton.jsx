import { Link } from "react-router-dom";

export default function DonateButton(){
    return (
        <div onClick={()=>document.getElementById('my_modal_donation').showModal()} className='bg-yellow rounded-2xl font-[200] w-[9.93rem] flex justify-center items-center h-[2.31rem] text-black text-[1.25rem]'>
            Donate
        </div>
    )
}