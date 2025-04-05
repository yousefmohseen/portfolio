import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root.jsx'
import Home from './pages/Home.jsx'
import Details from './pages/Details.jsx'

const routes = createHashRouter([
  {
    path: "/portfolio",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "details/:id",
        element: <Details />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
)
