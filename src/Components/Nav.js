import { Navbar } from "react-bootstrap"
import CartWidget from "./CartWidget"

const Nav = () => {
    return (
        <>
            <Navbar>
                <a href = "#">Nosotros</a>
                <a href = "#">Tratamientos</a>
                <a href = "#">Contacto</a>
                <CartWidget />
            </Navbar>
            
        </>
    )
}

export default Nav