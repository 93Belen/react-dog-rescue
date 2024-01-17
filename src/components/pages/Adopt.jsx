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
                className="md:w-full p-4 md:p-12 flex md:justify-center box-content overflow-x-auto box-content no-scrollbar"
                >
                    <header className='flex navbar justify-around w-fit md:w-full md:max-w-[1100px] min-w-[1000px] md:pl-20 overflow-x-scroll no-scrollbar flex-nowrap md:flex-wrap'>
                    <details className="dropdown h-[200px] w-[10rem]">
                        <summary className="bg-blue text-white rounded-3xl py-1 px-6 w-fit">Sex</summary>
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
                    <details className="dropdown h-[200px] w-[10rem]">
                        <summary className="bg-blue text-white rounded-3xl py-1 px-6 w-fit">Attributes</summary>
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
                    <details className="dropdown h-[200px] w-[10rem]">
                        <summary className="bg-blue text-white rounded-3xl py-1 px-6 w-fit">Age Group</summary>
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
                    <details className="dropdown h-[200px] w-[10rem]">
                        <summary className="bg-blue text-white rounded-3xl py-1 px-6 w-fit">Breed</summary>
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
                    <details className="dropdown h-[200px] w-[10rem]">
                        <summary className="bg-blue text-white rounded-3xl py-1 px-6 w-fit">Size</summary>
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
                    <details className="dropdown h-[200px] w-[10rem]">
                        <summary className="bg-blue text-white rounded-3xl py-1 px-6 w-fit">Sort</summary>
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
                    </header>
                </div>
            </div>
        </Layout>
    )
}