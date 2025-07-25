import './App.css';
import About from './components/About/About';
import Location from './components/Location/Location.jsx';
import Contact from './components/Contact/Contact';
import Counter from './components/counter/counter';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Project from './components/project/project.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/login.jsx';
import Product from './components/Product/product.jsx';

function App() {
  const name = <h1>Aliza Adhikari</h1>
  const person={
    firstname:"Aliza Adhikari",
    age: 20,
   
  }
   function handleClick(){
      console.log("button is clicked")
    }
  return (
    

    <>
    <Navbar></Navbar>
    <div className="container">
      <Routes>

      <Route path='/contact' element={<Contact />} />
      <Route path='/' element={<Home />} />
      <Route path='/project' element={<Project />} />
      <Route path='/about' element={<About />} />
      <Route path='/home' element={<Home />} />
      <Route path='/location' element={<Location />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/login' element={<Login />} />
      <Route path='/product' element={<Product />} />


      {/* If you have a Login component, import and use it here. Example: <Route path='/login' element={<Login />} /> */}
      </Routes>
      
      {/* Additional content can be added here if needed */}
   </div>
   </>
  );
}

export default App