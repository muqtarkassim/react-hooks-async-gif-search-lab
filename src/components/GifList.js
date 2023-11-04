import React from "react";



export default function Gifts({data3}){

     //console.log(data3[0])
    const arrayed=data3.map((item,index)=><li key={index}>
    <img src={item.images.original.url} alt="img"></img>
    </li>
    )
//onst arraye
    return(
        <ul>
           {arrayed}
        </ul>
    )
}