import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Beranda from './pages/Beranda';
import Tentang from './pages/Tentang';
import Produk from './pages/Produk';
import ProdukDetail from './pages/ProdukDetail';
import Program from './pages/Program';
import Berita from './pages/Berita';
import BeritaDetail from './pages/BeritaDetail';
import Kontak from './pages/Kontak';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();

  import('react').then((React) => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  });

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/produk/:slug" element={<ProdukDetail />} />
            <Route path="/program" element={<Program />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/berita/:slug" element={<BeritaDetail />} />
            <Route path="/kontak" element={<Kontak />} />
            {/* Fallback route */}
            <Route path="*" element={<Beranda />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
