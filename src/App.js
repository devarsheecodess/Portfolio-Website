import './App.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutMe from './components/AboutMe.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /> <Home /> <Footer /> </>
    },
    {
      path: "/about",
      element: <><Header /> <AboutMe /> <Footer /> </>
    },
    {
      path: "/contact",
      element: <><Header /> <Contact /> <Footer /> </>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App