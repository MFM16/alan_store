import OrderCard from "../Fragments/OrderCard"
import Button from "../Elements/Button"

const Order = (prop) => {
    return (
        <div className='w-1/3 h-auto rounded-md shadow-md px-5 py-3 flex flex-col gap-3'>
            <div className='w-full flex justify-center items-center gap-3'>
                <div className='w-10 h-10 flex justify-center items-center border-2 border-black rounded-full px-1 py-1'>
                    <img src="./src/assets/cooking.png" alt="" />
                </div>
                <span className='text-lg font-semibold'>Pesanan</span>
            </div>
            <OrderCard />
            <Button padding="1" text_color="text-red-500" bg_color="bg_white" border_color="border-red-500">Clear Cart</Button>
            <div className='w-full flex flex-row gap-3'>
                <Button padding="1" text_color="text-white" bg_color="bg-success" border_color="bg-success">Save Bill</Button>
                <Button padding="1" text_color="text-white" bg_color="bg-success" border_color="bg-success">Print Bill</Button>
            </div>
            <Button nominal="40.000" padding="1" text_color="text-white" bg_color="bg-primary" border_color="bg-primary">Charge</Button>
        </div>
    )
}

export default Order