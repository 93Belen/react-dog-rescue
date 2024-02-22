import { Link } from "react-router-dom"

export default function ReadMoreButton(props){
    const sex = props.sex;
    const age = props.age;
    const breed = props.breed;
    const size = props.size;
    const arrived = props.arrived
    const name = props.name
    return (
        <Link 
        to={{
            pathname: `/dog-info/${name}/${sex}/${breed}/${arrived}/${size}/${age}`,
            state: { 
                name: name,
                sex: sex,
                age: age,
                breed: breed,
                size: size,
                arrived: arrived
             }

        }}
        className='bg-yellow hidden md:flex hover:bg-darkyellow duration-1000 rounded-2xl w-[9.93rem] font-[200] justify-center items-center h-[2.31rem] text-black text-[1.25rem]'>
            Read More
        </Link>
    )
}