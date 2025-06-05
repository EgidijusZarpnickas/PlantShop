
import { Route, Routes } from "react-router"
import Layout from "./components/layout/Layout"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import PageNotFound from "./pages/PageNotFound"
import ReturnsPage from "./pages/ReturnsPage"
import FaqPage from "./pages/FaqPage"
import ShippingPage from "./pages/ShippingPage"
import CartPage from "./pages/CartPage"
import SingleProducktPage from "./pages/SingleProducktPage"


function App() {


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/PlantShop" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/returns" element={<ReturnsPage/>}></Route>
        <Route path="/faq" element={<FaqPage></FaqPage>}></Route>
        <Route path="/shipping" element={<ShippingPage></ShippingPage>}></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        <Route path="/products/:id" element={<SingleProducktPage></SingleProducktPage>}></Route>


        
        <Route path="*" element={<PageNotFound/>}></Route>
      </Route>
    </Routes>

      



  )
}

export default App
