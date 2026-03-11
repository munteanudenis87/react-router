import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
  const [productsList, setProductsList] = useState([]);

  function productList () {
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      setProductsList(response.data);
      console.log(response.data)
    })
  }
  useEffect(productList, []);

  return (
    <>
     <section className="container">
      <section className='row'>
        <section className="product col-6">
          <h1>Our Products</h1>
          {productsList.map(productsList => (
            <article key={productsList.id}>
              <div className="product-info">
                <p className="product-category">
                  {productsList.category}
                </p>
                <p className="product-price">
                  {productsList.price}
                </p>
                <p className="product-title">
                  {productsList.title}
                </p>
              </div>
              <div className="product-image">
                <img src={productsList.image} className="product-img" alt={productsList.title} 
                  onError={(event) => {
                    event.currentTarget.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCTwsgxYd4LhL6lORmydMfwB6unVuBUv0Q97l6hOSE7iJYJEpg2nDXOGxQISWeTzOnSE&usqp=CAU"
                  }}
                />
              </div>
            </article>
          ))}
        </section>
      </section>
    </section>
    </>
  )
}

export default Products