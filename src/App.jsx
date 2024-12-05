
import Navbar from './components/shared/Navbar'
import Sidebar from './components/Sidebar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inbox from './components/Inbox'
import Mail from './components/Mail'
import Body from './components/Body'

function App() {
  const router = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
     children:[
      {
       path:'/',
       element:<Inbox/>
      },
      {
        path:'/mail/:id',
        element:<Mail/>
      }
      ]
  }
]
  )
  return (
    <>
    <Navbar/>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
