import axios from "axios"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const navigate = useNavigate();

    function singleProduct() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => {navigate("/products")})
    }

    useEffect(() => {
        singleProduct()
        //alert(id);
    }, []);
  return (
    <main className="container">
        {product ? (
            <h1>single Product: {product.title} <hr /> {product.description} <hr /> {product.price} <hr /> {product.category}</h1>
        ) :
        (
            <p>Loading product...</p>
        )}
    </main>
  )
}

export default ProductDetailPage