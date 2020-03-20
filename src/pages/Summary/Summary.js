import React from 'react';


export default function Summary() {

                 return <div>
                   <div>
                     <select >
                       <option value='Income'>Income</option>
                       <option value='Expense'>Expense</option>
                     </select>
                     <button>Sort</button>
                   </div>
                   <div>
                     <table>
                       <tr>
                         <th>Category</th>
                         <th>Amount</th>
                       </tr>
                     </table>
                   </div>
                 </div>;
               }
