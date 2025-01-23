import {Outlet} from "react-router-dom";
import Navbar from "./globalComponents/Navbar.tsx";



function App() {
    return (
        <div className="grid grid-rows-[1fr_5fr] gap-12 dark:bg-[#15192A]">
            <div className="min-w-1/6 fixed z-50">
                <Navbar/>
            </div>
            <div className="relative left-72 right-0 flex-grow overflow-y-auto p-4 max-w-screen-xl">
                <Outlet/>
            </div>

        </div>
    )
}


export default App;
