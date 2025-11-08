import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { recipecontext } from "../context/RecipeContext"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

const SingleRecipe = () => {

  const { data, setdata } = useContext(recipecontext)
  const navigate = useNavigate()
  const params = useParams()
  // console.log(data,params.id);

  // const recipe = data.find((r)=> params.id === r.id);
  const cleanId = params.id.replace(":", "")

  const recipe = data.find((r) => r.id === cleanId)
  // data?.find((r)=>r.id === cleanId) extra added '?' if data was missing, it doesn't try  to fecth but it simply returns undefined 
  // console.log(recipe)

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe?.title,
      // title:recipe?.title, ==> edar title haitho dekhav varna chod dho (if else type) error aytho use karsakthye hai
      chef: recipe?.chef,
      image: recipe?.image,
      desc: recipe?.desc,
      inst: recipe?.inst,
      ingre: recipe?.ingre,
      cate: recipe?.cate,
      cuisine: recipe?.cuisine
    }
  })

  const updateHandler = (recipe) => {
    const cleanId = params.id.replace(":", "")
    const index = data.findIndex((r) => r.id == cleanId)
    // console.log(index);

    const copydata = [...data]
    copydata[index] = { ...copydata[index], ...recipe }
    setdata(copydata)
    toast.success("Recipe updated successfully!")
    // navigate("/recipe")

    localStorage.setItem("recipe", JSON.stringify(copydata))
  }

  const DeleteHandler = () => {
    const cleanId = params.id.replace(":", "")
    const filteredData = data.filter((r) => r.id != cleanId)
    setdata(filteredData)
    toast.success("Recipe Deleted successfully!")
    navigate("/recipe")

    localStorage.setItem("recipe", JSON.stringify(filteredData))

    const filterfav = favorite.filter((f) => f?.id != cleanId)
    setfavorite(filterfav)
   
    localStorage.setItem("fav", JSON.stringify(filterfav))
  }

  // useEffect( () => {
  //       console.log("SingleRecipe Mounted")
  //       return () => {
  //       console.log("SingleRecipe Unmounted")
  //       }  
  //     }, [])

  const [favorite, setfavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  )

  const favHandler = () => {
    const copyfav = [...favorite]
    copyfav.push(recipe)
    setfavorite(copyfav)

    localStorage.setItem("fav", JSON.stringify(copyfav))
  }

  const unfavHandler = () => {
    const filterfav = favorite.filter((f) => f?.id != cleanId)
    setfavorite(filterfav)
    localStorage.setItem("fav", JSON.stringify(filterfav))

  }

  // console.log(favorite);


  return (recipe ?
    <div className=" w-full h-auto bg-gray-800 p-10 flex gap-50">
      <div className="relative right w-[50%]">
        {favorite.find((f) => f?.id == cleanId) ? <i onClick={unfavHandler} className="absolute right-[5%] text-4xl top-1 text-red-400 ri-heart-fill"></i> : <i onClick={favHandler} className="absolute right-[5%] text-4xl top-1 text-red-400 ri-heart-line"></i>}

        <h1 className="text-5xl font-bold uppercase mb-6">{recipe.title}</h1>
        <div className="flex gap-10">
          <div>
            <img className="w-[250px] pl-4 mb-6" src={recipe.image} alt="Not found!" />
          </div>
          <div>
            <h3 className="text-xl font-bold  mb-2">Chef Name : <span className="font-thin">{recipe.chef}</span></h3>
            <h3 className="text-xl font-bold  mb-2">Cuisine : <span className="font-thin">{recipe.cuisine}</span></h3>
            <h3 className="text-xl font-bold  mb-2">Reviews : <span className="font-thin">{recipe.reviews}</span></h3>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Ingredients:</h3>
        <p className="text-start text-[18px] font-thin pl-4 mb-6">{recipe.ingre}</p>
        <h3 className="text-xl font-bold mb-2">Instructions:</h3>
        <p className="text-start text-[18px] font-thin pl-4 mb-6">{recipe.inst}</p>

      </div>
      <div className="left w-[50%]">
        <form onSubmit={handleSubmit(updateHandler)}>
          <input className="block mb-3 text-xl border-b w-full outline-0 p-2" {...register("image")} type="url" placeholder="Enter image URL" />
          <input className="block mb-3 text-xl border-b w-full outline-0 p-2" {...register("title")} type="text" placeholder="Recipe-Title" />
          <input className="block mb-3 text-xl border-b w-full outline-0 p-2" {...register("chef")} type="text" placeholder="Name of the Chef" />
          <input className="block mb-3 text-xl border-b w-100 w-full outline-0 p-2" {...register("cuisine")} type="text" placeholder="Cuisine" />
          <textarea className="block mb-3 text-xl border-b w-full outline-0 p-2" {...register("desc")} placeholder="// start writing"></textarea>
          <textarea className="block mb-3 text-xl border-b w-full outline-0 p-2" {...register("ingre")} placeholder="// enter ingredients separated by comma"></textarea>
          <textarea className="block mb-3 text-xl border-b w-full outline-0 p-2" {...register("inst")} placeholder="// enter instructions separated by comma"></textarea>
          <select className="block mb-3 text-xl outline-0 bg-gray-800 text-white" {...register("cate")} >
            <option value="breakfast">Break Fast</option>
            <option value="lunch">Lunch</option>
            <option value="Supper">Supper</option>
            <option value="Dinner">Dinner</option>
          </select>
          <button className="btn_sv text-xl bg-white/10 py-2 px-4 rounded mr-65">Update Recipe</button>
          <button onClick={DeleteHandler} className="btn_sv text-xl bg-white/10 py-2 px-4 rounded">Delete Recipe</button>
        </form>
      </div>
    </div>
    : "Loading")
}

export default SingleRecipe

