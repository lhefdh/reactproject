import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import Header from './components/Header'
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import LegalNotices from './pages/LegalNotices';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

export default function App() {
const [assets, setAssets] = useState({   
  homeBackgroundUrl:{
    backgroundImage: 'url(../img/hero-bg.jpg)',  
  },
  bannerSrc:{
    src: '../img/banner.jpg',
  }
})

function getBackgroundSize(width) {
    
  if (width >= 992) {
    return "desktop";
    
  } else if (width > 768 && width <= 991 ) {
    return "tablet";
  } else if ((width <= 767)) {
    return "mobile";
  }


}

   /* Variables  */
 /* ---------- */
 let viewportWidth = window.innerWidth;

 // gets the background size as soon as the app runs
   let viewport = getBackgroundSize(
     viewportWidth
   );
   
   // Change the background size
   window.addEventListener("resize", () => {
     viewportWidth = window.innerWidth;
     // gets the background size when window is resized
     viewport = getBackgroundSize(
       viewportWidth
     );
     handleAssets();
 
   });

  
   let desktopAssets={
    homeBackgroundUrl:{
      backgroundImage: 'url(../img/hero-bg.jpg)',  
    },
    bannerSrc:{
      src: '../img/banner.jpg',
    }
  }
  let tabletAssets={
    homeBackgroundUrl:{
      backgroundImage: 'url(../img/hero-bg-tablette.jpg)',
    },
    bannerSrc:{
      src: '../img/banner-tablette.jpg',
    }
  }
  let mobileAssets={
    homeBackgroundUrl:{
      backgroundImage: 'url(../img/hero-bg-mobile.jpg)',
    },
    bannerSrc:{
      src: '../img/banner-mobile.jpg',
    }
  }

   function handleAssets(){
    if (viewport === "desktop") {
      setAssets(desktopAssets);
    } else if (viewport === "tablet") {
      setAssets(tabletAssets);
    } else if (viewport === "mobile") {
      setAssets(mobileAssets);
   }
  }

  

  
  let personalData={
    name:"john doe",
    address1: "40 rue laure diebold",
    address2: "69009 lyon, france",
    phone:"06 20 30 40 50",
    email: "john.doe@gmail.com",
    title: "étudiant du CEF",
    imgSource: "Pixabay",
  }

  let pagesPaths={
    homePath:"/pages/",
    servicesPath:"/pages/Services",
    portfolioPath:"/pages/Portfolio",
    blogPath:"/pages/Blog",
    contactPath:"/pages/Contact",
  }


  


  

  return (
    <div className="App">
      
      <Header pagesPaths={pagesPaths}/>
      <Routes>
        <Route path="/pages/" element={<Home homeBackgroundUrl={assets.homeBackgroundUrl}/>} />
        <Route path="/pages/Services" element={<Services bannerSrc={assets.bannerSrc.src}/>} />
        <Route path="/pages/Portfolio" element={<Portfolio bannerSrc={assets.bannerSrc.src}/>} />
        <Route path="/pages/Blog" element={<Blog bannerSrc={assets.bannerSrc.src}/>} />
        <Route path="/pages/Contact" element={<Contact personalData={assets}/>} />
        <Route path="/pages/LegalNotices" element={<LegalNotices personalData={personalData}/>} />
        <Route path="/pages/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer personalData={personalData} pagesPaths={pagesPaths}/>
    </div>
  );
}