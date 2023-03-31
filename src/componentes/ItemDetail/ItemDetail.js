import ItemCount from '../ItemCount/ItemCount'
import './style.css'
import cartContext from '../../context/CartContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import Swal from 'sweetalert2'

const ItemDetail = ( {Prod} ) => {
    const {addItem}= useContext(cartContext)
    const [agregado, setAgregado]= useState(true)

    function onAdd (count){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto agregado!',
            showConfirmButton: false,
            timer: 1500
          })
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
        <section className='info'>      <h2 className="texto">{Prod.description}</h2>
        <p className="texto">Stock: {Prod.stock}</p>
        <span className="texto">
            Precio: ${Prod.price}
        </span>
        { agregado?
            <ItemCount initial={1} stock={Prod.stock} onAdd={onAdd} />
            :
             <Link to='/cart'><button className='bot'>Ver carrito</button></Link>
        }
        
        </section>
    </section>
    </div>
    
    )
    }
    export default ItemDetail