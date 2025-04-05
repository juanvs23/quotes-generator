import { MdOutlineSync } from "react-icons/md";

import { useRefreshContext } from "../context/refreshContext";
import { motion } from 'framer-motion';


export default function GetRandom() {
    const  {refresh , isRefreshing}  = useRefreshContext();

    const handleRefresh = () => {
        refresh();
    }
    
    return <div className="container flex justify-end mx-auto mb-12 text-2xl" >
            <button onClick={handleRefresh}  className="flex items-center gap-2 text-l text-gray-51">

               Random  <motion.div animate={{rotate: isRefreshing ? 360 : 0   }} transition={{duration:1}} ><MdOutlineSync /></motion.div>
            </button> 
        </div>
}