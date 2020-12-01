import React, { useState, useEffect } from 'react';
import './InvestmentTable.css';
const InvestmentTable = ({id, description, amount, gain, type}) => {

    const [desc, setDescription] = useState(description);
    const [amt, setAmount] = useState(amount);
    const [gn, setGain] = useState(gain);
    const [typ, setType] = useState(type);

    useEffect(()=> {  
        setDescription(desc); 
        setAmount(amt);
        setGain(gn);
        setType(typ);
      }, []);

    return (

    <tr >
        <td><input value={desc}></input></td>
        <td><input value={amt}></input></td>
        <td><input value={gn}></input></td>
        <td><input value={typ}></input></td>
     </tr>
    );

}


export default InvestmentTable;

