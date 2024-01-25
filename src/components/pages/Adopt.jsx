import DogCard from "../DogCard";
import Layout from "../Layout";

export default function Adopt(){
    return (
            <div className='text-black'>
                <section className='xl:px-32 w-full p-4 md:p-12 py-12 pt-4 flex flex-col gap-6'>
                    <h1 className='text-[2rem] md:text-[2.5rem] h-fit'>Adoptable Dogs</h1>
                </section>
                <div
                id="shop-mobile-nav"
                className="w-full px-4 md:px-12 flex box-content overflow-x-auto flex lg:justify-center no-scrollbar"
                >
                    <header className='flex justify-around w-fit h-fit max-w-[1400px] min-w-[1000px] pr-20 gap-4 md:gap-2 overflow-x-scroll no-scrollbar flex-nowrap'>
                    <details className="h-full w-[20rem]">
                        <summary className="bg-blue text-white rounded-3xl py-1 px-6 w-[100px] flex justify-center">Sex</summary>
                        <ul className="py-4 shadow text-[1rem] font-[300] w-fit bg-blue text-white mt-1 px-4 gap-2 flex flex-col justify-around w-full">
                        <li><div className='flex justify-between items-center'>
                            <label for="female">Female</label>
                            <input type="checkbox" id="female" name="female" />
                        </div></li>
                        <li><div className='flex justify-between items-center'>
                            <label for="male">Male</label>
                            <input type="checkbox" id="male" name="male" />
                        </div></li>
                        </ul>
                    </details> 
                    <details className="dropdown h-full w-[20rem]">
                        <summary className="bg-blue text-white rounded-3xl py-1 px-6 w-[100px] flex justify-center">Age</summary>
                        <ul className="py-4 shadow text-[1rem] font-[300] w-fit bg-blue text-white mt-1 px-4 gap-2 flex flex-col justify-around w-full">
                        <li><div className='flex justify-between items-center'>
                            <label for="puppy">Puppy</label>
                            <input type="checkbox" id="puppy" name="puppy" />
                        </div></li>
                        <li><div className='flex justify-between items-center'>
                            <label for="young">Young Adult</label>
                            <input type="checkbox" id="yound" name="young" />
                        </div></li>
                        <li><div className='flex justify-between items-center'>
                            <label for="adult">Adult</label>
                            <input type="checkbox" id="adult" name="adult" />
                        </div></li>
                        <li><div className='flex justify-between items-center'>
                            <label for="senior">Senior</label>
                            <input type="checkbox" id="senior" name="senior" />
                        </div></li>
                        </ul>
                    </details> 
                    <details className="dropdown h-full w-[20rem]">
                        <summary className="bg-blue text-white rounded-3xl py-1 px-6 w-[100px] flex justify-center">Breed</summary>
                        <ul className="py-4 shadow text-[1rem] font-[300] w-fit bg-blue text-white mt-1 px-4 gap-2 flex flex-col justify-around w-full">
                        <li><div className='flex justify-between items-center'>
                            <label for="female">Female</label>
                            <input type="checkbox" id="female" name="female" />
                        </div></li>
                        <li><div className='flex justify-between items-center'>
                            <label for="male">Male</label>
                            <input type="checkbox" id="male" name="male" />
                        </div></li>
                        </ul>
                    </details> 
                    <details className="dropdown h-full w-[20rem]">
                        <summary className="bg-blue text-white rounded-3xl py-1 px-6 w-[100px] flex justify-center">Size</summary>
                        <ul className="py-4 shadow text-[1rem] font-[300] w-fit bg-blue text-white mt-1 px-4 gap-2 flex flex-col justify-around w-full">
                        <li><div className='flex justify-between items-center'>
                            <label for="small">Small (1 - 19lb)</label>
                            <input type="checkbox" id="small" name="small" />
                        </div></li>
                        <li><div className='flex justify-between items-center'>
                            <label for="medium">Medium (20 - 59lb)</label>
                            <input type="checkbox" id="medium" name="medium" />
                        </div></li>
                        <li><div className='flex justify-between items-center'>
                            <label for="large">Large (60 - 99lb)</label>
                            <input type="checkbox" id="large" name="large" />
                        </div></li>
                        </ul>
                    </details> 
                    <details className="dropdown h-full w-[20rem]">
                        <summary className="bg-blue text-white rounded-3xl py-1 px-6 w-[100px] flex justify-center">Sort</summary>
                        <ul className="py-4 shadow text-[1rem] font-[300] w-fit bg-blue text-white mt-1 px-4 gap-2 flex flex-col justify-around w-full">
                        <li><div className='flex justify-between items-center'>
                            <label for="longest">Longest Stay</label>
                            <input type="checkbox" id="longest" name="longest" />
                        </div></li>
                        <li><div className='flex justify-between items-center'>
                            <label for="shortest">Shortest Stay</label>
                            <input type="checkbox" id="shortest" name="shortest" />
                        </div></li>
                        </ul>
                    </details> 
                    </header>
                </div>
                <section className='xl:px-32 w-full p-4 md:p-12 py-12 flex flex-col gap-6 lg:grid grid-cols-2 2xl:grid-cols-3'>
                    <DogCard sex='Female' size='Small' breed='Pit Bull Mix' age='Young' />
                    <DogCard sex='Male' size='Large' breed='Mix' age='Puppy' />
                    <DogCard sex='Male' size='Large' breed='Rottwailer' age='Senior' />
                    <DogCard sex='Female' size='Medium' breed='Chihuahua' age='Young' />
                    <DogCard sex='Male' size='Small' breed='Bulldog' age='Young' />
                    <DogCard sex='Female' size='Small' breed='Pit Bull Mix' age='Young' />
                    <DogCard sex='Male' size='Large' breed='Mix' age='Puppy' />
                    <DogCard sex='Male' size='Large' breed='Rottwailer' age='Senior' />
                    <DogCard sex='Female' size='Medium' breed='Chihuahua' age='Young' />
                    <DogCard sex='Male' size='Small' breed='Bulldog' age='Young' />
                </section>
            </div>
    )
}