import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './component/Navigation';
import Create_product_page from './component/Create_product_page';
import Create_user_page from './component/Create_user_page'
import Product_page from './component/Product_page';
import Users_page from './component/Users_page'
import Home from './component/Home';
import UserDetail from './pages/UserDetail';
import Updateproduct from './component/Updateproduct';
import Updateuser from './component/Updateuser';



function App() {
  return (
    <div className="App dashboard-container">
      <Navigation />

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/create-product' exact element={<Create_product_page />} />
        <Route path='/create-user' exact element={<Create_user_page />} />
        <Route path='/product' exact element={<Product_page />} />
        <Route path='/user' exact element={<Users_page />} />
        <Route path='user/:userid' exact element={<Updateuser />} />
        <Route path='product/:productid' exact element={<Updateproduct />} />
      </Routes>

    </div>
  );
}

export default App;
