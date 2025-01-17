import {Outlet,ScrollRestoration} from "react-router-dom";
import Navbar from "./globalComponents/Navbar.tsx";



function App() {
    return (
        <div className="flex relative gap-4 w-full dark:bg-[#15192A]">
            <div className="min-w-1/6 fixed z-50">
                <Navbar/>
            </div>
            <div className="relative left-72 right-0 flex-grow overflow-y-auto p-4 ">
                <Outlet/>
            </div>
            <ScrollRestoration/>
        </div>
    )
}


export default App;
