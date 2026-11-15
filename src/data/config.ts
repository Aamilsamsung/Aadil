const config = {
  title: "Aadil Juraid S | Portfolio",
  description: {
    long: "Explore the portfolio of Aadil, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Aadil, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Aadil",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Framer Motion",
  ],
  author: "Aadil Juraid S",
  email: "",
  site: "https://aadil-portfolio.pages.dev",

  // for github stars button
  githubUsername: "Aamilsamsung",
  githubRepo: "Aadil",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/Aamilsamsung/",
    instagram: "",
    facebook: "",
    github: "https://github.com/Aadil-Khatri",
  },
};
export { config };
