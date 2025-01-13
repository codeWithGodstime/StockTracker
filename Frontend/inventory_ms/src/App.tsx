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
