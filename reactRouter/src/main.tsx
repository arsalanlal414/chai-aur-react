import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, BrowserRouter as Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './components/home/Home.tsx'
import About from './components/about/About.tsx'
import Contact from './components/contact/Contact.tsx'
import User from './components/user/User.tsx'
import Github, { githubInfoLoader } from './components/github/Github.tsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path:"",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userId' element={<User />}/>
      <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
