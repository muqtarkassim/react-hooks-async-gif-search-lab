import React, { useState } from "react"


export default function Search({handleSubmit,input,setinput}){
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                 value={input}
                 onChange={(e)=>setinput(e.target.value)}
                ></input>
                <button>search</button>
            </form>
        </div>
    )
}