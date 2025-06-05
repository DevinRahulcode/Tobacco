
import './App.css'
import Header from '../src/components/Header'
import Hero from './components/Hero'
import Stages from './components/Stages'
import Gallery from "./components/Gallery.jsx";
import GetInTouch from "./components/GetInTouch.jsx";
import Featured from "./components/Featured.jsx";
import Footer from "./components/Footer.jsx";

function App() {


  return (
    <>
      <Header/>
      <Hero/>
      <Stages/>
      <Gallery/>
        <GetInTouch/>
        <Featured/>
        <Footer/>
    </>
  )
}

export default App
