const config = {
  title: "Tuấn Đạt | Backend Developer",
  description: {
    long: "Explore the portfolio of Tuấn Đạt, a backend developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Tuấn Đạt, a backend developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Tuấn Đạt",
    "portfolio",
    "backend developer",
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
    "Spline",
    "Framer Motion",
  ],
  author: "Tuấn Đạt",
  email: "hoangdatlnbp@gmail.com",
  site: "https://tuandat-portfolio.netlify.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/Kuro_0z4",
    linkedin: "https://www.linkedin.com/in/đạt-hoàng-nguyễn-tuấn-776b99329",
    instagram: "https://www.instagram.com/tuandatlnbp",
    facebook: "https://www.facebook.com/hoangdatlnbp",
    github: "https://github.com/dat-hoangnguyentuandat",
  },
};
export { config };