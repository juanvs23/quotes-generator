import { useEffect, useState } from "react";
import { useRefreshContext } from "../context/refreshContext";
import { Quotes } from "../interfaces/quotes";

export default function useFetchQuotes(url: string) {
    const {isRefreshing} = useRefreshContext();
    const [data, setData] = useState<undefined | Quotes>();
    const [error, setError] = useState<unknown>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(()=>{
        const controller = new AbortController();
        setLoading(true);
        if(isRefreshing === true){
            const fetchQuotes = (url: string) => {
                fetch(url, {
                    signal: controller.signal,
                    method: "GET",
                })
                    .then((res) => {
                        return res.json();
                    })
                    .then((res: Quotes | undefined) => {
                        setData(res);
                        setLoading(false);
                    })
                    .catch((error) => setError(error));
            };
            fetchQuotes(url);
        }
        return () => controller.abort();
    }, [isRefreshing])

    return { data , error,  isRefreshing };
}