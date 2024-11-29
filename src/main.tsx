import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import './output.css'
import App from './App.tsx'
import Coin from "./routers/coin.tsx";
import Coins from "./routers/coins.tsx";

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
                path:"coin/:id",
                element:<Coins />
            }
        ],
    },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
