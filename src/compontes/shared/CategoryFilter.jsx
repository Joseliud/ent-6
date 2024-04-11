import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { getHotelsTunk } from "../../store/states/hotels.slice"
import { useDispatch } from "react-redux"

const CategoryFilter = () => {

    const url = `https://hotels-api.academlo.tech/cities`
    const [ cities, getCities] = useFetch(url)

    useEffect(() => {
        getCities()
    }, [])

    console.log({cities})

    const dispatch = useDispatch()

    const handleFilterCity = (id) => {
        let url
        if (id) {
            url =  `https://hotels-api.academlo.tech/hotels?cityId=${id}`
        } else {
            url = `https://hotels-api.academlo.tech/hotels`
        }
        dispatch(getHotelsTunk(url))
    }

  return (
<section>
    <h3>City</h3>
    <ul>
        <li onClick={() => handleFilterCity()}>All Cities</li>
        {
            cities?.map((city) => ( 
                <li onClick={() => handleFilterCity(city.id)} key={city.id}>{city.name}</li>
                ))
        }
    </ul>
</section> 
 )
}

export default CategoryFilter