import Header from "../Fragments/Header"
import Navbar from "../Fragments/Navbar"
import ProductCard from "../layouts/ProductCard"
import Order from "../layouts/Order"
import { useEffect, useState } from "react"
import { getProducts } from "../services/product.service"



const HomePages = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts((data) => {
            setProducts(data)
        })
    }, [])

    return (
        <div className='w-full min-h-screen'>
            <Header />
            <Navbar />
            <div className='w-full flex px-8 py-6 overflow-clip'>
                <ProductCard products={products} />
                <Order />
            </div>
        </div>
    )
}

export default HomePages