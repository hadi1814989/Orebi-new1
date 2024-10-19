import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'

function App() {

  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path='/shop' element={<Shop />}></Route>
      <Route path='/product/:id' element={<ProductDetails />}></Route>
      </Route>
  ))
  

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
