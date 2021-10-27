import {useState} from 'react'

const Counter = () => {

    const [contador,setContador] = useState(0)

    return (
        <div id = "cont-carrito">
            <span> Cantidad: {contador} </span> 
            <button className="material-icons" onClick={() => setContador(contador + 1)}>+</button>  
            <button className="material-icons" onClick={() => setContador(contador - 1)}>-</button>  
        </div>
    )
}

export default Counter