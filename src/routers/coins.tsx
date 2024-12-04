import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Coins() {
  const { coinId } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false`
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    })();
  }, []);

  return <h1 className="text-blue-500 text-6xl">coin {coinId}</h1>;
}

export default Coins;
