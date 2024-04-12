import  axios  from "axios"
import { useState } from "react"
import getConfigToken from "../servers/getConfigToken"

const useCrud = () => {
  
    const [response, setresponse] = useState()

    const getApi = (url) => {  
        axios.get(url, getConfigToken())
        .then(res => setresponse(res.data))
        .catch(err => console.log(err))
    }

    const createApi = (url, data) => {
        axios.post(url, data, getConfigToken())
        .then(res => {
            console.log(res.data)
            setresponse(response ? [...response, res.data] : [res.data])
            })
        .catch(err => console.log(err))
    }

        const deleteApi = (url, id) => {
            axios.delete(url, getConfigToken())
            .then(res => {
                console.log(res.data)
                setresponse(response.filter(e => e.id !== id))
                })
            .catch(err => console.log(err))    
        }
      
      const udpatedApi = (url, data, id) => {
        axios.put(url, data, getConfigToken())
        .then(res => {
            console.log(res.data)
            setresponse(response.map(e => e.id === id ? res.data : e))
            })
        .catch(err => console.log(err)) 
      }  
    
  
    return [response, getApi, createApi, deleteApi, udpatedApi ]

}

export default useCrud