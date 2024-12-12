import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Coins from "./routers/coins.tsx";
import Coin from "./routers/./coin.tsx";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


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
                element:<Coin />
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
