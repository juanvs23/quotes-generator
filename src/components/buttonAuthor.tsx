import { Link } from "react-router-dom";
import { Author } from "../interfaces/quotes";
import { FaLongArrowAltRight } from "react-icons/fa";;

export default function ButtonAuthor({quoteAuthor,quoteGenre}:Author ){
    const quoteAuthorPath =quoteAuthor? quoteAuthor.toLowerCase().split(' ').join('-'):''
    return( <Link className="justify-between items-center flex w-full hover:bg-gray-51 p-10 transition-all duration-300 md:ml-10 hover:text-white " to={`author/${quoteAuthorPath}`}>
            <div>
               <span className="block font-bold text-xl">
                {quoteAuthor}
                
                </span> 
                <small className=" text-lg">
                {quoteGenre}

                </small>
            </div>
                <FaLongArrowAltRight color="white" size="2rem" />
        </Link>)
}