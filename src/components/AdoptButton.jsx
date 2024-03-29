import { Link } from "react-router-dom"

export default function AdoptButton(){
    return (
        <Link onClick={()=>document.getElementById('my_modal_adoption').showModal()} className='bg-blue rounded-2xl w-[9.93rem] font-[200] flex justify-center items-center h-[2.31rem] text-white text-[1.25rem] hover:bg-lightblue duration-1000'>
            Adopt
        </Link>
    )
}