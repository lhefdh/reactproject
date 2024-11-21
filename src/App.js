import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import LegalNotices from './pages/LegalNotices';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
  let personalData={
    name:"john doe",
    address1: "40 rue laure diebold",
    address2: "69009 lyon, france",
    telephone:"téléphone : 06 20 30 40 50",
  }

  let homePath="/pages/";
  let servicesPath="/pages/Services";
  let projectsPath="/pages/Projects";
  let blogPath="/pages/Blog";
  let contactPath="/pages/Contact";

  return (
    <div className="App">
      <Header homePathInHeader={homePath} servicesPathInHeader={servicesPath} projectsPathInHeader={projectsPath} blogPathInHeader={blogPath} contactPathInHeader={contactPath}/>
      <Routes>
        <Route path="/pages/" element={<Home />} />
        <Route path="/pages/Services" element={<Services />} />
        <Route path="/pages/Projects" element={<Projects />} />
        <Route path="/pages/Blog" element={<Blog />} />
        <Route path="/pages/Contact" element={<Contact />} />
        <Route path="/pages/LegalNotices" element={<LegalNotices />} />
        <Route path="/pages/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer personalData={personalData}/>
    </div>
  );
}

export default App;
