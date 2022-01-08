import './App.css';
import React from 'react'
import { Hero } from './components/Hero';
import { Nav } from './components/Navigation/Nav';
import { Shows } from './components/Shows';
import { Discography } from './components/Discography/Discography';
import { Social } from './components/Social';
import { Quote } from './components/Quote';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Shows/>
      <Discography/>
      <About/>
      <Social/>
      <Quote/>
      <Footer/>
    </>
  );
}

export default App;
