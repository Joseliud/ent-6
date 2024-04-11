import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/hotelcard.css'


const HotelCard = ({hotel}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/hotels/${hotel.id}`)
    }

  return (
    <article className='con-card'> 
        <header className='con-header'>
            <img src={hotel.images[0].url} alt='' />
        </header>
        <br />
        <section>
            <h3>{hotel.name}</h3>
            <p>{hotel.rating}</p>
            <span>{hotel.city.name}, {hotel.city.country}</span>
            <div>${hotel.price}</div>
        </section>
        <footer className='con-btn'>
            <button onClick={handleClick}>See more...</button>
        </footer>
    </article>
  )
}

export default HotelCard