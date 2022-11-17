import React, {useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { inistalizeNote } from './reducers/thehivecatlogreducer';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// imported Componentes  
import NavBar from './Components/Inc/navbar';
import Home from './Components/Pages/home';
import Blog from './Components/Pages/blog';
import HowItWorks from './Components/Pages/howItWorks';
import NeedHelp from './Components/Pages/needhelp';
import Pricing from './Components/Pages/pricing';
import Services from './Components/Pages/services';
import Catalog from './Components/Pages/catalog';
import Footer from './Components/Inc/footer';


function App() {
  const newState = useSelector(state=>state.catlog)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(inistalizeNote())
  }, [dispatch])

  return (
    <Container fluid className="App">
      <NavBar />
      {console.log(newState)}
      {/* <h2>HELLO WORLD</h2> */}
      <Routes>

        {/* DEFINED PATHS */}
        <Route path="/Catalog/:id" element={<Catalog />} />
        <Route path="/NeedHelp/:id" element={<NeedHelp />} />
        <Route path="/Services/:id" element={<Services />} />

        {/* SPECIED PATHES */}
        {/* <Route path="/NeedHelp" element={<NeedHelp />} /> */}
        {/* <Route path="/Services" element={ <Services /> } /> */}
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
