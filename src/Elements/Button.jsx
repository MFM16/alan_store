const Button = (props) => {
    const { children, bg_color, text_color, border_color, padding, nominal = null, onClick = null, type = 'button' } = props

    return (
        <button onClick={onClick != null ? () => onClick() : ''} type={type} className={`py-${padding} text-center w-full ${text_color} border-2 ${bg_color} ${border_color} rounded-md font-semibold mt-5`}>
            {children} {nominal != null ? `Rp. ${nominal.toLocaleString()}` : ''}
        </button>
    )
}

export default Button