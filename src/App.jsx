
import Navbar from './components/shared/Navbar'
import Sidebar from './components/Sidebar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inbox from './components/Inbox'
import Mail from './components/Mail'
import Body from './components/Body'
import SendEmail from './components/SendMail'

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
    <div className='absolute w-[30%] bottom-0 right-20 z-10'>
      <SendEmail/>
    </div>
    </>
  )
}

export default App
