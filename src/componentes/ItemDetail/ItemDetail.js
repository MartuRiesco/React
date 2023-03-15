import ItemCount from '../ItemCount/ItemCount'
import './style.css'
import cartContext from '../../context/CartContext'
import { useContext } from 'react'

const ItemDetail = ( {Prod} ) => {
    const {addItem}= useContext(cartContext)

    function onAdd (count){
        alert (`agregaste ${count}  productos al carrito`)
       addItem(Prod, count);
    }
    if(Prod.name=== undefined)
    return <h2>Cargando...</h2>
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
        <ItemCount initial={1} stock={Prod.stock} onAdd={onAdd} />
        </section>
    </section>
    </div>
    
    )
    }
    export default ItemDetail