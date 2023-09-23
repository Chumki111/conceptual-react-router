import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import { useState } from "react";


const Products = () => {
    const {products} = useLoaderData();
    const [dataLength,setDataLength] = useState(3);
    
    return (
        <div>
            <div className="grid grid-cols-3 gap-5 p-5">
            {
                products.slice(0,dataLength).map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
        <div className={dataLength === products.length && 'hidden'}>
           <button onClick={() =>setDataLength(products.length)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-1/4 ml-96">Show All Products</button>
        </div>
        </div>
    );
};

export default Products;