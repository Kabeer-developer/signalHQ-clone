import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Security from "./pages/Security";

import Articles from "./pages/Articles";
import Downloads from "./pages/Downloads";

import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import Evaluate from "./pages/Evaluate";

import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
function App() {

  return (

    <BrowserRouter>


      <Navbar />


      <Routes>


        <Route 
          path="/" 
          element={<Home />} 
        />


        <Route 
          path="/pricing" 
          element={<Pricing />} 
        />


        <Route 
          path="/security" 
          element={<Security />} 
        />



        {/* Resources */}

        <Route 
          path="/blog" 
          element={<Articles />} 
        />


        <Route 
          path="/resources" 
          element={<Downloads />} 
        />
<Route
 path="/evaluate"
 element={<Evaluate/>}
/>
        <Route

path="/demo"

element={<Demo/>}

/>


      <Route
 path="/contact"
 element={<Contact/>}
/>
<Route
 path="/privacy"
 element={<Privacy/>}
/>


<Route
 path="/terms"
 element={<Terms/>}
/>

      </Routes>


    </BrowserRouter>

  )

}


export default App;