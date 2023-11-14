import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    let location = useLocation()

    return (
        <div className='w-full bg-white text px-8 flex justify-start gap-2 items-center shadow-md'>
            <Link to="/products" className={`px-5 py-2 font-semibold hover:text-primary hover:border-b-2 hover:border-primary ${location.pathname == '/products' || location.pathname == '/products/tambah' ? 'active' : ''}`}>Food</Link>
            <Link to="/" className={`px-5 py-2 font-semibold hover:text-primary hover:border-b-2 hover:border-primary ${location.pathname == '/' ? 'active' : ''}`}>Transaksi</Link>
        </div>
    )
}

export default Navbar