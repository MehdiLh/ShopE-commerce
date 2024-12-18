import React, { createContext, useState, useContext, useEffect } from "react";
import sublinks from '../Components/Navbar/data';
const AppContext = React.createContext();

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    } 
    return cart;
}

const ShopContextProvider = (props) => {

  const [all_product,setAll_Product] = useState([]);
  const [cartItems,setCartItems] = useState(getDefaultCart());

  useEffect(()=>{
    fetch('http://localhost:4000/allproducts')
    .then((response)=>response.json())
    .then((data)=>setAll_Product(data));

    const authToken = localStorage.getItem('auth-token');
    if(authToken){
      fetch('http://localhost:4000/getcart',{
        method:'POST',
        headers:{
          Accept: 'application/form-data',
          'auth-token': authToken,
          'Content-Type': 'application/json',
        },
        body: "",
      })
      .then((response)=>response.json())
      .then((data)=>setCartItems(data));
    }
  },[]);
    
  const addToCart = (itemId) =>{
    setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}));
    const authToken = localStorage.getItem('auth-token');
    if(authToken){
      fetch('http://localhost:4000/addtocart',{
        method:'POST',
        headers:{
          Accept: 'application/form-data',
          'auth-token': authToken,
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({"itemId": itemId}),
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data));
    }
  }

  const removeFromCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]: prev[itemId]-1}));
    const authToken = localStorage.getItem('auth-token');
    if(authToken){
      fetch('http://localhost:4000/removefromcart',{
        method:'POST',
        headers:{
          Accept: 'application/form-data',
          'auth-token': authToken,
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({"itemId": itemId}),
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data));
    }
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  }
    
  const getTotalCartItems = () =>{
    let totalItem = 0;
    for(const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, ShopContextProvider };