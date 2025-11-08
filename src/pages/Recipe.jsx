import { useContext } from "react"

import RecipeCard from "../components/RecipeCard"
import { recipecontext } from "../context/RecipeContext"


const Recipe = () => {
  const { data } = useContext(recipecontext)

  // console.log(data);
  

  const renderRecipes = data.map((recipe)=>{
    return <RecipeCard key={recipe.id} recipe={recipe} />
  })
  
  return (
    <div className=" p-12 pt-20 flex flex-wrap justify-start gap-x-[40px] gap-y-[52px]">
      {data.length > 0 ? renderRecipes : "No Data Found"}
    </div>
  )
}

export default Recipe