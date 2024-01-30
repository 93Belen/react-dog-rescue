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
        <div className="modal-box w-screen md:w-[70vw] max-w-[90vw] bg-blue h-fit flex flex-col gap-4">
            <h3 className="font-bold text-lg">{dog}</h3>
            <div className="carousel w-full md:w-[400px] m-auto">
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
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
                <a href="#item3" className="btn btn-xs">3</a> 
                <a href="#item4" className="btn btn-xs">4</a>
                </div>
                <div className='flex justify-around md:w-[50%]'>
                    <Chip text={sex} />
                    <Chip text={size} />
                    <Chip text={breed} />
                    <Chip text={age} />
                </div>
                <div>
                    
                </div>
                <div className="modal-action justify-start w-full">
                <form method="dialog w-full flex flex-col gap-4">
                    <button className="text-white">Close</button>
                </form>
                </div>
        </div>
        </dialog>
    </section>
    )
}