import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
 const [response, setresponse] = useState()

 const getResponse = () => {
    axios.get(url)
    .then(res => setresponse(res.data))
    .catch(err => console.log(err))
 }   

    return  [response, getResponse] 
}

export default useFetch