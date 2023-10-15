//import logo from './logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { NavBar } from "../components/NavBarHome";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { PoemsColl } from "../components/PoemsColl";
import { Contact } from "../components/Contact";
import { FooterHome } from "../components/FooterHome";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/api")
    .then((res => res.json()))
    .then((data) => {console.log(data)})
  }, [])

  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <PoemsColl />
        <Contact />
        <FooterHome />
    </div>
  );
}

export default App;