import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Nabar"; 
import Archive from "./component/Archive";



function App() {
  return (
    <>
      <Router>
      <Navbar/>
     
        <Routes>
    
        <Route path="/general" element={<Archive props="general"/>}/>
        <Route path="/buisness" element={ <Archive props="buissness"/>}/>
        <Route path="/entertainment" element={ <Archive props="entertainment"/>}/>
        <Route path="/health" element={ <Archive props="health"/>}/>
        <Route path="/technology" element={ <Archive props="technology"/>}/>
        <Route path="/science" element={ <Archive props="science"/>}/>
        <Route path="/sports" element={ <Archive props="sports"/>}/>
      
      
         </Routes> 
    
      </Router>
    </>
  );
}

export default App;
