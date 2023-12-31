const ProductCard = (props) => {
    const { products, addToCart } = props
    return (
        <div className='w-2/3 flex flex-row gap-10 flex-wrap'>
            {products.length > 0 && products.map((product) => {
                return (
                    <button key={product.id} className='w-52 h-60 shadow-lg rounded-md' onClick={() => addToCart(product.id)}>
                        <div className='w-full h-44 rounded-lg'>
                            <img src={product.product_photo} className='w-full h-full rounded-t-md' alt="" />
                        </div>
                        <div className='w-full text-center font-semibold'>
                            <p>{product.product_name}</p>
                            <span className='text-sm text-primary'>Rp. {product.product_price.toLocaleString()}</span>
                        </div>
                    </button>
                )
            })}
        </div>
    )
}

export default ProductCard