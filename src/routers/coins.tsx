import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Coins() {
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1"
        );
        const data = await response.json();

      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    })();
  }, []);

  return <h1 className="text-blue-500 text-6xl">coin {id}</h1>;
}

export default Coins;
