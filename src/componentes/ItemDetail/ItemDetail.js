import ItemCount from '../ItemCount/ItemCount'
import './style.css'

const ItemDetail = ( {Prod} ) => {
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
        <ItemCount initial={1} stock={5} />
        </section>
    </section>
    </div>
    
    )
    }
    export default ItemDetail