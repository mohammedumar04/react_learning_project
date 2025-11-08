import NavBar from "./components/NavBar"
import MainRoutes from "./routes/MainRoutes"

const App = () => {
  return (
    <div className="w-screen h-screen text-white p-8 bg-gray-800">
      <NavBar/>
      <MainRoutes/>
    </div>
  )
}

export default App
