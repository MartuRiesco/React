import { useState } from 'react';
import './style.css'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);
    
    const decrease = () => {
        if(count>initial){
          setCount(count -1 );
        }
        
      };
    
      const increase = () => {
        if(count<stock){
          setCount(count + 1);}
         

};   return( <div>
<button className='bot-men bot' onClick={decrease}>
   -
</button>
<span className='contador'> {count} </span>
<button  className='bot-mas bot' onClick={increase}>
   +
</button>
<button  className='bot bot-ag'onClick={ ()=>onAdd(count) }>Agregar al carrito</button>
</div>)
}
export default ItemCount