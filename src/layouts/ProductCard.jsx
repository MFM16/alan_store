import Card from "../Fragments/Card"

const ProductCard = (props) => {
    const { products } = props
    return (
        <div className='w-2/3 flex flex-row gap-10 flex-wrap'>
            {products.map((product) => {
                return (
                    <Card product={product} />
                )
            })}
        </div>
    )
}

export default ProductCard