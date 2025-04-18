import React, { use } from 'react';
import Cousins from './Cousins';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {
    let [money,setMoney]= use(MoneyContext)
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousins asset={asset} name='Rakat'></Cousins>
                <Cousins name='Rahad'></Cousins>
                <Cousins name='Sabbir'></Cousins>
                <button onClick={()=>setMoney(money+5000)}>Add 5000 tk</button>
            </section>
        </div>
    );
};

export default Aunt;