import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/main-layout";
import AuthLayout from "./components/auth/auth-layout";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import ErrorPage from "./components/error";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";
import ConcreteForms from "./pages/concrete-forms";
import Plywoods from "./pages/plywoods";
import DimensionalLumber from "./pages/dimensional-lumber";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/concrete-forms',
        element: <ConcreteForms />
      },
      {
        path: '/plywoods',
        element: <Plywoods />
      },
      {
        path: '/dimensional-lumber',
        element: <DimensionalLumber />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/auth/login',
        element: <Login />
      },
      {
        path: '/auth/register',
        element: <Register />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
