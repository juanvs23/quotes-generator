import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ButtonAuthor from "../components/buttonAuthor";
import Layout from "../components/layout";

import getRandomArbitrary from "../helpers/random";

import { Quotes } from "../interfaces/quotes";



export default function ShowQuotes(){
    let {author} = useParams ();
    const getNames = author?.split('-')
    const capitalizeName= getNames?.map(name=>name.charAt(0).toUpperCase() + name.slice(1))
    const url= author? `https://quote-garden.herokuapp.com/api/v3/quotes?author=${capitalizeName?.join('%20')}`: `https://quote-garden.herokuapp.com/api/v3/quotes?limit=1&page=${getRandomArbitrary(1,72672)}`
    const [data,setData]=useState<undefined| [Quotes] >()
    const [error,setError]=useState<unknown>(null)
    const [loading,setLoading] = useState<boolean>(false)
  
    useEffect(()=>{
        const controller = new AbortController()
        setLoading(true)
      const fetchQuotes=(url:string)=>{
        
            fetch(url,{signal:controller.signal})
        .then(res=>{
            
            return res.json() 
        })
        .then(res=>{
            setData(res.data)
            setLoading(false)
        })
        .catch(error=>setError(error) )
       
      }
      fetchQuotes(url)
        return()=> controller.abort()
    },[])
    console.log(data,loading,error);
    return( <Layout title={`${author? capitalizeName?.join(' '):'Random Quotes'}`}  >
              {
                  data ?(
                   <div className="min-h-1/2  mx-auto">
                      {
                        author?(
                            <h1 className="border-l-4  pl-10 md:pl-24 border-transparent get-name text-3xl md:text-4xl font-bold pb-20">
                                {capitalizeName?.join(' ')}
                       </h1>
                        ):(
                            <div className="pb-24">


                            </div>
                        )
                      }
                      
                       
                    {
                        data.map((data)=>{
                          return (
                              <p key={data._id} className="qouteData text-2xl  md:text-4xl font-bold border-l-4 pl-10 md:pl-24 border-yellow-F7DF94 mb-24">
                                  {data.quoteText}
                              </p>
                          )
                        })
                    }
                   { data.length==1 && !author?( <ButtonAuthor quoteAuthor={data[0].quoteAuthor} quoteGenre={data[0].quoteGenre} />):null}
                   </div>
                  ) :(
                      error!==null
                  )?(
                     <>Error</> 
                  ):(
                    <div className="w-full flex min-h-1/2 items-center justify-center "><div className="w-[100px] rounded-full h-[100px] animate-spin border-8  border-x-white border-yellow-F7DF94"></div></div>
                  )
              }

            </Layout>)
}