import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"


export function ProductsComponent(){
    const params = useParams();
    const [categoryname,setcategoryname] = useState();
    const [products,setproducts] = useState([]);
    useEffect(()=>{
        setcategoryname(params.category);
        fetch(`http://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>response.json())
        .then(data=>
            setproducts(data)
            )
    },[])
    return(
        <div className="container-fluid">
            <h2> {categoryname} Products</h2>
            <div>
                {
                    products.map(product=>
                        <Link to={'/details'+product.id  }><img key={product.id} src={product.image} width='150' height='150' className="m-2 p-2 image-fluid" border='1'/></Link>
                        )
                }
            </div>
            <Link to='/categories'>Back to categories</Link>

        </div>
    )
}