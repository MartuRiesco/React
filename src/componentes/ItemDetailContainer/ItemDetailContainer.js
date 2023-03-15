import './style.css'
import detalles from '../../detalles.json'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' 

function getOneItem(idItems){
    return new Promise ((response, reject)=>{
        setTimeout(() => {
            let encontrado = detalles.find((item)=> item.id === parseInt(idItems))
           if(encontrado !== undefined) response(encontrado)
           else reject ("No encontramos ese producto")
        },2000)
    })
}
function ItemDetailContainer(){
    const [Productos, setProductos]= useState([])
    const params =  useParams();
    const idItem= params.idItem
        useEffect(()=>{
            getOneItem(idItem)
            .then((response)=>setProductos(response))
            .catch((error)=>alert(error))
        },[])
     console.log('productos', Productos);
    return(<><section>
    <ItemDetail   Prod={Productos}/>
    </section>
    </>

    )
}
export default ItemDetailContainer