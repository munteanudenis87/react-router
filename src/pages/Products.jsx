import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [productsList, setProductsList] = useState([]);
  const [page, setPage] = useState(1);

  function productList () {
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      setProductsList(response.data);
      console.log(response.data)
    })
  }
  useEffect(productList, []);
  function nextPage() {
    setPage(() => setPage(page + 1));
  }
  function prevPage() {
    if (page > 1) {
      setPage(() => setPage(page - 1));
    }
  }

  return (
    <>
     <section className="container">
      <section className='row'>
        <section>
          {page > 1 ? (<button className="btn btn-primary" onClick={prevPage}>Previous Page</button>) : ('')}
          <button className="btn btn-warning" onClick={nextPage}>Next Page</button>
        </section>
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
              <div>
                <Link to={`/products/${productsList.id}`}>
                  View more...
                </Link>
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