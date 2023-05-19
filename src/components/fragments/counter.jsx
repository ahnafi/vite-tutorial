import { useEffect, useState } from "react"
// import Button from '../button/Button'
const Counter = ()=>{
    const [num,setNum] = useState(0)
    
    return (
        <div className=" text-center mb-32">
            <h1>Counter</h1>
            <div className="flex justify-center items-center gap-5">
                <p className="text-3xl">{num}</p>
                <button className="bg-slate-700 rounded-lg text-xl text-white px-4 py-2" onClick={()=> setNum(num + 1) }>
                    +
                </button>
                <button className="bg-slate-700 rounded-lg text-xl text-white px-4 py-2" onClick={()=> setNum(num - 1) }>
                    -
                </button>
            </div>
        </div>
    )
}
export default Counter