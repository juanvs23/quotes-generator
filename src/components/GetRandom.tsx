import { MdOutlineSync } from "react-icons/md";
import { Link } from 'react-router-dom'
export default function GetRandom() {
    return <div className="container mx-auto flex justify-end  text-2xl mb-12" >
            <a className="text-l text-gray-51 flex gap-2 items-center" href="/">
               random <MdOutlineSync />
            </a> 
        </div>
}