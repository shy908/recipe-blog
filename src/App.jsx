import { useState } from 'react'
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; 
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Categories from './pages/Categories';
import Users from './pages/Users';
import Upload from './pages/Upload';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import RecipeDetail from './components/RecipeDetail';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <ScrollToTop>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/' element={< Navigate to ='/Home' />} />
          <Route path='/Recipes' element={<Recipes/>} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path='/Categories' element={<Categories/>} />
          <Route path='/Users' element={<Users />} />
          <Route path='/Upload' element={<Upload />} />
          <Route path='/Dashboard' element={<Dashboard/>} />
        </Routes>
        </ScrollToTop>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
