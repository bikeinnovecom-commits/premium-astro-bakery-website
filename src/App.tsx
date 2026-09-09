import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Produkte from './pages/Produkte';
import Geschichte from './pages/Geschichte';
import Kontakt from './pages/Kontakt';

export default function App() {
  const [page, setPage] = useState<string>(() => {
    const h = window.location.hash.replace('#', '');
    return h || 'home';
  });

  const navigate = (p: string) => {
    setPage(p);
    window.location.hash = p;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace('#', '') || 'home';
      // Only accept known pages, otherwise treat as anchor
      if (['home', 'produkte', 'geschichte', 'kontakt'].includes(h)) {
        setPage(h);
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7efe2] text-[#3b2617]">
      <Nav current={page} onNavigate={navigate} />
      <main key={page}>
        {page === 'home' && <Home onNavigate={navigate} />}
        {page === 'produkte' && <Produkte />}
        {page === 'geschichte' && <Geschichte />}
        {page === 'kontakt' && <Kontakt />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
