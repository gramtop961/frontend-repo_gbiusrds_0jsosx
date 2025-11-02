import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import FranchiseEPS from './components/FranchiseEPS.jsx';
import FranchiseIndia1 from './components/FranchiseIndia1.jsx';
import FranchiseFindi from './components/FranchiseFindi.jsx';
import FranchiseHitachi from './components/FranchiseHitachi.jsx';
import Blog from './components/Blog.jsx';
import BlogPost from './components/BlogPost.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/franchise/eps" element={<FranchiseEPS />} />
            <Route path="/franchise/india1" element={<FranchiseIndia1 />} />
            <Route path="/franchise/findi" element={<FranchiseFindi />} />
            <Route path="/franchise/hitachi" element={<FranchiseHitachi />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
