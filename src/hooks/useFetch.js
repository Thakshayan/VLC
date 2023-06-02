import React,{ useFetch, useEffect} from 'react'


const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setDate] = useState(null);

    const headers = {
        Authorization: 'Bearer your_token',
    };

    useEffect(()=>{
        const fetchDate = async () => {
            try{
                setLoading(true)
                setDate(null)
                setError(null)

                const response = await fetch(url,{
                    headers:{
                        // ...headers,
                        'Content-Type': 'application/json',
                    }
                })

                if(!response.ok){
                    throw new Error("Network Failed")
                }

                const responseData = await response.json();
                setData(responseData)

            } catch(error) {
                setError(error.message || "something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchDate()

    },[url])

    return {loading, error, data};
}
 
export default useFetch;