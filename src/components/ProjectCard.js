import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Code2, Layers } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -12 }}
    >
      <div className="card-shine"></div>
      
      <div className="card-header">
        <div className="project-icon-box">
          <Layers size={24} className="project-icon" />
        </div>
        <h3 className="project-name">{project.name}</h3>
      </div>

      <div className="tech-container">
        <div className="tech-label">
          <Code2 size={12} />
          <span>Technologies</span>
        </div>
        <div className="tech-stack">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-badge">{t}</span>
          ))}
        </div>
      </div>

      <div className="card-body">
        <p className="description">{project.description}</p>
        
        <div className="usage-terminal">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title">
              <Terminal size={12} />
              <span>usage_guide.sh</span>
            </div>
          </div>
          <div className="terminal-content">
            <span className="terminal-prompt">$</span>
            <p className="usage-text">{project.howToUse}</p>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <div className="button-grid">
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <ExternalLink size={16} />
            Explore Live
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
        </div>
      </div>

      <style jsx>{`
        .project-card {
          background: linear-gradient(145deg, rgba(17, 24, 39, 0.9), rgba(11, 15, 26, 0.95));
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .project-card:hover {
          border-color: rgba(56, 189, 248, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(56, 189, 248, 0.1);
        }

        .card-shine {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
          pointer-events: none;
          transition: transform 0.6s ease;
        }

        .project-card:hover .card-shine {
          transform: translate(50%, 50%);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .project-icon-box {
          width: 48px;
          height: 48px;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #38BDF8;
        }

        .project-name {
          font-size: 1.6rem;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .tech-container {
          margin-bottom: 2rem;
        }

        .tech-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.7rem;
          font-weight: 700;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-badge {
          background: rgba(31, 41, 55, 0.5);
          color: #E2E8F0;
          padding: 0.35rem 0.8rem;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.2s ease;
        }

        .project-card:hover .tech-badge {
          border-color: rgba(56, 189, 248, 0.2);
          color: #38BDF8;
        }

        .card-body {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .description {
          color: #94A3B8;
          font-size: 1rem;
          line-height: 1.7;
          margin: 0;
        }

        .usage-terminal {
          background: #030712;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 14px;
          overflow: hidden;
        }

        .terminal-header {
          background: rgba(255, 255, 255, 0.03);
          padding: 0.6rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .terminal-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .red { background: #FF5F56; }
        .yellow { background: #FFBD2E; }
        .green { background: #27C93F; }

        .terminal-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.7rem;
          font-family: monospace;
          color: #64748B;
        }

        .terminal-content {
          padding: 1.25rem;
          display: flex;
          gap: 0.75rem;
          font-family: 'Fira Code', monospace;
        }

        .terminal-prompt {
          color: #27C93F;
          font-weight: bold;
        }

        .usage-text {
          color: #CBD5E1;
          font-size: 0.85rem;
          line-height: 1.6;
          margin: 0;
        }

        .card-footer {
          margin-top: 3rem;
        }

        .button-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 1rem;
        }

        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.9rem;
          border-radius: 14px;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-primary {
          background: #38BDF8;
          color: #030712;
          box-shadow: 0 4px 15px rgba(56, 189, 248, 0.2);
        }

        .btn-primary:hover {
          background: #7DD3FC;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(56, 189, 248, 0.3);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.03);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: #38BDF8;
          transform: translateY(-3px);
        }

        @media (max-width: 640px) {
          .button-grid {
            grid-template-columns: 1fr;
          }
          .project-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;
