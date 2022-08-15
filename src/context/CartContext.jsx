import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(0);

export const CartContextProvider = ({children})=>{
    const calcCartTotal = (items)=>{
        const itemsCount = items.reduce((prev,curr)=> prev + curr.qty ,0)
        const cartTotal = items.reduce((prev,curr)=> prev + curr.qty*curr.id ,0)
        return {itemsCount, cartTotal}
     }
    const initialitems = JSON.parse(localStorage.getItem("items"))
    const initialCartIds = JSON.parse(localStorage.getItem("cartIds"))
    const [cart,setCart]= useState({
        items: initialitems || [],
        ...calcCartTotal(initialitems || [])
    })
    const [cartIds, setCartIds]= useState(initialCartIds || [])
    const {items} = cart;
    const setData = ()=>{
        localStorage.setItem('items', JSON.stringify(items))
        localStorage.setItem('cartIds', JSON.stringify(cartIds))
    }
    useEffect(()=>{
        setData()
    },[items, cartIds])
    

    const addToCart= (movie)=>{
        // const {items} = cart;
        const movieIndex = items.findIndex(item => movie.id === item.id)
        if(movieIndex === -1){
            items.push({
                ...movie,
                qty: 1,
            })
            setCartIds([...cartIds, movie.id])
        }else{
            removeMovie(movie)
        }
        const total = calcCartTotal(items);
        setCart({
            items,
            ...total
        })
    }

    const addOneMore = (movie)=>{
        // const {items} = cart;
        const movieIndex = items.findIndex(item => movie.id === item.id)
        items[movieIndex].qty++;
        const total = calcCartTotal(items);
        setCart({
            items,
            ...total
        })
    }

    const deleteOneMore = (movie) =>{
        // const {items} = cart;
        const movieIndex = items.findIndex(item => movie.id === item.id)
        items[movieIndex].qty--;
        if(items[movieIndex].qty === 0){
            items.splice(movieIndex,1)
            let newCartIds = cartIds.filter((cartId)=>{
                return cartId !== movie.id
            })
            setCartIds(newCartIds)
        }
        
        
        const total = calcCartTotal(items);
        setCart({
            items,
            ...total
        })
    }
    const removeMovie= (movie)=>{
        // const {items} = cart;
        const movieIndex = items.findIndex(item => item.id === movie.id)
        items.splice(movieIndex,1)
        const total = calcCartTotal(items)
        setCart({
            items,
            ...total
        })
        let newCartIds = cartIds.filter((cartId)=>{
            return cartId !== movie.id
        })
        setCartIds(newCartIds)
    }

    const clearAll = ()=>{
        setCart({
            items: [],
            itemsCount: 0,
            cartTotal: 0,
        })
        setCartIds([])
    }
    return <CartContext.Provider value={{cart, cartIds, addToCart, addOneMore, deleteOneMore, removeMovie, clearAll}}>
        {children}
    </CartContext.Provider>
}