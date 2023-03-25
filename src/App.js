import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
                    <Routes>
                        {/* <Route path="/" element={}/> */}
                        <Route path="/" element={<Home/>}/>
                    </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
