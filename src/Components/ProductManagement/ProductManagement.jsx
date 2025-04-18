import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    let [products,setProducts]=useState([])
    let handleAddProduct = (newProduct)=>{
            let newProducts = [...products,newProduct]
            setProducts(newProducts)
    }
    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;