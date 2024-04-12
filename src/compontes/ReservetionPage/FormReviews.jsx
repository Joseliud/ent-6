import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"

const FormReviews = ({ reserverSelected, setreserverSelected }) => {

    console.log(reserverSelected)

    const {handleSubmit, reset, register} = useForm()

    const [,, createReview ] = useCrud()

    const submit = data => {
        const url = `https://hotels-api.academlo.tech/reviews`
        data.hotelId = reserverSelected?.hotel.id
        data.rating = +data.rating
        createReview(url, data)
        setreserverSelected()
    }

  return (
    <article>
      <h3>Reserve</h3>
      <section>
        <header>
          <img src={reserverSelected?.hotel.images[0].url} alt="" />
        </header>
        <h4>{reserverSelected?.hotel.name}</h4>
        <p>
          {reserverSelected?.hotel.city.name},{" "}
          {reserverSelected?.hotel.city.country}
        </p>
        <ul>
          <li>
            <span>Reservation Days</span>
            <span>{reserverSelected?.reservationsDays}</span>
          </li>
          <li>
            <span>subtotal Price</span>
            <span>{reserverSelected?.subtotal}</span>
          </li>
        </ul>
      </section>

      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Rating</span>
          <select {...register('rating')}>
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>
        </label>
        <label>
          <span>Comments</span>
          <textarea {...register('comment')}/>
        </label>
        <button>Submit</button>
      </form>
    </article>
  )
}

export default FormReviews