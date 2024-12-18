import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import LegalNotices from './pages/LegalNotices';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import desktopBackground from './img/hero-bg.jpg';
import tabletBackground from './img/hero-bg-tablette.jpg';
import mobileBackground from './img/hero-bg-mobile.jpg';
import desktopBanner from './img/banner.jpg';
import tabletBanner from './img/banner-tablette.jpg';
import mobileBanner from './img/banner-mobile.jpg';
import coder from './img/blog/coder.jpg';
import croissance from './img/blog/croissance.jpg';
import googleImg from './img/blog/google.jpg';
import screens from './img/blog/screens.jpg';
import seo from './img/blog/seo.jpg';
import technos from './img/blog/technos.png';




export default function App() {

// State pour changer le background de Home et l'image Banner pour les autres composants selon la largeur du navigateur
  const [assets, setAssets] = useState({})

// State pour les données personnelles qui permet d'incruster les projets téléchargés depuis l'API
const [profileData, setProfileData] = useState({
    name:"john doe",
    address1: "40 rue laure diebold",
    address2: "69009 lyon, france",
    phone:"06 20 30 40 50",
    email: "john.doe@gmail.com",
    title: "étudiant du CEF",
    imgSource: "Pixabay",
    projects:[],
    articles:[{
      id:0,
      title: "Coder son site en HTML/CSS",
      description: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer nec elementum dolor.",
      date:"Publié le 22 août 2022",
      imgSrc: coder,
    },
    {
      id:1,
      title: "Vendre ses produits sur le web",
      description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      date:"Publié le 20 août 2022",
      imgSrc: croissance,
    },
    {
      id:2,
      title: "Se positionner sur Google",
      description: "Pellentesque placerat bibendum lacus at congue. Vivamus non eros ut mauris accumsan lacinia eu posuere lacus.",
      date:"Publié le 1 août 2022",
      imgSrc: googleImg,
    },
    {
      id:3,
      title: "Coder en Responsive design",
      description: "Phasellus congue quam magna, at gravida est maximus ut, phasellus finibus accumsan nibh nec varius.",
      date:"Publié le 31 juillet 2022",
      imgSrc: screens,
    },
    {
      id:4,
      title: "Techniques de référencement",
      description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      date:"Publié le 30 juillet 2022",
      imgSrc: seo,
    },
    {
      id:5,
      title: "Apprendre à coder",
      description: "nteger tincidunt vel tortor sit amet gravida. Phasellus accumsan ligula leo, nec dignissim sem bibendum sed.",
      date:"Publié le 12 juillet 2022",
      imgSrc: technos,
    },
  ],
    skills:  [{
        id: 1,
        name: "html5",
        rate:"90",
        skillStyle:{
          backgroundColor: "rgb(135, 206, 235)",
          width: "90%",
        },
      },
      {
        id: 2,
        name: "css3",
        rate:"50",
        skillStyle:{
          backgroundColor: "rgb(175, 225, 175)",
          width: "50%",
        },
      },
      {
        id: 3,
        name: "javascript",
        rate:"70",
        skillStyle:{
          backgroundColor: "rgb(228, 208, 10)",
          width: "70%",
        },
      },
      {
        id: 4,
        name: "php",
        rate:"60",
        skillStyle:{
          backgroundColor: "rgb(255, 87, 51)",
          width: "60%",
        }
      },
      {
        id: 5,
        name: "react",
        rate:"50",
        skillStyle:{
          backgroundColor: "rgb(144, 12, 63)",
          width: "50%",
        }
      }
    ]       
  });

  const getData = async () => {
  const res = await fetch("https://api.github.com/users/lhefdh/repos");
  const json = await res.json();
  let arr= json;
  // selection des projets que nous vouslons afficher dans Portfolio
  let selectedProjects = arr.filter((project)=> ( project.name==="PortfolioCEF" || project.name==="reactproject" || project.name==="Maquette-Probeats")) ;
  // incruster les projes dans le state profileData sans changer les autres données
  setProfileData({...profileData, projects:selectedProjects});
  };

      
  

  // declaration des liens du background et de la bannière pour chaque viewport
  const desktopAssets={
    homeBackgroundUrl: {
      backgroundImage: `url(${desktopBackground})`,
    },
    bannerSrc: desktopBanner,
  }
  const tabletAssets={
    homeBackgroundUrl:{
      backgroundImage: `url(${tabletBackground})`,
    },
    bannerSrc: tabletBanner,
  }
  const mobileAssets={
    homeBackgroundUrl:{
      backgroundImage: `url(${mobileBackground})`,
    },
    bannerSrc: mobileBanner,
  }

  // changement du State selon la largeur du navigateur
  function getBackgroundSize(width) { 
    if (width >= 992) {
      setAssets(desktopAssets);
    }  else if ((width <= 767)) {
      setAssets(mobileAssets);
    } else {
      setAssets(tabletAssets);
    }
  }



  useEffect(() => {
    getData();
    // changement du state dès le chargement de la page
    getBackgroundSize(window.innerWidth);
  },[])

  // changement du state si l'écran est redimensionné 
  window.addEventListener("resize", () => {getBackgroundSize(window.innerWidth)});

  let pagesPaths=[
    {path:"/reactproject/", pageName:"accueil"},
    {path:"/pages/Services", pageName:"services"},
    {path:"/pages/Portfolio", pageName:"mes réalisations"},
    {path:"/pages/Blog", pageName:"blog"},
    {path:"/pages/Contact", pageName:"contact"},
    {path:"/pages/LegalNotices", pageName:"mentions légales"},
    {path:"/pages/404", pageName:"Not Found"}
  ]
  let location = useLocation();
  let notFound = (location.pathname!==pagesPaths[0].path&&location.pathname!==pagesPaths[1].path&&
    location.pathname!==pagesPaths[2].path&&location.pathname!==pagesPaths[3].path&&
    location.pathname!==pagesPaths[4].path&&location.pathname!==pagesPaths[5].path);
  
  return (
    <div className="App">
    
      <Header name={profileData.name} notFound={notFound} pagesPaths={pagesPaths}/>
      <Routes>
        <Route path={pagesPaths[0].path} element={<Home homeBackgroundUrl={assets.homeBackgroundUrl} profileData={profileData}/>} />
        <Route path={pagesPaths[1].path} element={<Services ImgSrc={assets.bannerSrc}/>} />
        <Route path={pagesPaths[2].path} element={<Portfolio ImgSrc={assets.bannerSrc} profileData={profileData}/>} />
        <Route path={pagesPaths[3].path} element={<Blog ImgSrc={assets.bannerSrc} profileData={profileData}/>} />
        <Route path={pagesPaths[4].path} element={<Contact profileData={profileData}/>} />
        <Route path={pagesPaths[5].path} element={<LegalNotices profileData={profileData}/>} />
        <Route path={pagesPaths[6].path} element={<NotFound />}/>
        <Route path="*" element={<NotFound pagesPaths={pagesPaths} />} />
      </Routes>
      <Footer notFound={notFound} pagesPaths={pagesPaths} profileData={profileData}/>
    </div>
  );
}