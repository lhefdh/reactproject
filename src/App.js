import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
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
      title: "Coder son site en HTML/CSS",
      description: "Réalisation d'un site avec commande en ligne.",
      date:" Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer nec elementum dolor.",
      imgSrc:'../img/blog/coder.jpg',
    },
    {
      title: "Vendre ses produits sur le web",
      description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      date:"Publié le 20 août 2022",
      imgSrc:'../img/blog/croissance.jpg',
    },
    {
      title: "Se positionner sur Google",
      description: "Pellentesque placerat bibendum lacus at congue. Vivamus non eros ut mauris accumsan lacinia eu posuere lacus.",
      date:"Publié le 1 août 2022",
      imgSrc:'../img/blog/google.jpg',
    },
    {
      title: "Coder en Responsive design",
      description: "Phasellus congue quam magna, at gravida est maximus ut, phasellus finibus accumsan nibh nec varius.",
      date:"Publié le 31 juillet 2022",
      imgSrc:'../img/blog/screens.jpg',
    },
    {
      title: "Techniques de référencement",
      description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      date:"Publié le 30 juillet 2022",
      imgSrc:'../img/blog/seo.jpg',
    },
    {
      title: "Apprendre à coder",
      description: "nteger tincidunt vel tortor sit amet gravida. Phasellus accumsan ligula leo, nec dignissim sem bibendum sed.",
      date:"Publié le 12 juillet 2022",
      imgSrc:'../img/blog/technos.png',
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
    homeBackgroundUrl:{
      backgroundImage: 'url(../img/hero-bg.jpg)',  
    },
    bannerSrc: '../img/banner.jpg',
  }
  const tabletAssets={
    homeBackgroundUrl:{
      backgroundImage: 'url(../img/hero-bg-tablette.jpg)',
    },
    bannerSrc: '../img/banner-tablette.jpg',
  }
  const mobileAssets={
    homeBackgroundUrl:{
      backgroundImage: 'url(../img/hero-bg-mobile.jpg)',
    },
    bannerSrc: '../img/banner-mobile.jpg'
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

  let pagesPaths={
    homePath:"/pages/",
    servicesPath:"/pages/Services",
    portfolioPath:"/pages/Portfolio",
    blogPath:"/pages/Blog",
    legalNoticesPath:"/pages/legalNotices",
    contactPath:"/pages/Contact",
    notFoundPath:"/pages/404",
  }


  return (
    <div className="App">
    
      <Header pagesPaths={pagesPaths}/>
      <Routes>
        <Route path={pagesPaths.homePath} element={<Home homeBackgroundUrl={assets.homeBackgroundUrl} profileData={profileData} />} />
        <Route path={pagesPaths.servicesPath} element={<Services ImgSrc={assets.bannerSrc}/>} />
        <Route path={pagesPaths.portfolioPath} element={<Portfolio ImgSrc={assets.bannerSrc} profileData={profileData}/>} />
        <Route path={pagesPaths.blogPath} element={<Blog ImgSrc={assets.bannerSrc} profileData={profileData}/>} />
        <Route path={pagesPaths.contactPath} element={<Contact profileData={profileData}/>} />
        <Route path={pagesPaths.legalNoticesPath} element={<LegalNotices profileData={profileData}/>} />
        <Route path={pagesPaths.notFoundPath} element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer profileData={profileData} pagesPaths={pagesPaths}/>
    </div>
  );
}