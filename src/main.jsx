import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import RecipeContext from './context/RecipeContext.jsx'
import { Flip, ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <RecipeContext>
        <BrowserRouter>
            <App/>
            <ToastContainer position='top-center' autoClose={2000} transition={Flip}/>
        </BrowserRouter>
    </RecipeContext>
)
