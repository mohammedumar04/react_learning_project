import { Routes,Route } from "react-router-dom"
import Home from '../pages/Home'
import About from "../pages/About"
import Recipe from "../pages/Recipe"
import CreateRecipe from "../pages/CreateRecipe"
import SingleRecipe from "../pages/SingleRecipe"
import PageNotFound from "../pages/PageNotFound"
import Favorites from "../pages/Favorites"

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipe" element={<Recipe/>}/>
        <Route path="/recipe/details/:id" element={<SingleRecipe/>}/>
        <Route path="/createrecipe" element={<CreateRecipe/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/fav" element={<Favorites/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default MainRoutes
