import { Link } from "react-router-dom"
import './styles/Principalheader.css'

const PrincipalHeader = () => {
  return (
   <header className="principal">
    <h1><Link to='/'>Hotels-App</Link></h1>
    <nav className="navegate">
        <ul>
           <li><Link to='/revervations'>Reservation</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    </nav>
   </header>
  )
}

export default PrincipalHeader