export interface Project {
  id: string;
  title: string;
  category: string;
  img: string;
  detailImg?: string;
  desc: string;
  role: string;
  techStack: string[];
  year: string;
  challenge: string;
  solution: string;
}

export const projects: Project[] = [
  {
    id: "swiftdrive-app",
    title: "UI/UX Design - SwiftDrive App",
    category: "UI/UX Design",
    img: "/swiftdrive.png",
    desc: "A high-performance dark mode mobile dashboard designed specifically for ride-sharing drivers, focusing on rapid readability and navigation.",
    role: "Senior UI/UX Designer",
    techStack: ["Figma", "User Testing", "Prototyping"],
    year: "2024",
    challenge: "Drivers often operate in varied lighting conditions and need to process critical information—like navigation, ride requests, and earnings—at a glance without distraction. Traditional ride-sharing apps can be visually cluttered, leading to cognitive overload.",
    solution: "We designed 'SwiftDrive' with a high-contrast dark theme utilizing glowing neon accents to guide the user's eye to the most critical actions. The 3D isometric map integration and simplified typography ensure that navigation and ride acceptance are highly intuitive, safe, and efficient."
  },
  {
    id: "vitalcare-app",
    title: "UI/UX Design - VitalCare Health",
    category: "UI/UX Design",
    img: "/vitalcare.png",
    desc: "A premium telemedicine and health monitoring application designed to evoke trust, empathy, and clarity.",
    role: "Lead UI/UX Designer",
    techStack: ["Figma", "Design System", "Wireframing"],
    year: "2023",
    challenge: "Healthcare apps often feel clinical, cold, or overly complex for the average patient. The challenge was to create a digital environment that feels as reassuring and professional as a top-tier medical facility, while simplifying the process of booking appointments and viewing health metrics.",
    solution: "We crafted a clean, light-mode interface using soft blue and teal gradients paired with glassmorphism elements to create a sense of depth and cleanliness. The information architecture was heavily streamlined, utilizing rounded appointment cards and highly legible typography to make health management accessible and stress-free."
  },
  {
    id: "lumina-studio-branding",
    title: "Graphic Design - Lumina Studio",
    category: "Graphic Design",
    img: "/lumina.png",
    desc: "A hyper-realistic, ultra-premium brand identity and stationery design for a modern creative agency.",
    role: "Brand Identity Designer",
    techStack: ["Adobe Illustrator", "Photoshop", "Print Layout"],
    year: "2024",
    challenge: "Lumina Studio, a high-end creative agency, needed a visual identity that communicated luxury, precision, and modernity. They required branding that would stand out to corporate clients while retaining an edge of artistic sophistication.",
    solution: "We developed a sleek, minimalist logo paired with elegant serif and sans-serif typography. The brand comes to life in physical applications through high-quality matte black stationery with silver metallic foil accents, projecting an image of uncompromising quality and professional excellence."
  },
  {
    id: "contractor-system",
    title: "Web Development - Contractor System",
    category: "Web Development",
    img: "/web1.png",
    detailImg: "/web2.png",
    desc: "Robust financial management system for construction firms, featuring automated budgeting and real-time project tracking.",
    role: "Fullstack Developer",
    techStack: ["React", "TypeScript", "Node.js", "MySQL"],
    year: "2023",
    challenge: "Construction firms often struggle with decentralized financial tracking and manual budgeting, leading to cost overruns and inefficient resource allocation. The existing systems were fragmented and lacked real-time visibility.",
    solution: "We built a centralized management dashboard that automates budgeting workflows and tracks project expenses in real time. By integrating data visualization and role-based access control, the system ensures transparency and dramatically reduces administrative overhead."
  },
  {
    id: "management-dashboard",
    title: "Information Systems - Management Dashboard",
    category: "Web Development",
    img: "/web4.png",
    detailImg: "/web3.png",
    desc: "Advanced data visualization and management platform designed for high-efficiency system monitoring and reporting.",
    role: "Frontend Engineer",
    techStack: ["React", "Tailwind CSS", "Motion", "Redux"],
    year: "2024",
    challenge: "Stakeholders needed a comprehensive view of system health and operational metrics, but the data was scattered across multiple legacy databases. Generating reports took hours and was prone to human error.",
    solution: "Designed and developed an intuitive management dashboard that aggregates data into a single pane of glass. Featuring interactive charts, real-time alerts, and automated report generation, the platform empowers stakeholders to make data-driven decisions instantly."
  },
  {
    id: "tech-writing-seo",
    title: "Technical Writing & SEO",
    category: "Creative Writer",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
    desc: "In-depth technical documentation and strategic content creation optimized for both human readability and search engine ranking.",
    role: "SEO Content Strategist",
    techStack: ["SEO", "Copywriting", "Google Analytics"],
    year: "2022-2024",
    challenge: "Technical documentation is often dry and difficult for non-technical stakeholders to understand, while marketing content often lacks technical depth. Bridging this gap was crucial for the client's growth.",
    solution: "Developed a comprehensive content strategy that translates complex technical concepts into accessible, engaging articles. By implementing rigorous on-page SEO best practices and keyword research, we significantly improved organic search visibility and user retention."
  }
];
