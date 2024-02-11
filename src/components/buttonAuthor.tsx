import { Link } from "react-router-dom";

import { FaLongArrowAltRight } from "react-icons/fa";

export default function ButtonAuthor({ author }: { author: string }) {
  const quoteAuthorPath = author
    ? author.toLowerCase().split(" ").join("-")
    : "";
  return (
    <div className="flex items-center justify-between w-full p-10 transition-all duration-300 hover:bg-gray-51 md:ml-10 hover:text-white ">
      <span className="block text-xl font-bold">{author}</span>
    </div>
  );
}
