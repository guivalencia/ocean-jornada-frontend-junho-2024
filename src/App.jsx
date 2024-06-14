import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/teste',
    element: <div>Teste</div>
  }
])

function App() {
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App