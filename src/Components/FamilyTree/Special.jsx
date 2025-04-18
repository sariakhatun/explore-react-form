import React, { useContext } from 'react';
import { AssetContext, MoneyContext } from './FamilyTree';

const Special = ({name,asset}) => {
    let newAsset = useContext(AssetContext)
    console.log(newAsset)
   
    return (
        <div>
            <h3>Special : {name}</h3>
        <p>Asset :{asset} </p>
        <p>New Asset :{newAsset} </p>
        
        </div>
    );
};

export default Special;