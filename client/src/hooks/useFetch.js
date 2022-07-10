import {useEffect, useState} from "react";
import axios from "axios";
//useFetch hook for fetching data from API server and return it to client side as a state variable  and also handle errors
const useFetch = (url) => {
    const [data, setData] = useState([])//data is an array of objects
    const [loading, setLoading] = useState(false)//loading is a boolean which is used to show loading spinner   or not
    const [error, setError] = useState(false)//error is a boolean which is used to show error message or not
 
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {

                const res = await axios.get(url) //get data from url
                setData(res.data)


            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }
        fetchData();
    }, [url]);

    const reFetch = async () => {
        setLoading(true)
        try {
            const res = await axios.get(url) //get data from url
            setData(res.data)


        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }
    return {data, loading, error, reFetch};
}



export default useFetch;