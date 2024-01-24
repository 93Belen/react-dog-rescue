import DonateButton from "./DonateButton";
import DonateModal from "./DonateModal";

export default function DonationCard(props){
    const title = props.title;
    const text = props.text;
    const donateButton = props.donateButton;

    return (
        <section
        className={`${donateButton ? 'bg-blue' : 'bg-yellow'} justify-self-center h-[300px] min-h-fit md:w-[300px] md:h-[350px] w-[90%] rounded-xl border-black border-2`}>
            <DonateModal />
            <div className='bg-white h-[95%] text-center p-4 flex flex-col justify-around items-center'>
                <h3 className='text-[2rem]'>{title}</h3>
                <p className='max-w-[80%] mx-auto'>{text}</p>
                {donateButton && (
                    <DonateButton paypal={title === 'Paypal'} />
                )}                
            </div>
        </section>
    )
}