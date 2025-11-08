import { Link } from "react-router-dom";

const RecipeCard = (props) => {

    const {id,image,title,chef,desc} = props.recipe
  return (
    <Link to={`/recipe/details/:${id}`} className="block w-[20vw] h-[62vh] rounded-[7px] overflow-hidden bg-white/10 p-4">
      <img className="w-[19vw] h-[36vh] object-cover mb-2 rounded-[9px] " src={image} alt="Not found" />
      <h1 className="text-2xl text-center mb-1 uppercase font-bold">{title}</h1>
      <p className="text-[16px] text-red-300 text-end mb-1">- {chef}</p>
      <p className="text-xl text-center">{desc.slice(0,70)}... <small className="text-blue-500">more</small></p>
    </Link>
  )
}

export default RecipeCard
