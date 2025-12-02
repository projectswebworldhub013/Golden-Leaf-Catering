import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ScrollToTop from "./Components/ScrollToTop"

function App() {

  return (
    <>
    <ScrollToTop/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
