import Layout from "../Layout";

export default function Adopt(){
    return (
        <Layout>
            <div className='text-black'>
                <section className='xl:px-32 w-full p-4 md:p-12 py-12 pt-4 flex flex-col gap-6'>
                    <h1 className='text-[2rem] md:text-[2.5rem] h-fit'>Adoptable Dogs</h1>
                </section>
                <div
                id="shop-mobile-nav"
                className="md:w-full px-4 md:px-12 flex md:justify-center box-content overflow-x-auto no-scrollbar"
                >
                    <header className='flex navbar justify-around w-fit h-[250px] min-w-[1000px] md:pl-20 gap-4 overflow-x-scroll no-scrollbar flex-nowrap'>
                    <details className="dropdown h-full w-[20rem]">
                        <summary className="bg-blue text-white rounded-3xl py-1 px-6 w-[100px] flex justify-center">Sex</summary>
                        <ul className="py-4 shadow menu dropdown-content z-[1] text-[1rem] font-[300] w-[10rem] bg-blue text-white mt-1">
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
                        <summary className="bg-blue text-white rounded-3xl py-1 px-6 w-[100px] flex justify-center">Attributes</summary>
                        <ul className="py-4 shadow menu dropdown-content z-[1] text-[1rem] font-[300] w-[10rem] bg-blue text-white mt-1">
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
                        <ul className="py-4 shadow menu dropdown-content z-[1] text-[1rem] font-[300] w-[10rem] bg-blue text-white mt-1">
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
                        <ul className="py-4 shadow menu dropdown-content z-[1] text-[1rem] font-[300] w-[10rem] bg-blue text-white mt-1">
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
                        <ul className="py-4 shadow menu dropdown-content z-[1] text-[1rem] font-[300] w-[15rem] bg-blue text-white mt-1">
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
                        <ul className="py-4 shadow menu dropdown-content z-[1] text-[1rem] font-[300] w-[10rem] bg-blue text-white mt-1">
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
            </div>
        </Layout>
    )
}