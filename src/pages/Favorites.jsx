import RecipeCard from "../components/RecipeCard"

const Favorites = () => {
  const favorite = JSON.parse(localStorage.getItem("fav")) || []
  

  const renderRecipes = favorite.map((recipe)=>{
    return <RecipeCard key={recipe.id} recipe={recipe} />
  })
  
  return (
    <div>
      <div className=" p-12 pt-20 flex flex-wrap justify-start gap-x-[40px] gap-y-[52px]">
        {favorite.length > 0 ? renderRecipes : "No Favorites Found"}
      </div>
    </div>
  )
}

export default Favorites
