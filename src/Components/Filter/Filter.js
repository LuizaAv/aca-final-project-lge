import React, { useState } from 'react';
import {useStoreContext} from '../../store/storeContext'


export default function Filter(){
    const {state} = useStoreContext();
    const [type,setType]=useState('');
    return (
        <>
        <div>
           <select onChange={(e)=>{setType(e.target.value)}} >
        <option>Expense/Income</option>
        <option>expense</option>
        <option>income</option>
           </select>
        </div><br/>
        
        {state.categories.filter(c =>(
         c.type === type
         
         )).map(el=><div>{el.name}</div>)
        }
        </>
    );
}