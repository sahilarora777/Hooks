import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Location from './components/location';
import News from './components/news';
import Count from "./components/count";
import Test from "./components/test";
import Reducer from "./components/reducer";
import Searchbar from "./components/Searchbar";
import Reducer_example from "./components/Reducer_example";
import StopWatch from "./components/StopWatch";
import Form from "./components/form";
import Cart from "./components/cart";
import Product from "./components/product";
import Examplelayout from "./components/examplelayout";
import Header from "./components/Header";
import Layout from "./components/Layout";
import User from "./components/User";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
{/* <Cart/> */}
{/* <Product/> */}
{/* <User/> */}
{/* <Examplelayout/> */}
{/* <Header/> */}

<Contact/>

{/* <Layout/> */}

      {/* <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
     */}
{/* 
<Reducer_example/>
<StopWatch/>
<Form/> */}


          </div>
  );
}

export default App;



