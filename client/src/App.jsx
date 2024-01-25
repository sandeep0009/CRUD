import Home from "./components/Home"
import Inform from "./components/Inform"
import {Route ,Routes } from "react-router-dom"
import Update from "./components/Update"


const App = () => {
  return (
    <div>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/update/:id" element={<Update/>}/>
      <Route path="/add" element={  <Inform/>}/>
    </Routes>
    
    </div>
  )
}

export default App