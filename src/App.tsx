import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProgramsPage from './pages/ProgramsPage';
import LabTestingPage from './pages/LabTestingPage';
import GroupProgramsPage from './pages/GroupProgramsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import HealthQuizPage from './pages/HealthQuizPage';
import ChatWidget from './components/ChatWidget';
import StickyCTA from './components/StickyCTA';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const location = useLocation();
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Show chat widget after 5 seconds
    const timer = setTimeout(() => {
      setShowChat(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/lab-testing" element={<LabTestingPage />} />
          <Route path="/group-programs" element={<GroupProgramsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/health-quiz" element={<HealthQuizPage />} />
        </Routes>
      </main>
      <Footer />
      {showChat && <ChatWidget />}
      <StickyCTA />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
