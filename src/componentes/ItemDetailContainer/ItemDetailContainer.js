import './style.css'
import detalles from '../../detalles.json'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ItemDetailContainer(){
    const params =  useParams();
    const idItem= params.idItem
    const getData = new Promise ((response, reject) => {
        setTimeout(() => {
            let encontrado = detalles.find((item)=> item.id === parseInt(idItem))
            response(encontrado)
        },3000)
        });
        const [Productos, setProductos]= useState([])
        useEffect(()=>{
            getData
            .then((response)=>setProductos(response))
            
        },[])
     console.log('productos', Productos);
    return(<><section>
    <ItemDetail   Prod={Productos}/>
    </section>
    </>

    )
}
export default ItemDetailContainer