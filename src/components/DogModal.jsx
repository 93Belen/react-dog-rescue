export default function DogModal(props){
    const dog = props.dog
    return(
        <section className='text-white'>
        <dialog id="my_modal_dog" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-blue h-fit w-full flex flex-col gap-4">
            <h3 className="font-bold text-lg">{dog}</h3>
            <div className="carousel w-full">
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