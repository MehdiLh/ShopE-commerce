import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin';


const App = ({onLogout}) => {
  return (
    <div>
      <Navbar onLogout={onLogout} />
      <Admin />
    </div> 
  );
};

export default App;