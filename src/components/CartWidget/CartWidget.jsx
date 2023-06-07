import './CartWidget.css'

const CartWidget = () => {

    const imgCarrito = 'https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png'

  return (
    <div className='widget'>
        <img className='imgCarrito' src={imgCarrito} alt="imgCarrito" />
        <strong> 10 </strong>
    </div>
  )
}

export default CartWidget