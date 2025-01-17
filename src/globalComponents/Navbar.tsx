import Btn from "./Btn.tsx";

function Navbar() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-start bg-[#111322] dark:bg-gray-800">
            <div className="w-full self-start h-screen flex flex-col justify-between items-center p-5 py-10">
                <h1 className="text-white text-4xl font-semibold top-7">Coins Finance</h1>
                <Btn btnName="Dark Mode"/>
            </div>
        </div>
    )
}

export default Navbar;