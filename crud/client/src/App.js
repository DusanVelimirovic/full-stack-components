// Import external modules
import {
  createBrowserRouter,
  Outlet,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { useContext } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import Internal Components
import Books from "./pages/Books/Books.jsx";
import Add from "./pages/Add/Add.jsx";
import Update from "./pages/Update/Update.jsx";
import Read from "./pages/Read/Read.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import { AuthContext } from "../src/context/authContext";

function App() {
  // Var only for testing purpose - testing Protected Routes
  //const currentUser = true;

  // Get current user
  const { currentUser } = useContext(AuthContext);

  const queryClient = new QueryClient();

  // Protect some routers - example: if user is not logged in or registered redirect to login or register page
  // Children are protected routes
  // In our case Protected Routes are Home Component Login page after user is logged in
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    );
  };

  // Protected Login
  const ProtectedLogin = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Books />,
        },
        {
          path: "/read/:id",
          element: <Read />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/update/:id",
          element: <Update />,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <ProtectedLogin>
          <Login />
        </ProtectedLogin>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
