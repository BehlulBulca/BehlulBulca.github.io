import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage'; // ProjectDetailPage import edildi
import './App.css';

// Layout component now always includes Navbar and Footer
const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app-layout">
      <Navbar /> {/* Navbar her zaman render edilecek */}
      <main className={`main-content ${isHomePage ? '' : 'main-content-padded'}`}>
        <Outlet />
      </main>
      <Footer /> {/* Footer her zaman render edilecek */}
    </div>
  );
};

function App() {
  return (
    <Router> {/* basename="/website" kaldırıldı */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          {/* Path'ler İngilizce olacak şekilde güncellenecek */}
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} /> {/* Yeni proje detay rotası */}
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
