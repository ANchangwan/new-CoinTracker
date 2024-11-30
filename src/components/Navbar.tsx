import Btn from "./Btn.tsx";

function Navbar() {
    return (
        <div className="w-1/4 h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 fixed p-4">
            <h1 className="text-white text-4xl font-semibold absolute top-7">Coins Finance</h1>
            <Btn btnName="Dark Mode"/>
        </div>
    )
}

export default Navbar;