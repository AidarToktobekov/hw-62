import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes, NavLink} from "react-router-dom";
import Home from "./containers/Home/Home.tsx";
import HomeWork from "./containers/HomeWork/HomeWork.tsx";
import Lessons from "./containers/Lessons/Lessons.tsx";
import Portfolio from "./containers/Portfolio/Portfolio.tsx";


const App=()=> {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-xxl d-flex gap-2">
        <span className="navbar-brand m-auto">Attractor</span>
        <div className="collapse navbar-collapse d-flex">
          <ul className="navbar-nav flex-row m-auto gap-5">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/lessons">lessons</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/home-work">Home-work</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Routes>
      <Route path="/home" element={(
        <Home/>
      )}/>
      <Route path="/home-work" element={(
        <HomeWork/>
      )}/>
      <Route path="/lessons" element={(
        <Lessons/>
      )}/>
      <Route path="/portfolio" element={(
        <Portfolio/>
      )}/>
      <Route path="/" element={(
        <Home/>
      )}/>
      <Route path="*" element={<h1 className='m-5 text-center'>Not Found!</h1>}/>
    </Routes>
    </>
  )
}

export default App
