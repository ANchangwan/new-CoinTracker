
interface BoxContainerProps {
    text:string;
    [key: string]: string;
}

function BoxContainer({text,...rest}:BoxContainerProps){
    return (
        <div className={`uppercase rounded-xl w-24 flex justify-center  items-center h-10 bg-[#202841] text-white text-xl font-semibold text-white ${rest.className || ''}`} >
            {text}
        </div>
    )
}

export default BoxContainer;