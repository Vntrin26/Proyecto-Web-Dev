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
        <td><input value={desc} type="text" onChange={e => setDescription( e.target.value )}></input></td>
        <td><input value={amt} type="text" onChange={e => setAmount( e.target.value )}></input></td>
        <td><input value={gn} type="text" onChange={e => setGain( e.target.value )}></input></td>
        <td><input value={typ} type="text" onChange={e => setType( e.target.value )}></input></td>
     </tr>
    );

}


export default InvestmentTable;

