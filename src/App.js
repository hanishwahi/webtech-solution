
import './Style/Style.css'
import './Style/Responsive.css'  
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import WebDevelopment from './Pages/Services/WebDevelopment/WebDevelopment';
import AppDevelopment from './Pages/Services/AppDevelopment/AppDevelopment';
import Clients from './Pages/Clients/Clients'; 
import Contact from './Pages/ContactForm/Contact';
import BlogPage from './Pages/Blog-New/BlogPage';
import Blog1 from './Pages/Blog-New/blog-detail/blog-1';
import Blog2 from './Pages/Blog-New/blog-detail/Blog-2';
import Blog3 from './Pages/Blog-New/blog-detail/Blog-3';
import OurTeam from './Pages/Our Team/OurTeam';
import Portfolio from './Pages/Portfolio/Portfolio';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import DigitalMarketing from './Pages/Services/DigitalMarketing/DigitalMarketing';
import GraphicDesigning from './Pages/Services/GraphicDesigning/GraphicDesigning';
import SEO from './Pages/Services/DigitalMarketing/SEO/SEO';
import PPC from './Pages/Services/DigitalMarketing/PPC/PPC';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/web-development' element={<WebDevelopment/>}/>
          <Route path='/app-development' element={<AppDevelopment/>}/>
          <Route path='/graphic-designing' element={<GraphicDesigning/>}/>
          <Route path='/digital-marketing' element={<DigitalMarketing/>}/>
          <Route path='/digital-marketing/seo' element={<SEO/>}/>
          <Route path='/digital-marketing/ppc' element={<PPC/>}/>
          <Route path='/clients' element={<Clients/>}/> 
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='/our-team' element={<OurTeam/>} />
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/blogs' element={<BlogPage />} />
        <Route path='/blogs/Golden-Rules-for-Elevating-Your-Creative-Vision' element={<Blog1 />} />
        <Route path='/blogs/How-to-Improve-Your-Website-Visibility' element={<Blog2 />} />
        <Route path='/blogs/Exploring-the-Future-of-Website-Development' element={<Blog3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
