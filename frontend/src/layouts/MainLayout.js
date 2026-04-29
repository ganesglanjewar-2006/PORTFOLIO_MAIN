import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

const MainLayout = ({ children, data }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="layout-container">
      <Head>
        <title>{data?.name} | {data?.headline}</title>
        <meta name="description" content={data?.bio} />
        <meta name="keywords" content="Full Stack Developer, MERN Stack, React, Next.js, Ganesh Lanjewar, Software Engineer, Portfolio, Pune" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ganeshlanjewar.dev/" />
        <meta property="og:title" content={`${data?.name} | Portfolio`} />
        <meta property="og:description" content={data?.bio} />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${data?.name} | Portfolio`} />
        <meta property="twitter:description" content={data?.bio} />
        <meta property="twitter:image" content="/og-image.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {data?.name?.split(' ')[0]}
          </motion.div>

          <div className="nav-links">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="nav-link"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <motion.a 
            href="#contact" 
            className="nav-cta"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Let's Talk
          </motion.a>
        </div>
      </nav>

      <main>{children}</main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@400;600;700;800&display=swap');

        :root {
          --bg-color: #020617;
          --header-bg: rgba(2, 6, 23, 0.8);
          --text-primary: #F8FAFC;
          --text-secondary: #94A3B8;
          --accent-color: #38BDF8;
          --gold-accent: #FACC15;
          --accent-glow: rgba(56, 189, 248, 0.1);
          --gold-glow: rgba(250, 204, 21, 0.05);
          --card-bg: #0F172A;
          --card-border: rgba(255, 255, 255, 0.05);
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
        }

        body {
          background-color: var(--bg-color);
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          overflow-x: hidden;
          background-image: 
            radial-gradient(circle at 80% 20%, var(--gold-glow) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, var(--accent-glow) 0%, transparent 40%);
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar.scrolled {
          padding: 1rem 0;
          background: rgba(2, 6, 23, 0.7);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #FFFFFF;
          cursor: pointer;
        }

        .logo span {
          color: var(--gold-accent);
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: var(--gold-accent);
        }

        .nav-cta {
          background: var(--gold-accent);
          color: #020617;
          padding: 0.6rem 1.2rem;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(250, 204, 21, 0.3);
        }

        h1, h2, h3 {
          font-family: 'Outfit', sans-serif;
        }

        .layout-container {
          min-height: 100vh;
        }

        main {
          padding-top: 5rem;
        }

        .glass {
          background: rgba(17, 24, 39, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid var(--card-border);
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
      `}</style>
    </div>
  );
};

export default MainLayout;

