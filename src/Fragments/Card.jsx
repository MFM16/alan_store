const Card = (props) => {
    const { product } = props

    return (
        <button className='w-52 h-60 shadow-lg rounded-md'>
            <div className='w-full h-44 rounded-lg'>
                <img src={product.product_photo} className='w-full h-full rounded-t-md' alt="" />
            </div>
            <div className='w-full text-center font-semibold'>
                <p>{product.product_name}</p>
                <span className='text-sm text-primary'>Rp. {product.product_price.toLocaleString()}</span>
            </div>
        </button>
    )
}

export default Card