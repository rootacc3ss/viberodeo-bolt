import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/lib/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HomePage } from '@/components/pages/home-page';
import { FeaturesPage } from '@/components/pages/features-page';
import { PurchasePage } from '@/components/pages/purchase-page';
import { NewsPage } from '@/components/pages/news-page';
import { SupportPage } from '@/components/pages/support-page';
import { DashboardPage } from '@/components/pages/dashboard-page';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  // Update click handler for all anchor elements
  useEffect(() => {
    const handleNavigation = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('/')) {
        event.preventDefault();
        navigate(anchor.getAttribute('href') || '/');
      }
    };

    document.addEventListener('click', handleNavigation);
    
    return () => {
      document.removeEventListener('click', handleNavigation);
    };
  }, []);

  // Set page title
  useEffect(() => {
    const pathToTitle: Record<string, string> = {
      '/': 'vibe.rodeo - AI Programming Toolkit',
      '/features': 'Features - vibe.rodeo',
      '/purchase': 'Purchase - vibe.rodeo',
      '/news': 'News - vibe.rodeo',
      '/support': 'Support - vibe.rodeo',
      '/dashboard': 'Dashboard - vibe.rodeo',
    };

    document.title = pathToTitle[currentPath] || 'vibe.rodeo';
  }, [currentPath]);

  const renderPage = () => {
    switch (currentPath) {
      case '/features':
        return <FeaturesPage />;
      case '/purchase':
        return <PurchasePage />;
      case '/news':
        return <NewsPage />;
      case '/support':
        return <SupportPage />;
      case '/dashboard':
        return <DashboardPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;