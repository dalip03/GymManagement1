import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import Team from './components/Team';
import Classes from './components/Classes';
import Services from './components/Services';
import BmiCalculator from './components/bmiCalculator';
import Plans from './components/Plans';
import SignUp from './components/SignUp';
import Product from './components/Products/Product';
// import Login from './components/Login/login';
// import SignInForm from './components/Login/SignInForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/plans" element={<Plans/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/classes" element={<Classes/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/bmi" element={<BmiCalculator/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path='/product' element={<Product/>}/>
      {/* <Route path="/login" element={<SignInForm/>}/> */}


    </Routes>
  </BrowserRouter>
  );
}

export default App;
