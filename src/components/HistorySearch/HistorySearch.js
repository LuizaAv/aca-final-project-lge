import React from 'react';


export default function HistorySearch({e,setE}){
    const handleChange=(e)=>{
        setE(e.target.value) 
      }
     
    return (
        <div >
        <input  value={e} onChange={handleChange}/>
        </div>
    )
}