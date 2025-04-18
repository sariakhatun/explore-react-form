import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    let [error,setError]=useState('')
    let handleProductSubmit = e =>{
        e.preventDefault();
        let name = e.target.name.value;
        let price = e.target.price.value;
        let quantity = e.target.quantity.value;
        console.log(name,price,quantity)
        //validation
        if(name.length===0){
            setError('please provide a product name')
             return;
        }else if(price.length===0){
            setError('please provide a product price')
            return;
        }else if(price<0){
            setError('price cannot be negative')
            return;
        }
        else{
            setError('')
            
        }

        let newProduct = {
            name,
            price,
            quantity

        }
        handleAddProduct(newProduct)
       
        //console.log(newProduct)
    }
    return (
        <div>
            <h3>Add a product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" id="" placeholder='Product Name' /> <br />
                <input type="text" name="price" id="" placeholder='Product Price' /> <br />
                <input type="text" name="quantity" id="" placeholder='Product Quantity' /> <br />
                <input type="submit" name="" id="" />
            </form>
            <p style={{color:'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ProductForm;