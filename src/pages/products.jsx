import { useState ,useEffect, useRef } from "react"
import Button from "../components/button/Button"
import CardProducts from "../components/fragments/CardProduct"
import Counter from "../components/fragments/counter"
import { json } from "react-router-dom"

const products = [
    {
        id : 1,
        title : 'Topi Malas',
        img : "/products/prodc-1.jpg",
        price: 1000000,
        desc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quod molestiae odio asperiores animi quae?`
    },
    {
        id : 2,
        title : 'Topi double malas',
        img : "/products/prodc-1.jpg",
        price: 2000000,
        desc : `molestiae odio asperiores animi quae?`
    },
    {
        id : 3,
        title : 'Topi auto malass',
        img : "/products/prodc-1.jpg",
        price: 69000000,
        desc : `sama ajah cuman lebih mahal`
    },
]

// const prod = products.find((e)=> e.id === 1)
// console.log(prod)

function ProductsPage(){

    const [cart,setCart] = useState([])
    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(()=>{
        setCart(JSON.parse(localStorage.getItem('cart')) || [])
    },[])
    useEffect(()=>{
        if(cart.length > 0 ){
            const sum = cart.reduce((acc,item)=>{
                const product = products.find((prod)=>prod.id === item.id)
                return acc + product.price * item.qty
            },0)
            setTotalPrice(sum)
            localStorage.setItem('cart',JSON.stringify(cart))

        }
    },[cart])

    function handleToCart(id){
        if ( cart.find(item=> item.id === id)){
            setCart(
                cart.map(item => item.id === id ? {
                    ...item,qty : item.qty +1 
                }: item)
            )
        }else {
            setCart([...cart ,{
                id,
                qty:1
            }])
        }
    }

    const acc = localStorage.getItem('email')
    function logouthandler(e){
        e.preventDefault()
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.replace('/login')
    }

    const handleTotalPrice = useRef()
    useEffect(()=>{
        if (cart.length > 0 ){
            handleTotalPrice.current.style.display = "table-row"
        }else {
            handleTotalPrice.current.style.display = "none"

        }
    // console.log(handleTotalPrice.current.style.display)       
    },[cart])
    return (
        <>
        <div className="bg-blue-500 flex px-10 py-4 justify-end items-center gap-3">
            <a className="text-white">{acc}</a>
            <Button onClick={logouthandler}>log out</Button>
        </div>
        <div className="flex justify-between">

            <div className="flex justify-center gap-4 w-3/4 flex-wrap">
            {products.map((i)=>{
                return(
                <CardProducts key={i.id}>
                    <CardProducts.Head src={i.img}></CardProducts.Head>
                    <CardProducts.Body title={i.title}>{i.desc}</CardProducts.Body>
                    <CardProducts.Footer price={i.price} id={i.id} handleToCart={handleToCart}></CardProducts.Footer>
                </CardProducts>
                )
            })}
            </div>
            <div className="w-1/4">
                <div className="flex items-center gap-3 mt-4">

                <h1 className="text-3xl">Cart</h1>
                <Button onClick={()=>setCart([])} variant="bg-teal-500">clear all item</Button>
                
                </div>
                <table className="text-left table-auto border-separate border-spacing-x-3 ">
                    <thead>
                        <tr>
                            <th>product</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item)=>{
                            const prod = products.find((e) => e.id === item.id)
                            const total = item.qty * prod.price
                            return (
                                <tr key={item.id}>
                                    <td> {prod.title}</td>
                                    <td> {prod.price.toLocaleString('id-ID',{styles : "currency",currency : 'IDR'})}</td>
                                    <td> {item.qty}</td>
                                    <td> {total.toLocaleString('id-ID',{styles : "currency",currency : 'IDR'})}</td>
                                </tr>
                            )
                        })}
                        <tr ref={handleTotalPrice}>
                            
                            <td colSpan={3}> <b> total price </b></td>
                            <td><b>{totalPrice.toLocaleString('id-ID',{styles : "currency",currency : 'IDR'})}</b></td>
                        </tr>
                    </tbody>
                </table>
                {/* <div>
                    <Counter></Counter>
                </div> */}
            </div>
        </div>
        </>
    )
}
export default ProductsPage