import React from 'react';
import Head from 'next/head';

const MainLayout = ({ children, data }) => {
  return (
    <div className="layout-container">
      <Head>
        <title>{data?.name} | Full Stack Developer Portfolio</title>
        <meta name="description" content={data?.bio} />
        <meta name="keywords" content="Full Stack Developer, MERN Stack, React, Next.js, Ganesh Lanjewar, Software Engineer, Portfolio" />
        <meta property="og:title" content={`${data?.name} | Portfolio`} />
        <meta property="og:description" content={data?.bio} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@400;600;700;800&display=swap');

        :root {
          --bg-color: #020617; /* Slate 950 - deeper and more premium */
          --header-bg: rgba(2, 6, 23, 0.8);
          --text-primary: #F8FAFC;
          --text-secondary: #94A3B8;
          --accent-color: #38BDF8;
          --gold-accent: #FACC15; /* Matching your photo's yellow */
          --accent-glow: rgba(56, 189, 248, 0.15);
          --gold-glow: rgba(250, 204, 21, 0.1);
          --card-bg: #0F172A;
          --card-border: rgba(255, 255, 255, 0.05);
          --section-padding: 10rem 2rem;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
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

        body::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E");
          z-index: -1;
          pointer-events: none;
        }

        h1, h2, h3 {
          font-family: 'Outfit', sans-serif;
        }

        .layout-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        main {
          flex: 1;
        }

        .glass {
          background: rgba(17, 24, 39, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--card-border);
        }
      `}</style>
    </div>
  );
};

export default MainLayout;
