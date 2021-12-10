const { useState, useEffect } = require("react");

function Counter({initial}){
    const[value,setValue]=useState(initial);
    useEffect(()=>{
        const id = setInterval(()=>{
            setValue((prev)=>{
                console.log(prev);
                if(prev-1===0){
                    clearInterval(id);
                }
                return prev-1;
            })
            console.log(Date.now());
        },1000)
        return(()=>{
            console.log("cleaning")
            clearInterval(id);
        })
    },[])
    return(
        <div>
            <h3>{value}</h3>
        </div>
    )
}
export default Counter;