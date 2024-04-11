import { useSelector } from "react-redux"
import HotelCard from "../compontes/HotelCard"
import { useRef, useState } from "react"
import CategoryFilter from "../compontes/shared/CategoryFilter"
import PriceHotels from "../compontes/PriceHotels"
import './styles/Homepages.css'

const HomePages = () => {

   const [inputName, setinputName] = useState('')
   const [fromTo, setfromTo] = useState({
    from: 0,
    to: Infinity
   })

  const hotels = useSelector(states => states.hotels)

    const inputValue = useRef()

    const handleChange = () => {
      setinputName(input.current.value)
    }

    console.log(hotels)

    const cbfilter = hotelInfo => {
      const filterName = hotelInfo.name
      .toLowerCase()
      .includes(inputName.toLowerCase().trim())
      const price = Number(hotelInfo?.price)
      const filterPrice = price > fromTo.from && price <= fromTo.to
      return filterName && filterPrice
    }
  
  return (
    <div>
      <div >
        <input onChange={handleChange} value={inputName} ref={inputValue} type="text" />
      </div>
      <aside>
        <h3>Filters</h3>
        <PriceHotels 
          setfromTo={setfromTo}/>
        <CategoryFilter />
      </aside>
      <div  >
        {
          hotels?.filter(cbfilter).map(hotelInfo => (
            <HotelCard 
            key={hotelInfo.id}
            hotel={hotelInfo}
            />
          ) )
        }
      </div>
    </div>
  )
}

export default HomePages