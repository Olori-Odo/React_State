import { useState } from "react"


const Arithmetic = ()=>{
    const [count, setCount] = useState(0)
    return(
        <>
            <div className="func">

            
                <button>Addition</button>
                <br />
                <h1> {count} </h1>
                <br />
                <button>Subtraction</button>

            </div>
        </>

    )
}

export default Arithmetic;