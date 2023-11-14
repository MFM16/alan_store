const OrderCard = (props) => {
    const { product, cart } = props

    return (
        <div key={product.id} div className='w-full flex flex-col gap-3' >
            <div className='w-full flex flex-row items-center gap-1'>
                <div className='flex gap-2 items-center w-2/4'>
                    <img className='w-20 h-16 rounded-sm' src={product.product_photo} alt="" />
                    <span className='font-semibold text-sm'>{product.product_name}</span>
                </div>
                <div className='text-right w-1/4'>
                    <span>x</span>
                    <span>{cart.qty}</span>
                </div>
                <div className='text-left px-2 w-1/4 text-primary font-semibold'>
                    <span>Rp. {(product.product_price * cart.qty).toLocaleString()}</span>
                </div>
            </div>
        </div>
    )
}

export default OrderCard