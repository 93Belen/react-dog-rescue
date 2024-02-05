import DonationCard from "../DonationCard";

export default function Donate(){
    return (
            <div className='text-black'>
                <section className='xl:px-32 w-full p-4 md:p-12 py-12 pt-4 flex flex-col gap-6'>
                    <h1 className='text-[2rem] md:text-[2.5rem] h-fit'>Donate</h1>
                    <p
                    className='col-start-1 max-w-[600px]'
                    >
                    Your generous gift will help us fund our mission to help those in need.
                    Together, we can make a difference.
                    </p>
                </section>
                <section className='flex flex-col gap-6 justify-center w-full items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 xl:px-32 w-full p-4 md:p-12 py-12 pt-4'>
                    <DonationCard title='Monthly contribution' text='Sign up for recurring monthly donations to help us continue our life-saving mission.' donateButton={true} />
                    <DonationCard title='Venmo' text='Donate via Venmo - @lucky13rescue' donateButton={false} />
                    <DonationCard title='Paypal' text='Donate via PayPal' donateButton={true} />
                    <DonationCard title='Text to Donate' text='Simply text “LUCK” to 89871 to donate today!' donateButton={false} />
                    <DonationCard title='Cash App' text='Donate via Cash App - $lucky13rescue' donateButton={false} />
                    <DonationCard title='Check/Cash' text='Donate via Cash App - $lucky13rescue' donateButton={false} />
                </section>
            </div>
    )
}