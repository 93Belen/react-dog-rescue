export default function Chip(prop){
    const text = prop.text;
    return (
        <div className='bg-lightblue rounded-[50px] py-[0.1rem] px-[1rem] text-[0.85rem] text-black border-4 border-blue'>
            {text}
        </div>
    )
}