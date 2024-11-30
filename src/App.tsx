import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";


function App() {

  return (
      <div className="grid grid-cols-3 md:grid-cols-[1fr_3fr] h-screen">
          <Navbar/>
          <Outlet/>
      </div>
  )
}

export default App
