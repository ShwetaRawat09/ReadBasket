//For Routing
import { Outlet, RouterProvider, createBrowserRouter, ScrollRestoration } from "react-router";
import { Navigate } from "react-router-dom";

//Layout
import { Header, Footer } from "./Components/CompIndex";

//Pages
import { HomePage, ProductsList, ProductDetail, Login, Register, CartPage, OrderPage, DashboardPage, Error } from "./Pages/PageIndex";

//Protected Routes
const ProtectedRoute = ({children}) => {
    const token = JSON.parse(sessionStorage.getItem("token"));

  return token ? children : <Navigate to="/login" />
};

const AppLayout = () => {

  return (
    <div className="dark:bg-slate-800">
      <ScrollRestoration/> {/* To get to top */}
      <Header/>
      <main>
      <Outlet/> {/* Populate our other pages and components */}
      </main>
      <Footer/>
    </div>
  )
};

const router = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/products",
        element: <ProductsList />
      },
      {
        path: "products/:id",
        element: <ProductDetail />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/cart",
        element: <ProtectedRoute><CartPage /></ProtectedRoute>
      },
      {
        path: "/order-summary",
        element: <ProtectedRoute><OrderPage /></ProtectedRoute>
      },
      {
        path: "/dashboard",
        element: <ProtectedRoute><DashboardPage /></ProtectedRoute>
      },
    ]
  },
  {
    path: "*",
    element: <Error/>
  }
  
]);

function App() { return <RouterProvider router={router}/>;}

export default App;
