import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css'

export let AssetContext = createContext('')
export let MoneyContext = createContext('')
const FamilyTree = () => {
    let [money,setMoney]=useState(0);
    let asset = 'diamond';
    let newAsset = 'gold'

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h4>Total Family Money : {money} </h4>
            <MoneyContext value={[money,setMoney]}>
            <AssetContext.Provider value={newAsset}>
            <Grandpa asset={asset}></Grandpa>

            </AssetContext.Provider>
            
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;