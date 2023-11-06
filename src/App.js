import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/navbar';
import Footer from './component/Footer/Footer';
import Sports from './component/Sports/Sports';
import Notfound from './component/Not-Found/Notfound';
import { Route, Routes } from 'react-router-dom';
import Health from './component/Health/Health';
import Technology from './component/Technology/Technology';
import Business from './component/Business/Business';
import Science from './component/Science/Science';
import NewsDetails from './component/News-details/NewsDetails';
import { useSelector } from 'react-redux';
import Entertainment from './component/Entertainment/Entertainment';


function App() {

  const lang =useSelector((state)=>state.lang);
  const light = useSelector((state)=>state.light);

return (
    <>

      <div  style={{backgroundColor:`${light==true?'black':'HighlightText'}`}} >
        <nav>
          <Navbar/>
        </nav>
          <section className='pt-3' dir={`${lang=="en"?'ltr':'rtl'}`}>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='home' element={<Home/>}/>
              <Route path='sports' element={<Sports/>}/>
              <Route path='health' element={<Health/>}/>
              <Route path="technology" element={<Technology/>}/>
              <Route path='business' element={<Business/>}/>
              <Route path='science' element={<Science/>}/>
              <Route path='entertainment' element={<Entertainment/>}/>
              <Route path='details' element={<NewsDetails/>}>
                <Route path=':id' element={<NewsDetails/>}>
                  <Route path=':category' element={<NewsDetails/>}>
                    <Route path=':country' element={<NewsDetails/>}/>
                  </Route>  
                </Route>  
              </Route>
              <Route path='*' element={<Notfound/>}/>
            </Routes>
          </section>
        <footer dir={`${lang=="en"?'ltr':'rtl'}`} >
          <Footer/>
        </footer>
      </div>

    </>
  );
}

export default App;
