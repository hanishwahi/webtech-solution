
import './Style/Style.css'
import './Style/Responsive.css' 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Clients from './Pages/Clients/Clients';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/clients' element={<Clients/>}/>
          <Route path='/blogs' element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
