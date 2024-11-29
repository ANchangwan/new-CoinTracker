import {useParams} from "react-router-dom";


function Coins(){
    const {id} = useParams()
    return <h1 className="text-blue-500 text-6xl">coin {id}</h1>
}

export default Coins;