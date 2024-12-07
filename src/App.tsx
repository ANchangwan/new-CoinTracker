import {Outlet,ScrollRestoration} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";


function App() {
  return (
      <div className="dark:bg-gray-800 relative">
          <Navbar/>
          <div className="absolute left-1/3 top-8">
              <Outlet/>
          </div>
          <ScrollRestoration/>
      </div>
  )
}

export default App;
