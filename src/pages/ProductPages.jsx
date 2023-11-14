import { useEffect, useState } from "react"
import Header from "../Fragments/Header"
import Navbar from "../Fragments/Navbar"
import { getProducts } from "../services/product.service"
import { Link } from "react-router-dom"

const ProductPages = (prop) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts((data) => {
            setProducts(data)
        })
    }, [])

    return (
        <div className='w-full min-h-screen bg-gray-100'>
            <Header />
            <Navbar />
            <div className="px-8 py-2 w-full">
                <p className="text-gray-500">Tambahkan menu makanan yang ada di resto</p>

                <div className="mt-3 px-6 py-5 bg-white w-full">
                    <Link to='/products/tambah' className="px-4 py-2 text-white rounded-sm bg-primary">+ Tambah Menu</Link>

                    <table class="w-full text-sm text-left text-gray-500 mt-5">
                        <thead class="text-xs text-black bg-gray-200">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Nama
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Foto
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Harga
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => {
                                return (
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap">
                                            {index + 1}
                                        </th>
                                        <td class="px-6 py-4">
                                            {product.product_name}
                                        </td>
                                        <td class="px-6 py-4">
                                            <img className="w-16 h-12" src={product.product_photo} alt="" />
                                        </td>
                                        <td class="px-6 py-4">
                                            Rp. {product.product_price.toLocaleString()}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductPages