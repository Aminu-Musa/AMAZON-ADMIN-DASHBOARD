import PageHeader from "../utilities/PageHeader"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Product_page() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const resp = await fetch("http://159.65.21.42:9000/products")
        const data = await resp.json()
        const categories = data.filter((storeProduct) => storeProduct.category === 'amazonproducts')
        setProducts(categories)
      } catch (err) {
        console.log(err);
        alert('Sorry an error occured please check your internet conection')
      }
    }
    getProducts();
  }, []);

  const deleteProduct = async ()=>{
    const resp = await fetch("http://159.65.21.42:9000/create/product"+products, {
      method: "delete"
    })
  }

  return (
    <div className="pages">
      <PageHeader title='All products' />
      <div className="all-product-contanier">
        {products.length === 0 ? <h3> loading...,<Link to='/create-product'> create product </Link> </h3> :
          products.map((product) => (

            <div className="product-card" key={product._id}>
              <div className="product-image">

                <img src={`http://159.65.21.42:9000${product.image}`} alt="product" />
              </div>
              <div className="product-detail">
                <p className="product-name">{product.name}</p>
                <p className="product-price"><span>₦ </span>{product.price}</p>
              </div>
              <div className="data-action">
                <button className="edit" title="edit product"> <Link to={`/product/${product._id}`} className="link"> Edit </Link></button>
                <button className="delete" title="delete product" onClick={deleteProduct}>Delete</button>
              </div>
            </div>
          ))

        }


      </div>
    </div>
  )
}

export default Product_page