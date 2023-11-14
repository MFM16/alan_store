import Header from "../Fragments/Header"
import Navbar from "../Fragments/Navbar"
import ProductCard from "../layouts/ProductCard"
import Order from "../layouts/Order"
import { Fragment, useEffect, useState } from "react"
import { getProducts } from "../services/product.service"



const HomePages = () => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])
    const [charge, setCharge] = useState(null)
    const [modal, setModal] = useState(false)
    const [popUp, setPopUp] = useState(false)
    const [money, setMoney] = useState(0)
    const [change, setChange] = useState(0)

    useEffect(() => {
        getProducts((data) => {
            setProducts(data)
        })
    }, [])

    useEffect(() => {
        if (products.length > 0) {
            setCart(JSON.parse(localStorage.getItem('cart')) || [])
        }
    }, [products])

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const charge = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.product_price * item.qty
            }, 0)
            setCharge(charge)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart, products])

    useEffect(() => {
        if (money == 0) {
            setChange(0)
        } else {
            setChange(money - charge)
        }
    }, [money])

    const addToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                )
            )
        } else {
            setCart([...cart, { id, qty: 1 }])
        }
    }

    const emptyCart = () => {
        setCart([])
        localStorage.removeItem('cart')
        setCharge(null)
    }

    const showAndCloseModal = () => {
        setModal(modal == false ? true : false)
    }

    const showAndClosePopUp = () => {
        setPopUp(popUp == false ? true : false)
    }

    const print = () => {
        let print = `
            <div>
                <h3 style="text-align">Alan Resto</h3>
                <table>
                    ${cart.map((item) => {
            const product = products.find((product) => product.id === item.id)
            return `<tr>
                        <td>${product.product_name}</td>
                        <td>x ${item.qty}</td>
                        <td>Rp ${(product.product_price * item.qty).toLocaleString()}</td>
                    </tr>`
        })
            }
                </table>
            </div>
        `
        document.body.innerHTML = print
        window.print();
    }

    return (
        <Fragment>
            <div className='w-full min-h-screen'>
                <Header />
                <Navbar />
                <div className='w-full flex px-8 py-6 overflow-clip'>
                    <ProductCard products={products} addToCart={addToCart} />
                    <Order products={products} cart={cart} onClick={emptyCart} charge={charge} modal={showAndCloseModal} save={showAndClosePopUp} print={print} />
                </div>
            </div>

            <div className={`w-screen h-screen bg-gray-400 absolute top-0 bg-opacity-75 px-0 py-10 justify-center ${modal == false ? 'hidden' : 'flex'}`}>
                <div className=" w-4/6 bg-white h-min px-8 py-5 text-lg font-semibold rounded-sm z-50">
                    <h4>Detail Pesanan</h4>

                    <div className="flex py-3 gap-3">
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-2/3">
                            <table class="w-full text-sm text-left text-gray-500">
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
                                    {cart.map((value, index) => {
                                        const product = products.find((product) => product.id === value.id)
                                        return (
                                            <tr class="bg-white border-b">
                                                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap">
                                                    {index + 1}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {product.product_name} x {value.qty}
                                                </td>
                                                <td class="px-6 py-4">
                                                    <img className="w-16 h-12" src={product.product_photo} alt="" />
                                                </td>
                                                <td class="px-6 py-4">
                                                    Rp. {(product.product_price * value.qty).toLocaleString()}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="border-l-2 border-gray-200"></div>
                        <div className="flex justify-center flex-col w-1/3">
                            <p className="text-sm text-center">Uang Pembeli (Rp)</p>
                            <input className="mt-3 border-2 border-gray-300 py-1 px-2 rounded-sm focus:outline-none" type="text" onChange={(e) => setMoney(e.target.value)} />
                            <div className="flex gap-2 w-full justify-between mt-3">
                                <button onClick={() => showAndCloseModal()} className="w-full border-2 border-gray-300 rounded-sm py-1 text-gray-400 text-sm">Close</button>
                                <button className="w-full bg-primary rounded-sm py-1 text-white text-sm">Ok</button>
                            </div>
                            <p className="text-red-500 mt-2 text-sm">
                                Kembalian : Rp {change.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`w-screen h-screen bg-gray-400 absolute top-0 bg-opacity-75 px-0 py-10 justify-center items-center ${popUp == false ? 'hidden' : 'flex'}`}>
                <div className=" w-2/6 bg-white h-min px-8 py-5 text-lg font-semibold rounded-sm z-50 flex flex-col justify-center items-center">
                    <h1 className="text-center text-3xl text font-semibold">
                        Berhasil Disimpan
                    </h1>
                    <img className="mt-5 w-32" src="./src/assets/success.png" alt="" />
                    <button className="rounded-sm px-4 py-2 text-white bg-primary text-sm mt-5" onClick={() => showAndClosePopUp()}>
                        Tutup
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default HomePages