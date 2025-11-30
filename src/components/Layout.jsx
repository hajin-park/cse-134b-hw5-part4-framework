import Navigation from './Navigation';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';

function Layout({ children, mainClassName = '' }) {
  return (
    <div className="site-frame">
      {/* Transition lines for view transition animation */}
      <div className="transition-line transition-line-1"></div>
      <div className="transition-line transition-line-2"></div>
      <div className="transition-line transition-line-3"></div>
      
      <Navigation />
      
      <main className={`site-frame-body ${mainClassName}`}>
        {children}
      </main>
      
      <Footer />
      
      <ThemeToggle />
    </div>
  );
}

export default Layout;

