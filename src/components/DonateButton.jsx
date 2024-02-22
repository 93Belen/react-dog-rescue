import { Link } from "react-router-dom";

export default function DonateButton(props){
    const paypal = props.paypal

    if(paypal){
        return (
            <Link target="_blank" to='https://www.paypal.com/paypalme/lucky13rescue' className='bg-yellow rounded-2xl hover:bg-darkyellow duration-1000 font-[200] w-[9.93rem] flex justify-center items-center h-[2.31rem] text-black text-[1.25rem]' >
            Donate
            </Link>
        )
    } else {
        return (
            <div onClick={()=>document.getElementById('my_modal_donation').showModal()} className='bg-yellow hover:bg-darkyellow duration-1000 rounded-2xl font-[200] w-[9.93rem] flex justify-center items-center h-[2.31rem] text-black text-[1.25rem]'>
                Donate
            </div>
        )
    }
}