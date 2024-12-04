import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Coin from "./routers/coin.tsx";
import Coins from "./routers/coins.tsx";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


const queryClient = new QueryClient()
const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "",
                element: <Coin />,
            },
            {
                path:"coin/:coinId",
                element:<Coins />
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
