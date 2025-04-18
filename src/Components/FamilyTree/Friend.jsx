import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = () => {
let [money,setMoney] = use(MoneyContext)
    return (
        <div>
            <h3>Friend</h3>
            <p>Family got : {money} </p>
        </div>
    );
};

export default Friend;