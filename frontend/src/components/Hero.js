import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Download } from 'lucide-react';

const Hero = ({ data }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-image-area"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="image-frame">
              <div className="glow-ring"></div>
              <img src={data.profileImage} alt={data.name} className="main-photo" />
            </div>
          </motion.div>

          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="headline">
              Full Stack Developer & Software Engineer
            </div>
            
            <h1 className="name">
              Hi, I'm <span className="highlight">{data.name}</span>
            </h1>
            
            <p className="bio">{data.bio}</p>
            
            <div className="hero-actions">
              <motion.a 
                href="/resume.pdf" 
                target="_blank"
                download="Ganesh_Lanjewar_Resume.pdf"
                className="btn btn-primary"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} /> Download Resume
              </motion.a>
            </div>
            
            <div className="hero-meta">
              <div className="meta-item">
                <MapPin size={18} />
                <span>{data.location}</span>
              </div>
              <div className="meta-item">
                <Mail size={18} />
                <span>{data.email}</span>
              </div>
            </div>

            <div className="social-links">
              <motion.a 
                href={data.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                whileHover={{ y: -5, color: '#FACC15' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </motion.a>
              <motion.a 
                href={data.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                whileHover={{ y: -5, color: '#FACC15' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 8rem 0;
          position: relative;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 6rem;
          align-items: center;
        }

        .headline {
          font-family: 'Outfit', sans-serif;
          color: #FACC15;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          opacity: 0.8;
        }

        .name {
          font-family: 'Outfit', sans-serif;
          font-size: 6rem;
          font-weight: 800;
          line-height: 0.9;
          margin-bottom: 2.5rem;
          letter-spacing: -0.05em;
          color: #FFFFFF;
        }

        .highlight {
          color: #FACC15;
          display: inline-block;
          position: relative;
        }

        .bio {
          font-size: 1.4rem;
          color: #94A3B8;
          line-height: 1.6;
          margin-bottom: 3rem;
          max-width: 650px;
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-weight: 900;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: #FFFFFF;
          color: #020617;
          border: 2px solid #E2E8F0;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-meta {
          display: flex;
          gap: 3.5rem;
          margin-bottom: 4rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #94A3B8;
          font-weight: 600;
          font-size: 1.05rem;
        }

        .meta-item :global(svg) {
          color: #FACC15;
          width: 20px;
          height: 20px;
        }

        .social-links {
          display: flex;
          gap: 2.5rem;
        }

        .social-icon {
          color: #94A3B8;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .social-icon :global(svg) {
          width: 32px;
          height: 32px;
        }

        .social-icon:hover {
          transform: scale(1.2) translateY(-5px);
        }

        /* Image Styling */
        .hero-image-area {
          display: flex;
          justify-content: flex-start;
        }

        .image-frame {
          position: relative;
          width: 480px;
          height: 620px;
          border-radius: 40px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
          transform: translateX(30px);
        }

        .glow-ring {
          position: absolute;
          inset: -30px;
          background: radial-gradient(circle, rgba(250, 204, 21, 0.15) 0%, transparent 70%);
          z-index: -1;
          filter: blur(20px);
        }

        .main-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 30px;
          filter: contrast(1.05) brightness(1.05);
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 5rem;
          }
          .hero-text { margin: 0 auto; }
          .hero-actions, .hero-meta, .social-links { justify-content: center; }
          .name { font-size: 4rem; }
          .hero-image-area { justify-content: center; }
          .image-frame { width: 320px; height: 420px; transform: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
