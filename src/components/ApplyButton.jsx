import { Link } from "react-router-dom";

export default function ApplyButton(){
    return (
        <Link onClick={()=>document.getElementById('my_modal_foster').showModal()} className='bg-yellow rounded-2xl font-[200] w-[9.93rem] hover:bg-darkyellow transition-1000 flex justify-center items-center h-[2.31rem] text-black text-[1.25rem]'>
            Apply
        </Link>
    )
}