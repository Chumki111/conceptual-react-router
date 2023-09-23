import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ViewProduct = () => {
    const product = useLoaderData();
    const {  title,stock, price,brand,thumbnail,description
    } = product || {}
    const handleAddCart= () => {
       toast('Add to cart successfully')
    }
    return (
        <div className="mx-auto max-w-6xl mt-10">

<div className="grid gap-4 md:grid-cols-3">
                   <div className="border rounded-lg">
                           <img className="h-full w-full" src={thumbnail} alt="" />
                   </div>
                   <div className="border md:col-span-2 rounded-lg px-5 space-y-5">
                       <div className="space-y-4">
                       <h2 className="text-lg">{brand}</h2>
                       <h2 className="text-3xl font-bold">{title}</h2>
                       <p className="text-lg">{description}</p>
                       </div>
                       <div className="flex gap-10">
                        <p>Color : </p>
                        <p>Size : </p>
                       </div>
                        <hr className="" />
                        <div className="flex justify-between">
                            <p className="text-2xl font-bold">TK : {price}</p>
                            <p className="text-2xl font-bold">Stock : ({stock})</p>
                        </div>
                        <div className="justify-center items-center">
                        
                        <button onClick={handleAddCart} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">Add To Cart
                        
                        </button>
                        <ToastContainer />
                        </div>
                   </div>
                  
            </div>
           
            
        </div>
    );
};

export default ViewProduct;