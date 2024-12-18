import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Navbar/Sidebar';
import Submenu from './Components/Navbar/Submenu';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import salons_banner from './Components/Assets/banner_salons.png'
import canapes_banner from './Components/Assets/banner_canapes.png'
import chamber_banner from './Components/Assets/banner_chamber.png'
import chaises_banner from './Components/Assets/banner_chaises.png'
import tables_banner from './Components/Assets/banner_tables.png'
import jardin_banner from './Components/Assets/banner_jardin.png'
import meubles_banner from './Components/Assets/banner_meubles.png'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Submenu />

        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/salons' element={<ShopCategory banner={salons_banner} category="salons"/>}/>
          <Route path='/canapes' element={<ShopCategory banner={canapes_banner} category="canapes"/>}/>
          <Route path='/chambre' element={<ShopCategory banner={chamber_banner} category="chambre"/>}/>
          <Route path='/tables' element={<ShopCategory banner={tables_banner} category="tables"/>}/>
          <Route path='/chaises' element={<ShopCategory banner={chaises_banner} category="chaises"/>}/>
          <Route path='/jardin' element={<ShopCategory banner={jardin_banner} category="jardin"/>}/>
          <Route path='/meubles' element={<ShopCategory banner={meubles_banner} category="meubles"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
