
const UserLogged = ({ setUser, user}) => {

   const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser()
   }

  return (
   <article>
    <header>
    <img 
    src={
        user.grender === 'female'
        ? '/user-female-icon'
        : '/user-male-icon'
    }
    alt="" 
    />
    </header>
    <h2>
        {user.firsName} {user.lastName}
    </h2>
    <button onClick={handleLogout}>Logout</button>
   </article>
  )
}

export default UserLogged