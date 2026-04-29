export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://portfolio-main-f7jw.onrender.com";

export const portfolioData = {
  name: "Ganesh Lanjewar",
  headline: "Full Stack Developer & DevOps Enthusiast",
  location: "Pune, India",
  status: "Open to Internship & Full-Time Opportunities",
  achievements: ["🏆 Impetus 2025 Winner"],
  bio: "Full Stack Developer specializing in the MERN stack, building scalable and responsive web applications.",
  about: `I am a Full Stack Developer specializing in the MERN stack, with hands-on experience in building scalable and responsive web applications using React.js, Node.js, Express, and MongoDB.

I also work with Next.js to develop fast and modern web applications. Along with development, I have strong problem-solving skills in Java and Data Structures & Algorithms.

I enjoy building real-world projects, solving challenging problems, and continuously learning new technologies.`,
  email: "lanjewarganesh876@gmail.com",
  github: "https://github.com/ganesglanjewar-2006",
  linkedin: "https://www.linkedin.com/in/ganesh-lanjewar-a93a023b3",
  profileImage: "/image.png",
  skills: [
    "Java", "Data Structures & Algorithms", "React", "Next.js", "Node.js", "Express", "MongoDB", "MySQL", "Redux", "WebRTC", "Docker", "AWS", "Socket.io", "Git"
  ],
  projects: [
    {
      id: "proconnect",
      name: "ProConnect",
      description: "A full-stack professional networking platform with real-time features, profile management, and post interactions.",
      tech: ["Next.js", "Redux", "Express", "MongoDB", "Mongoose"],
      demo: "https://proconnect-frontend-zeta.vercel.app/",
      github: "https://github.com/ganesglanjewar-2006/FULL-STACK-LINKEDIN-CLONE-WITH-IMPROOVED-VERSION-OF-LINKEDIN",
      howToUse: "Register an account, set up your professional profile, create posts, and connect with other users in real-time."
    },
    {
      id: "nexus",
      name: "Nexus (SaaS Management)",
      description: "A comprehensive client and project management portal for streamlining business operations.",
      tech: ["React", "Node.js", "Express", "MongoDB", "EJS"],
      demo: "https://capitalvue.vercel.app/",
      github: "https://github.com/ganesglanjewar-2006/NEXUS",
      howToUse: "Dashboard for managing client projects, tracking progress, and handling administrative tasks efficiently."
    },
    {
      id: "deploynova",
      name: "DeployNova",
      description: "An automated DevOps tool designed to simplify deployment pipelines and infrastructure management.",
      tech: ["React", "Docker", "AWS", "Shell Scripting"],
      demo: "https://deploynova-client.onrender.com/",
      github: "https://github.com/ganesglanjewar-2006/DEPLOYNOVA",
      howToUse: "Upload your configuration, select your target environment, and let DeployNova handle the scaling and deployment logic."
    },
    {
      id: "videocall",
      name: "Real-time Video Calling App",
      description: "A peer-to-peer video conferencing application with instant messaging capabilities.",
      tech: ["JavaScript", "WebRTC", "Socket.io", "CSS3"],
      demo: "https://apnacallvideo-frontend-v2.onrender.com",
      github: "https://github.com/ganesglanjewar-2006/FULL-STACK-VIDEO-CALLING-APP",
      howToUse: "Share your room ID with a friend to start an instant video call with low latency and high quality."
    }
  ],
  achievements: [
    {
      title: "🏆 Impetus 2025 Winner",
      description: "Secured 1st place out of numerous entries for developing an innovative IoT-based Smart Dustbin. The project tackled modern urban waste management challenges by implementing intelligent waste segregation and real-time fill-level monitoring. Built using Arduino microcontrollers and a specialized network of Ultrasonic, Moisture, and Odour sensors, the system automatically categorizes waste and alerts sanitation workers when bins reach capacity, demonstrating a highly practical application of IoT for sustainable, smart-city infrastructure.",
      year: "2025"
    }
  ],
  education: [
    {
      institution: "VIT Pune (Vishwakarma Institute of Technology)",
      degree: "Bachelor of Technology",
      field: "Artificial Intelligence and Data Science (AIDS)",
      duration: "2024 - 2028",
      score: "8.97 CGPA"
    },
    {
      institution: "Maharishi Vidya Mandir",
      degree: "10th Grade",
      field: "",
      duration: "Completed",
      score: "94%"
    }
  ]
};
