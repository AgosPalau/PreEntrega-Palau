import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import Logo from '../../assets/Logo.png'

const NavBar = () => {
    return (
        <header>
            <div>
                <img className='logo' src={Logo} alt="logo" />
            </div>
        <nav>
            <ul>
                <li>
                    Viento 
                </li>
                <li>
                    Percusion
                </li>
                <li>
                    Cuerda
                </li>
            </ul>
        </nav>

        <CartWidget />
    
        </header>
    )
}

export default NavBar