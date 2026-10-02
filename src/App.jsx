import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ProductsSection from './components/ProductsSection';
import BlogSection from './components/BlogSection';
import WhyChooseUs from './components/WhyChooseUs';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import { navItems, stats, products, blogPosts, benefits } from './data/homeData';

function App() {
  return (
    <div className="page-shell">
      <Navbar navItems={navItems} />
      <main>
        <Hero />
        <StatsSection stats={stats} />
        <ProductsSection products={products} />
        <WhyChooseUs benefits={benefits} />
        <BlogSection posts={blogPosts} />
        <CtaBanner />
      </main>
      <Footer navItems={navItems} />
    </div>
  );
}

export default App;
