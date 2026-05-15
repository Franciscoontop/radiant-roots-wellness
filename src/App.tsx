import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import TestimonialsPage from './components/TestimonialsPage';
import BlogPage from './components/BlogPage';
import FAQPage from './components/FAQPage';
import ShopPage from './components/ShopPage';
import ContactPage from './components/ContactPage';
import AIChatWidget from './components/AIChatWidget';
import WelcomePopup from './components/WelcomePopup';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'testimonials' | 'blog' | 'faq' | 'shop' | 'contact';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Scroll to top on page change
  const navigateTo = (page: string) => {
    setActivePage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show popup once after delay on home page
  useEffect(() => {
    if (activePage === 'home' && !popupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        setPopupShown(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [activePage, popupShown]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={navigateTo} />;
      case 'about':
        return <AboutPage setActivePage={navigateTo} />;
      case 'services':
        return <ServicesPage setActivePage={navigateTo} />;
      case 'testimonials':
        return <TestimonialsPage setActivePage={navigateTo} />;
      case 'blog':
        return <BlogPage />;
      case 'faq':
        return <FAQPage setActivePage={navigateTo} />;
      case 'shop':
        return <ShopPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setActivePage={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen" style={{ background: '#F7F3E9' }}>
      {/* Navigation */}
      <Navigation activePage={activePage} setActivePage={navigateTo} />

      {/* Page content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer setActivePage={navigateTo} />

      {/* Sticky CTA button */}
      <div className="sticky-cta hidden lg:block">
        <button
          onClick={() => navigateTo('contact')}
          className="btn-primary"
          style={{
            background: '#C1876B',
            borderRadius: '50px',
            padding: '14px 24px',
            fontSize: '14px',
            boxShadow: '0 8px 32px rgba(193,135,107,0.4)',
          }}
        >
          🌿 Book Free Call
        </button>
      </div>

      {/* AI Chat Widget */}
      <AIChatWidget />

      {/* Welcome Popup */}
      {showPopup && <WelcomePopup setActivePage={navigateTo} />}

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-28 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{
            background: 'rgba(74,103,65,0.9)',
            boxShadow: '0 4px 16px rgba(74,103,65,0.3)',
            border: 'none',
            cursor: 'pointer',
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} color="white" />
        </button>
      )}
    </div>
  );
}
