import { useState } from "react"
import PageHeader from "../utilities/PageHeader"
import { useNavigate } from "react-router-dom";

function Create_product_page() {
  const navigate = useNavigate()

  const [productCategory, setProductcategory] = useState("amazonproducts");
  const [productName, setProductname] = useState("");
  const [productPrice, setProductprice] = useState("");
  const [productDesc, setProductdesc] = useState("");
  const [productQuantity, setproductQuantity] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [validation, setValidation] = useState(false)

  const formSubmission = async (e) => {
    e.preventDefault()

    if (  productCategory === "" || 
          productName === "" || 
          productPrice === "" || 
          productQuantity === "" || 
          productImage === "" ||
          productDesc === ""
          
        ) {
      setValidation(true)
    } else {

      let productFormData = new FormData()

      productFormData.append("name", productName.toLowerCase())
      productFormData.append("description", productDesc)
      productFormData.append("quantity", productQuantity)
      productFormData.append("price", productPrice)
      productFormData.append("category", productCategory.toLowerCase())
      productFormData.append("image", productImage)

         console.log(productFormData);

           const createProduct = await fetch("http://159.65.21.42:9000/create/product", {
          method: "POST",
          body:productFormData
        })

        if (createProduct.ok) {
          console.log(createProduct);
          alert('Product Created Successfully')
          setProductcategory("")
          setProductname("")
          setProductprice("")
          setProductdesc("")
          setproductQuantity("")
          setProductImage("")
          navigate("/product")
        } else {
          alert('Sorry a problem occured please try again!')
          console.log(createProduct);
        }
      
    }
  }



  return (
    <div className="pages">

      <PageHeader title='Create new product' />

      <div className="new-product-container">
        <form action="">
          <div>
            <label htmlFor=""> Product category </label>
            <input type="text" name="category" id="" placeholder="category name"
              value={productCategory} onChange={(e) => setProductcategory(e.target.value)} disabled/>
              {validation == true && productCategory === ""? <span>* category name is required</span>: null}
          </div>

          <div>
            <label htmlFor="productName">Product Name</label>
            <input type="text" name="name" id="productName" placeholder="product name" 
            value={productName} onChange={(e) => setProductname(e.target.value)}
            />
            {validation == true && productName === ""? <span>* product name is required</span>: null}
          </div>

          <div>
            <label htmlFor="product-price">Product Price</label>
            <input type="number" name="price" id="product-price" placeholder="₦" 
            value={productPrice} onChange={(e) => setProductprice(e.target.value)}/>
            {validation == true && productPrice === ""? <span>* product price is required</span>: null}
          </div>

          <div>
            <label htmlFor="product-quantity">Product Quantity</label>
            <input type="number" name="quantity" id="product-quantity" placeholder="quantity" 
            value={productQuantity} onChange={(e) => setproductQuantity(e.target.value)}/>
            {validation == true && productQuantity === ""? <span>* product quantity is required</span>: null}
          </div>

          <div>
            <label htmlFor="product-desc">Product Description</label>
            <textarea name="description" id="" cols="30" rows="10" placeholder="Tell us about your product" 
             value={productDesc} onChange={(e) => setProductdesc(e.target.value)}></textarea>
              {validation == true && productDesc === ""? <span>* product description is required</span>: null}
          </div>

            <div>
          <input type="file" name="image" id="product-image"  onChange={(e) => setProductImage(e.target.files[0])}/>
          {validation == true && productImage === "" ? <span>* product image is required</span>: null}
            </div>

          <button onClick={formSubmission}>Create product</button>
        </form>
      </div>

    </div>
  )
}

export default Create_product_page


//   name: productName.toLowerCase(),
      //   image: productImage,
      //   category: productCategory.toLowerCase(),
      //   price: productPrice,
      //   quantity: productQuantity,
      //   description: productDesc
      //   // admin: 'code-coder'