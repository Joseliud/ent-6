import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import { Map, Marker } from "pigeon-maps"
import OtherHotels from "../compontes/OtherHotels"
import FormServer from "../compontes/FormServer"
import { Link } from "react-router-dom"

const HotelPages = () => {

  const { id } = useParams()

  const url = `https://hotels-api.academlo.tech/hotels/${id}`
  const [ hotel, getHotel ] = useFetch(url)

  useEffect(() => {
    getHotel()
  }, [id])

  

  return (
    <div>
      <h2>{hotel?.name}</h2>
      <h3>RATING - {hotel?.rating}</h3>
      <div>
        <img src={hotel?.images[0].url} alt="" />
        { 
          hotel &&
        <Map height={200} defaultCenter={[+hotel?.lat, +hotel?.lon]} zoom={15} minZoom={10}>
          <Marker anchor={[+hotel?.lat, +hotel?.lon]} color="red" width={40}/>
          </Map>
        }        
      </div>
      <section>
        <h3>{hotel?.city.name}, {hotel?.city.country}</h3>
        <p>
          <i className='bx bx-map'></i>
          <span>{hotel?.address}</span>
        </p>
        <p>
          {hotel?.description}
        </p>
      </section>
      {
        localStorage.getItem('token')
        ? <FormServer  hotelId={hotel?.id}/>
        : <h4>If you want to make a reservation, please <Link to='/login'>Login</Link></h4>
      }
      <OtherHotels
        hotel={hotel}
        />
    </div>
  )
}

export default HotelPages