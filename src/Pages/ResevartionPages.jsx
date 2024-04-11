import { useEffect } from 'react'
import useCrud from '../hooks/useCrud'
import ReverseCard from '../compontes/ReservetionPage/ReverseCard'
import FormReviews from '../compontes/ReservetionPage/FormReviews'

const ResevartionPages = () => {

  const [ booking, getBookings ] = useCrud()

  const [reserverSelected, setreserverSelected] = useState()

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/bookings`
    getBookings(url)
  }, [])

  console.log(booking)

  return (
    <section>
      <FormReviews 
        reserverSelected={reserverSelected}
      />
      <h2>Reservations</h2>
      <div>
        {
          booking?.map(reserve => {
            <ReverseCard 
              key={reserve.id}
              reserve={reserve}
              setreserverSelected={setreserverSelected}
            />
          })
        }
      </div>
    </section>
  )
}

export default ResevartionPages