import Button from "../button/Button"

const CardProducts = (props)=>{
    return (
        <div className="w-full max-w-sm border bg-gradient-to-br from-cyan-200 to-blue-700 px-5 py-4 mt-5 shadow-lg  rounded-lg flex flex-col">
       {props.children}    
        </div>
    )
}

function Header(props){
    return (
        <a href="">
                <img src={props.src} alt="product" className="rounded-lg " />
        </a>
    )
}
function Body(props){
    return (
        <div className="px-2 h-full">
                    <a href="">
                    <h3 className="text-white text-2xl font-bold my-2 tracking-tight">{props.title}</h3>
                    </a>
                    <p className="text-sm text-slate-200">{props.children}</p>
        </div>
    )
}
function Footer (props){
    
    // const id = props.id
    // const hndle = props.handleToCart
    return (
    <div className="flex justify-between items-center px-2 pt-4">
                    <h5 className="font-semibold text-slate-200 text-xl">
                        Rp {props.price.toLocaleString('id-ID',{styles : "currency",currency : 'IDR'})}
                    </h5>
                    <Button  variant="bg-blue-300"  onClick={()=>props.handleToCart(props.id)}>add to cart</Button>
    </div>
    )
}
CardProducts.Head = Header
CardProducts.Body = Body
CardProducts.Footer = Footer

export default CardProducts