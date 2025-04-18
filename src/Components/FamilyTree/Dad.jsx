import React from 'react';
import Myself from './Myself';
import Bother from './Bother';
import Sister from './Sister';

const Dad = ({asset}) => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex'>
                <Myself asset={asset}>

                </Myself>
                <Bother></Bother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;