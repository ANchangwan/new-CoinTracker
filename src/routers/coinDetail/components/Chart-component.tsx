import {Link, Outlet, useLocation} from "react-router-dom";
import { FaChartLine } from "react-icons/fa6";
import { MdCandlestickChart } from "react-icons/md";

function CoinChartComponent() {
    const location = useLocation();
    const isPriceActive = location.pathname.endsWith("price");
    return (
        <div className="">
            <div className="relative flex justify-center items-center w-40 p-2 shadow-inner">
                {/* 배경 애니메이션 */}
                <div
                    className={`absolute top-2 bottom-0 left-8 w-12 h-12 bg-neutral-600 rounded-lg transform transition-transform duration-500 ${
                        !isPriceActive ? "translate-x-0" : "translate-x-full"
                    }`}
                ></div>

                {/* Chart 버튼 */}
                <Link
                    className={`relative z-10 flex justify-center items-center text-white text-xl w-12 h-12 rounded-full transition-all ${
                        !isPriceActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                    to=""
                >
                    <FaChartLine/>
                </Link>

                {/* Price 버튼 */}
                <Link
                    className={`relative z-10 flex justify-center items-center text-white text-xl w-12 h-12 rounded-full transition-all ${
                        isPriceActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                    to="price"
                >
                    <MdCandlestickChart/>
                </Link>
            </div>

            {/* 자식 컴포넌트가 렌더링될 위치 */}
            <Outlet/>
        </div>
    );
}

export default CoinChartComponent;
