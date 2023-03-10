import './style.css'
import datos from '../../datos.json'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

 function ItemListContainer({greeting}){
    const [Productos, setProductos]= useState([])
    const params = useParams()
 const idCategoria = params.idCategoria;
 function getData (){
 return( new Promise ((response, reject) => {
        setTimeout(()=>{
            response(datos)
        },3000)
        }))}

       function getCategory (categoriaURL) {
        return (new Promise ((response, reject) => {
            setTimeout(()=>{
                let categoriaEncontrada = datos.filter((item)=> item.categoria === categoriaURL )
                response(categoriaEncontrada )
            },3000)
            }))
        }
    useEffect(()=>{
        if (idCategoria === undefined){
        getData()
        .then((response)=>setProductos(response))}
        else{
getCategory(idCategoria)
.then((response)=>setProductos(response))
        }
        
    },[idCategoria]) 
  

   return(<>
   <div className='items'>
{/* <h2 className='texto'>{greeting}</h2> */}
<section className='bienvenida'>
<ItemList   Prod={Productos}/>
</section>
</div>


</>
    )
 }
 export default ItemListContainer