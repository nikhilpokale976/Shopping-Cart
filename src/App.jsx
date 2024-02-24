import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";






const App = () => {
  return ( 
          <div >
                  <div className="bg-slate-900 w-full ">
                  <Navbar/>
                  </div>
                <div>
                  <Routes>
                            <Route path="/" element={<Home/>}></Route>
                            <Route path="/cart" element={<Cart/>}/>
                  </Routes>
                  </div>

          </div>


  )
};

export default App;
