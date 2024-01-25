import { Link } from "react-router-dom"

export default function ReadMoreButton(){
    return (
        <Link onClick={()=>document.getElementById('my_modal_dog').showModal()} className='bg-yellow hidden md:flex rounded-2xl w-[9.93rem] font-[200] justify-center items-center h-[2.31rem] text-black text-[1.25rem]'>
            Read More
        </Link>
    )
}