import ItemCount from '../ItemCount/ItemCount'
import './style.css'
import cartContext from '../../context/CartContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'

const ItemDetail = ( {Prod} ) => {
    const {addItem, isInCart}= useContext(cartContext)
    const [agregado, setAgregado]= useState(true)

    function onAdd (count){
        alert (`agregaste ${count}  productos al carrito`)
       addItem(Prod, count);
       setAgregado(false)
    }
    if(Prod.name=== undefined)
    return <Loader/>
    return(
        <div className='centro'>
     <section className='detalle'>
        <img src={Prod.img} alt={Prod.name} className="imag ">
        </img>
        <section className='info'>        <p className="texto">Producto: {Prod.name}</p>
        <p className="texto">Stock: {Prod.stock}</p>
        <p className="texto"> Descripcion: {Prod.description}</p>
        <span className="texto">
            Precio: ${Prod.price}
        </span>
        { agregado?
            <ItemCount initial={1} stock={Prod.stock} onAdd={onAdd} />
            : <Link to='/cart'><button>Ver carrito</button></Link>
        }
        
        </section>
    </section>
    </div>
    
    )
    }
    export default ItemDetail