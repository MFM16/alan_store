const OrderCard = () => {
    return (
        <div className='w-full flex flex-col gap-3 mt-10'>
            <div className='w-full flex flex-row items-center gap-1'>
                <div className='flex gap-2 items-center w-2/4'>
                    <img className='w-20 h-16' src="./src/assets/img-1.jpg" alt="" />
                    <span className='font-semibold text-sm'>Sate Ayam</span>
                </div>
                <div className='text-right w-1/4'>
                    <span>x</span>
                    <span>1</span>
                </div>
                <div className='text-left px-2 w-1/4 text-primary font-semibold'>
                    <span>Rp. </span>
                    <span>23.000</span>
                </div>
            </div>
        </div>
    )
}

export default OrderCard