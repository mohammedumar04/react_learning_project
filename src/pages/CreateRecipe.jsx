import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


const CreateRecipe = () => {
    const navigate = useNavigate()
    const {register,handleSubmit,reset} = useForm()
    const {data,setdata} = useContext(recipecontext)
    const SubmitHandler = (recipe)=>{
      recipe.id = nanoid()
      // console.log(recipe)
      
      // setdata([...data,recipe])

      let copydata = [...data]
      copydata.push(recipe)
      setdata(copydata)

      localStorage.setItem("recipe",JSON.stringify(copydata))
        
      toast.success("Recipe Added Successfully!")
      navigate('/recipe')

      reset()

    }

  return (
    <div className="p-6 pt-8 pl-15">
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <input className="block mb-3 text-xl border-b w-100 outline-0 p-2" {...register("image")} type="url" placeholder="Enter image URL" />
        <input className="block mb-3 text-xl border-b w-100 outline-0 p-2" {...register("title")} type="text" placeholder="Recipe-Title" />
        <input className="block mb-3 text-xl border-b w-100 outline-0 p-2" {...register("chef")} type="text" placeholder="Name of the Chef" />
        <input className="block mb-6 text-xl border-b w-100 outline-0 p-2" {...register("cuisine")} type="text" placeholder="Cuisine" />
        <textarea className="block mb-3 text-xl border-b w-100 outline-0 p-2" {...register("desc")} placeholder="// start writing"></textarea>
        <textarea className="block mb-3 text-xl border-b w-100 outline-0 p-2" {...register("ingre")} placeholder="// enter ingredients separated by comma"></textarea>
        <textarea className="block mb-3 text-xl border-b w-100 outline-0 p-2" {...register("inst")} placeholder="// enter instructions separated by comma"></textarea>
        <select className="block mb-3 text-xl outline-0 bg-gray-800 text-white" {...register("cate")} >
            <option value="breakfast">Break Fast</option>
            <option value="lunch">Lunch</option>
            <option value="Supper">Supper</option>
            <option value="Dinner">Dinner</option>
        </select>
        <button className="btn_sv text-xl w-100 bg-white/10 py-3 px-4 rounded">Save Recipe</button>
      </form>
    </div>
  )
}

export default CreateRecipe
