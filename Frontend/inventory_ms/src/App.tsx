import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import LoginPage from "./components/auth/LoginPage";
import DashboardRoot from "./components/dashboard/Root";
import Overview from "./components/dashboard/Overview/Overview";
import Inventory from "./components/dashboard/Inventory/Inventory";
import { ProductDetail } from "./components/dashboard/Inventory/ProductDetail";
import Supplier from "./components/dashboard/Supplier/Supplier";


const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardRoot />,
    children: [
      {
        path: "",
        element: <Overview />
      },
      {
        path: "inventory",
        element: <Inventory />
      },
      {
        path: "products/:id",
        element: <ProductDetail />
      },
      {
        path: "suppliers",
        element: <Supplier />
      }
    ]
  }
]);

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
