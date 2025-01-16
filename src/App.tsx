import {Outlet,ScrollRestoration} from "react-router-dom";
import Navbar from "./globalComponents/Navbar.tsx";


function App() {
    return (
        <div className="grid grid-cols-12 min-h-screen dark:bg-[#15192A]">
            <div className="col-span-3">
                <Navbar/>
            </div>
            <div className="col-span-9 mt-8 pl-4 overscroll-y-none">
                <Outlet/>
            </div>
            <ScrollRestoration/>
        </div>
    )
}

export default App;
