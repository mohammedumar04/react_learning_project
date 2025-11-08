import { NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <div className="flex justify-center gap-10 text-[22px] ">
      <NavLink className={(e)=>e.isActive?"text-red-300":""} to='/'>Home</NavLink>
      <NavLink className={(e)=>e.isActive?"text-red-300":""} to='/recipe'>Recipe</NavLink>
      <NavLink className={(e)=>e.isActive?"text-red-300":""} to='/about'>About</NavLink>
      <NavLink className={(e)=>e.isActive?"text-red-300":""} to='/createrecipe'>Create Recipe</NavLink>
      <NavLink className={(e)=>e.isActive?"text-red-300":""} to='/fav'>Favorites</NavLink>
    </div>
  )
}

export default NavBar
