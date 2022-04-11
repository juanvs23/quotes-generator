import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import ShowQuotes from "../components/showQuotes";
import { Quotes } from "../interfaces/quotes";

export default function AuthorQuotes(){
   return <ShowQuotes/>
}