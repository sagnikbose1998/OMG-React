import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {

    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems)

    const dispatch=useDispatch()
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
  return (
    <div className='text-center m-4 p-4'>
        <h1 className='font-bold text-2xl'>Cart</h1>
        <button onClick={handleClearCart} className='bg-red-600 text-white rounded-xl m-2 p-2'>Clear Cart</button>
        {cartItems.length===0 && (
            <h1>Please add items to the cart</h1>
        )}
        <div className='w-6/12 m-auto'>
            <ItemList items={cartItems} />
        </div>
    </div>
  )
}

export default Cart