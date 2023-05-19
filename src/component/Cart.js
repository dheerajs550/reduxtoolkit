import React from 'react'
// import { ProdactData } from './ProdactData'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../features/Cartslice';

const Cart = () => {
    const datas = useSelector(({carts})=>{
        return (carts.item)
      })
      const dispatch = useDispatch()
//    const data = ProdactData;
   console.log(datas)
  return (
    <div className='row m-3'>
    {datas?.map((item)=>{
  return(
    <div className="card w-25 " key={item.id}>
  <img src={item.img}  className="card-img-top " alt="Fissure in Sandstone"/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
    <p className='text-primary' >{item.price}</p>
{/* <Link to="/shopping">
</Link> */}
    <button  className="btn btn-primary" onClick={()=>dispatch(addToCart(item))}>Add To Cart</button>
  </div>
</div>
  )
    })}
    </div>
   
  )
}

export default Cart
