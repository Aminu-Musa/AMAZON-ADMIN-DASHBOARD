import PageHeader from "../utilities/PageHeader"



function Home() {
  return (
    <div className="pages">
      <PageHeader title='Dashboard' />
      <p></p>
      <div className="home-container">
        <div className="box total-products">
          <h3>Total Product</h3>
          <p>10 </p>
        </div>
        <div className="box total-users">
          <h3>Total users</h3>
          <p>20</p>
          </div>
        <div className="box total-products-in-cart">
        <h3>Total product in cart</h3>
          <p>60</p>
        </div>
      </div>

    </div>
  )
}

export default Home