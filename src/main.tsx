import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Coins from "./routers/home/coins.tsx";
import Coin from "./routers/coinDetail/coin.tsx";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Chart from "./routers/coinDetail/components/Chart.tsx";
import CandleChart from "./routers/coinDetail/components/CandleChart.tsx";


const queryClient = new QueryClient()
const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "",
                element: <Coins />,
            },
            {
                path:"coin/:coinId",
                element:<Coin />,
                children:[
                    {
                        path:"",
                        element:<Chart/>
                    },
                    {
                        path:"price",
                        element:<CandleChart/>
                    }
                ]
            }
        ],
    },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
      </QueryClientProvider>
  </StrictMode>,
)
