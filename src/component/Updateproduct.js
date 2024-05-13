import { useEffect, useState } from "react"
import PageHeader from "../utilities/PageHeader"
import { useNavigate, useParams } from "react-router-dom";

function Updateproduct() {
  const {productid} = useParams()
  const navigate = useNavigate()

  const [productCategory, setProductcategory] = useState("");
  const [productName, setProductname] = useState("");
  const [productPrice, setProductprice] = useState("");
  const [productDesc, setProductdesc] = useState("");
  const [productQuantity, setproductQuantity] = useState("");
  const [productImage, setProductImage] = useState(null);
  // const [validation, setValidation] = useState(false)

  useEffect(()=>{
    const getProductDate = async ()=>{
     const  resp = await fetch("http://159.65.21.42:9000/product/"+productid)
     const data = await resp.json()
     setProductcategory(data.category)
     setProductname(data.name)
     setProductprice(data.price)
     setproductQuantity(data.quantity)
     setProductdesc(data.description)
     setProductImage(data.image)
    }
    
    getProductDate()
  }, [])


  const formSubmission = async (e) => {
    e.preventDefault()

    if (productCategory === "" ||
      productName === "" ||
      productPrice === "" ||
      productQuantity === "" ||
      productImage === "" ||
      productDesc === ""

    ) {
      // setValidation(true)
    } else {

      let productFormData = new FormData()

      productFormData.append("name", productName.toLowerCase())
      productFormData.append("description", productDesc)
      productFormData.append("quantity", productQuantity)
      productFormData.append("price", productPrice)
      productFormData.append("category", productCategory.toLowerCase())
      productFormData.append("image", productImage)

      console.log(productFormData);

      const upatedProduct = await fetch("http://159.65.21.42:9000/update/product/"+productid, {
        method: "put",
        body: productFormData
      })

      if (upatedProduct.ok) {
        // console.log(upatedProduct);
        alert('Product Updated Successfully')
        setProductcategory("")
        setProductname("")
        setProductprice("")
        setProductdesc("")
        setproductQuantity("")
        setProductImage("")
        navigate("/product")
      } else {
        alert('Sorry a problem occured please try again!')
        console.log(upatedProduct.status);
      }

    }
  }



  return (
    <div className="pages">

      <PageHeader title='Update Product' />

      <div className="new-product-container">
        <form action="">
          <div>

            <label htmlFor=""> Product category </label>
            <input type="text" name="category" id="" placeholder="category name"
              value={productCategory} onChange={(e) => setProductcategory(e.target.value)} readOnly/>
            {/* {validation == true && productCategory === "" ? <span>* category name is required</span> : null} */}
          </div>

          <div>
            <label htmlFor="productName">Product Name</label>
            <input type="text" name="name" id="productName" placeholder="product name"
              value={productName} onChange={(e) => setProductname(e.target.value)}
            />
            {/* {validation == true && productName === "" ? <span>* product name is required</span> : null} */}
          </div>

          <div>
            <label htmlFor="product-price">Product Price</label>
            <input type="number" name="price" id="product-price" placeholder="₦"
              value={productPrice} onChange={(e) => setProductprice(e.target.value)} />
            {/* {validation == true && productPrice === "" ? <span>* product price is required</span> : null} */}
          </div>

          <div>
            <label htmlFor="product-quantity">Product Quantity</label>
            <input type="number" name="quantity" id="product-quantity" placeholder="quantity"
              value={productQuantity} onChange={(e) => setproductQuantity(e.target.value)} />
            {/* {validation == true && productQuantity === "" ? <span>* product quantity is required</span> : null} */}
          </div>

          <div>
            <label htmlFor="product-desc">Product Description</label>
            <textarea name="description" id="" cols="30" rows="10" placeholder="Tell us about your product"
              value={productDesc} onChange={(e) => setProductdesc(e.target.value)}></textarea>
            {/* {validation == true && productDesc === "" ? <span>* product description is required</span> : null} */}
          </div>

          <div>
            <input type="file" name="image" id="product-image" onChange={(e) => setProductImage(e.target.files[0])} />
            {/* {validation == true && productImage === "" ? <span>* product image is required</span> : null} */}
          </div>

          <button onClick={formSubmission}>Update product</button>
        </form>
      </div>

    </div>
  )
}

export default Updateproduct