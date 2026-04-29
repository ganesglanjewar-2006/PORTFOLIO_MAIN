import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const { data } = useSelector((state) => state.portfolio);

  return (
    <MainLayout data={data}>
      <Hero data={data} />
      
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-card glass">
            <h2 className="section-title left">About Me</h2>
            <p className="about-text">{data.about}</p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {data.projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="achievements-section">
        <div className="container">
          <h2 className="section-title">Achievements & Awards</h2>
          <div className="achievements-grid">
            {data.achievements.map((ach, index) => (
              <motion.div 
                key={index} 
                className="achievement-card glass"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="ach-header">
                  <h3 className="ach-title">{ach.title}</h3>
                  <span className="ach-year">{ach.year}</span>
                </div>
                <p className="ach-description">{ach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Core Technologies</h2>
          <div className="skills-cloud">
            {data.skills.map((skill, index) => (
              <span key={index} className="skill-tag glass">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {data.education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="education-card glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="edu-header">
                  <div className="edu-info">
                    <h3 className="edu-institution">{edu.institution}</h3>
                    <p className="edu-degree">
                      {edu.degree}
                      {edu.field && ` in ${edu.field}`}
                    </p>
                    {edu.score && <p className="edu-score" style={{ color: '#94A3B8', marginTop: '0.5rem', fontWeight: 600 }}>Score: {edu.score}</p>}
                  </div>
                  <span className="edu-duration">{edu.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-card glass">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-subtitle">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-method">
                  <span className="method-label">Email</span>
                  <a href={`mailto:${data.email}`} className="method-value">{data.email}</a>
                </div>
                <div className="contact-method">
                  <span className="method-label">Location</span>
                  <span className="method-value">{data.location}</span>
                </div>
              </div>

              <div className="contact-actions">
                <a href={`mailto:${data.email}`} className="contact-btn">
                  Send Message
                </a>
                <div className="social-mini-links">
                  <a href={data.github} target="_blank" rel="noopener noreferrer">Github</a>
                  <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {data.name}. Built with Next.js & Redux.</p>
        </div>
      </footer>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          font-family: 'Outfit', sans-serif;
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 4rem;
          text-align: center;
          color: #FFFFFF;
          letter-spacing: -0.02em;
        }

        .section-title.left {
          text-align: left;
          margin-bottom: 1.5rem;
        }

        .about-section {
          padding: 6rem 0;
          background-color: var(--bg-color);
        }

        .about-card {
          padding: 4rem;
          background: rgba(17, 24, 39, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 32px;
          backdrop-filter: blur(20px);
        }

        .about-text {
          white-space: pre-line;
          color: #94A3B8;
          font-size: 1.25rem;
          line-height: 1.8;
          max-width: 800px;
        }

        .projects-section {
          padding: 10rem 0;
          background: rgba(3, 7, 18, 0.5);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2.5rem;
        }

        .achievements-section {
          padding: 10rem 0;
        }

        .achievements-grid {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .achievement-card {
          padding: 2.5rem;
          background: rgba(17, 24, 39, 0.4);
          border: 1px solid rgba(56, 189, 248, 0.1);
          border-radius: 24px;
          transition: all 0.3s ease;
        }

        .achievement-card:hover {
          border-color: #38BDF8;
          transform: translateX(10px);
          background: rgba(56, 189, 248, 0.03);
        }

        .ach-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .ach-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #FFFFFF;
        }

        .ach-year {
          background: rgba(56, 189, 248, 0.1);
          color: #38BDF8;
          padding: 0.4rem 1rem;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .ach-description {
          color: #94A3B8;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .skills-section {
          padding: 10rem 0;
          background-color: var(--bg-color);
        }

        .skills-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .skill-tag {
          padding: 1rem 2rem;
          font-weight: 700;
          font-size: 1rem;
          color: #CBD5E1;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
        }

        .skill-tag:hover {
          border-color: #38BDF8;
          color: #38BDF8;
          background: rgba(56, 189, 248, 0.05);
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .education-section {
          padding: 10rem 0;
        }

        .education-card {
          padding: 3rem;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
        }

        .edu-institution {
          font-size: 1.8rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
        }

        .edu-degree {
          color: var(--gold-accent);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .edu-duration {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1.2rem;
          border-radius: 100px;
          font-size: 0.9rem;
          font-weight: 700;
          color: #94A3B8;
        }

        .contact-section {
          padding: 10rem 0;
        }

        .contact-card {
          padding: 5rem;
          border-radius: 40px;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-subtitle {
          color: #94A3B8;
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto 4rem auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          text-align: left;
        }

        .contact-method {
          margin-bottom: 2rem;
        }

        .method-label {
          display: block;
          text-transform: uppercase;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #64748B;
          margin-bottom: 0.5rem;
        }

        .method-value {
          font-size: 1.3rem;
          font-weight: 700;
          color: #FFFFFF;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .method-value:hover {
          color: var(--gold-accent);
        }

        .contact-actions {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          justify-content: center;
        }

        .contact-btn {
          background: #FFFFFF;
          color: #020617;
          padding: 1.2rem;
          border-radius: 16px;
          font-weight: 800;
          text-decoration: none;
          text-align: center;
          transition: all 0.3s ease;
        }

        .contact-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
        }

        .social-mini-links {
          display: flex;
          gap: 2rem;
          justify-content: center;
        }

        .social-mini-links a {
          color: #94A3B8;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .social-mini-links a:hover {
          color: var(--gold-accent);
        }

        .footer {
          padding: 6rem 0;
          text-align: center;
          color: #64748B;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .section-title {
            font-size: 2.5rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .edu-header {
            flex-direction: column;
            gap: 1rem;
          }

          .contact-card {
            padding: 3rem 1.5rem;
          }
        }
      `}</style>
    </MainLayout>
  );
}
