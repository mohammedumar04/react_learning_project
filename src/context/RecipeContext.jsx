import { createContext, useEffect, useState } from "react" 

export const recipecontext = createContext() 
 
const RecipeContext = (props) => {
    const [data,setdata] = useState([

      {
  "id": "1",        
  "title": "Chicken Pizza",
  "chef": "Jhonathan",
  "ingre": "Pizza dough, Tomato sauce, Fresh mozzarella cheese, Fresh basil leaves, Olive oil, Salt and pepper to taste.",
  
    
  
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 15,
  "servings": 4,
  "difficulty": "Easy",
  "tags": [
    "Pizza",
    "Italian"
  ],
  "userId": 166,
  "image": "https://images.unsplash.com/photo-1671106681075-5a7233268cbd?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "rating": 4.6,
  "reviewCount": 98,
  "cat": "Dinner",
  "desc": "Roll out the pizza dough and spread tomato sauce evenly.Top with slices of fresh mozzarella and fresh basil leaves.Drizzle with olive oil and season with salt and pepper.",
  "cuisine": "Italian",
  "caloriesPerServing": 300,
  "reviews": 98,
  "inst": "Roll out the pizza dough and spread tomato sauce evenly,Top with slices of fresh mozzarella and fresh basil leaves.Drizzle with olive oil and season with salt and pepper.Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.Slice and serve hot."
  
}
    ])

    useEffect(()=>{
      setdata(JSON.parse(localStorage.getItem("recipe")) || [] ) 
    },[])
    
    return (
        <recipecontext.Provider value={{data,setdata}}>
            {props.children}
        </recipecontext.Provider>
    )
}


export default RecipeContext
