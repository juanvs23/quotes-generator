import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ButtonAuthor from "../components/buttonAuthor";
import Layout from "../components/layout";

import getRandomArbitrary from "../helpers/random";

import { Quotes } from "../interfaces/quotes";
import { motion } from "framer-motion";

export default function ShowQuotes() {
  let { author } = useParams();
  const getNames = author?.split("-");
  const capitalizeName = getNames?.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1)
  );
  const url = "https://dummyjson.com/quotes/random";
  const [data, setData] = useState<undefined | Quotes>();
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchQuotes = (url: string) => {
      fetch(url, {
        signal: controller.signal,
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((res: Quotes | undefined) => {
          console.log(res);
          setData(res);
          setLoading(false);
        })
        .catch((error) => setError(error));
    };
    fetchQuotes(url);
    return () => controller.abort();
  }, []);
  console.log(data, loading, error);

  return (
    <Layout title={`${author ? capitalizeName?.join(" ") : "Random Quotes"}`}>
      {data ? (
        <div className="mx-auto min-h-1/2">
          {author ? (
            <motion.h1
              initial={{
                opacity: 0,
              }}
              transition={{
                duration: 1,
                delay: 1.2,
              }}
              animate={{
                opacity: 1,
              }}
              className="pb-20 pl-10 text-3xl font-bold border-l-4 border-transparent md:pl-24 get-name md:text-4xl"
            >
              {data.quote}
            </motion.h1>
          ) : (
            <div className="pb-24"></div>
          )}

          <motion.p
            initial={{
              y: 150,
              opacity: 0,
            }}
            transition={{
              delay: 1,
              duration: 2,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            className="pl-10 mb-24 text-2xl font-bold border-l-4 qouteData md:text-4xl md:pl-24 border-yellow-F7DF94"
          >
            {data.quote}
          </motion.p>

          <ButtonAuthor author={data?.author || ""} />
        </div>
      ) : error !== null ? (
        <>Error</>
      ) : (
        <div className="flex items-center justify-center w-full min-h-1/2 ">
          <div className="w-[100px] rounded-full h-[100px] animate-spin border-8  border-x-white border-yellow-F7DF94"></div>
        </div>
      )}
    </Layout>
  );
}
