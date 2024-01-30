import Chip from "./Chip"

export default function DogModal(props){
    const dog = props.dog
    const sex = props.sex
    const age = props.age
    const breed = props.breed
    const size = props.size
    return(
        <section className='text-white'>
        <dialog id="my_modal_dog" className="modal">
        <div className="modal-box w-screen md:w-[70vw] max-w-[90vw] bg-black h-full flex flex-col justify-between md:p-12 ">
            <h3 className="font-bold text-[2rem]">{dog}</h3>
            <div className='mx-auto'>
            <div className="carousel w-auto md:w-[400px] m-auto max-h-[35vh]">
                <div id="item1" className="carousel-item w-full">
                    <img src="./troy.png" className="w-full" />
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <img src="./troy-4.png" className="w-full" />
                </div> 
                <div id="item3" className="carousel-item w-full">
                    <img src="./troy-2.png" className="w-full" />
                </div> 
                <div id="item4" className="carousel-item w-full">
                    <img src="./troy-3.png" className="w-full" />
                </div>
                </div> 
                <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn bg-white text-black btn-xs">1</a> 
                <a href="#item2" className="btn bg-white text-black btn-xs">2</a> 
                <a href="#item3" className="btn bg-white text-black btn-xs">3</a> 
                <a href="#item4" className="btn bg-white text-black btn-xs">4</a>
                </div>
            </div>
            
                <div className='flex justify-between md:w-[75%]'>
                    <Chip text={sex} />
                    <Chip text={size} />
                    <Chip text={breed} />
                    <Chip text={age} />
                </div>
                <div>
                    <p>
                    Meet Brie! Hi guys, I'm a super sweet and cuddly pittie. 
                    I came to Lucky 13 Rescue pretty sad after my Dad passed away, 
                    but this really nice foster family took me in and have been showing 
                    me the real good life. I love my kennel, I keep it clean and tidy.
                    I can be a little protective of my food, so I like to eat away 
                    from my foster siblings, but I LOVE to snuggle with them. 
                    I'm gentle and goofy and have a great personality. 
                    I have some foster siblings to play with and I love to wrestle. 
                    Do you think you would have a place in your heart and home for a girl like me?
                    Brie's estimated birthdate is 4/2/20.Brie's adoption fee has been sponsored
                    which means to adopt her fee is $0 with an approve application. 
                    Brie will come with all age-appropriate vaccines, HW prevention, 
                    microchip, and spay. Want to meet me?? Apply at
                    https://www.shelterluv.com/matchme/adopt/LUCK/Dog or
                    https://linktr.ee/lucky13rescue.
                    </p>
                </div>
                <div className="modal-action justify-start w-full">
                <form method="dialog w-full flex flex-col gap-4">
                    <button className="">Close</button>
                </form>
                </div>
        </div>
        </dialog>
    </section>
    )
}