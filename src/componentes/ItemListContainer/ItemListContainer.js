import './style.css'
import datos from '../../datos.json'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

function getItems(){
    return  new Promise ((response, reject) => {
        let error= false;
    setTimeout(()=>{
        if(error===true)
            reject ("Error trayendo los datos");
        response(datos);
    },3000);
    })};
    function getCategory (categoriaURL) {
        return new Promise ((response, reject) => {
            setTimeout(()=>{
                let categoriaEncontrada = datos.filter((item)=> item.categoria === categoriaURL )
                response(categoriaEncontrada );
            },3000);
            })
        };


 function ItemListContainer({greeting}){
    const [Productos, setProductos]= useState([])
    const [isLoading, setIsLoading]= useState(true)
    const params = useParams()
 const idCategoria = params.idCategoria;
 async function leerDatos(){
    if (idCategoria === undefined){
        let respuesta = await getItems();
        setProductos(respuesta)
        setIsLoading(false)
    }else{
        setIsLoading(true)
        let respuesta =  await getCategory(idCategoria);
        setProductos(respuesta)
        setIsLoading(false)
    }
 }      
   useEffect(()=>{
    leerDatos();
   }, [idCategoria]);
  

   return(<>
   <div className='items'>
{/* <h2 className='texto'>{greeting}</h2> */}
<section className='bienvenida'>
    { isLoading?
   <Loader/>
    :
<ItemList   Prod={Productos}/>
    }

</section>
</div>


</>
    )
 }
 export default ItemListContainer