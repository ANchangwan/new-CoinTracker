import { FaHome } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function BackBtn() {
    const navigate = useNavigate()
    const useback = ()=>{
        navigate('/');
    }

    return (
        <button className="flex justify-center text-3xl items-center size-10 rounded-full text-white bg-gray-400"
                onClick={useback}>
            <FaHome/>
        </button>
    )
}

export default BackBtn;
