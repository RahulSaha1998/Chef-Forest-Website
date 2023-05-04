import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import Main from './components/layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Registration from './components/Registration/Registration.jsx';
import Blog from './components/Blog/Blog.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import ChefDetails from './components/ChefDetails/ChefDetails.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ({params}) => fetch(`http://localhost:5000/details/`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/chefRecipe/:id',
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
