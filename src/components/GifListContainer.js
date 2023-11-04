import React, { useEffect, useState } from "react";
import Gift from "./GifList";
import Search from "./GifSearch";
import "./App.css";
export default function GiftList(){
    const[data3,setdata3]=useState([]);
    const[input,setinput]=useState("")
    const [que, setQue] = useState("dolphin"); 
    useEffect(() => {
      
      fetch(`https://api.giphy.com/v1/gifs/search?q=${que}&api_key=Qu7imh455IR6iKq59cU1jq7CF4Skqunj`)
        .then((r) => r.json())
        .then((data) => {
          const first3Data = data.data.slice(0, 3);
          setdata3(first3Data);
          console.log(`consoled-data:`, first3Data);
        });
    }, [que]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      setQue(input);
    };
  
    console.log(data3);
  
    return (
      <div className="divall">
        <div className="giftdiv">
          <Gift data3={data3} />
        </div>
        <div className="divsearch">
          <Search handleSubmit={handleSubmit} input={input} setinput={setinput} />
        </div>
      </div>
    );
  }