import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


export function CategoriesComponent(){
    const [categories,setcategories] = useState([]);
    useEffect(()=>{
        fetch('http://fakestoreapi.com/products/categories')
        .then(response=>response.json())
        .then(data=>{
            setcategories(data)
        })
    },[])
    return(
        <div className="container-fluid">
            <h2>Product Category</h2>
            <ol>
                {
                   categories.map(category=>
                    <li><Link to={'/products/' + category}> { category.toUpperCase() } </Link></li>
                   )
                }
            </ol>
        </div>
    )
}