import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Bother = () => {
    let [money,setMoney] = use(MoneyContext)
    return (
        <div>
            <h3>Bother</h3>
            <button onClick={()=>setMoney(money+1000)}>Add 1000tk</button>
        </div>
    );
};

export default Bother;