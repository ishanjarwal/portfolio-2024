"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { PiHandshake } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { fadeUp, socialLinks } from "@/constants/constants";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Ishan Jarwal | Full Stack Developer",
//   description: "Hello Everyone, I am Ishan Jarwal, a Full Time Full Stack Developer and Tech a Enthusiast. Checkout my Portfolio and Hire me to get your work done",
// };

export default function RootLayout({ children }) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        {/* Basic Meta Tags */}

        {/* SEO Meta Tags */}
        <title>Ishan Jarwal | Freelance Full Stack Web Developer | Available for Hire</title>
        <meta
          name="description"
          content="Welcome to Ishan's portfolio. A freelance web developer specializing in creating modern, responsive, and high-performance websites. "
        />
        <meta
          name="keywords"
          content="MERN Stack developer, Freelance Web Developer, Web Development, Frontend Developer, Backend Developer, Full Stack Developer, Responsive Design, Portfolio, Ishan Jarwal"
        />
        <meta name="author" content="Ishan Jarwal" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="Ishan Jarwal | Freelance Full Stack Web Developer" />
        <meta
          property="og:description"
          content="Welcome to Ishan's portfolio. A freelance web developer specializing in creating modern, responsive, and high-performance websites."
        />
        <meta property="og:image" content="https://jarwal.vercel.app/profile.png" />
        <meta property="og:url" content="https://jarwal.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ishan Jarwal | Freelance Full Stack Web Developer" />
        <meta
          name="twitter:description"
          content="Welcome to Ishan's portfolio. A freelance web developer specializing in creating modern, responsive, and high-performance websites."
        />
        <meta name="twitter:image" content="https://jarwal.vercel.app/profile.png" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://jarwal.vercel.app" />

        {/* Favicon */}
        <link rel="icon" href="http://localhost:3000/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <main className="w-full min-h-screen xl:h-screen h-full bg-[url('/backgrounds/dark.png')] dark:bg-[url('/backgrounds/light.png')] bg-cover bg-no-repeat bg-center flex">
            <div className='xl:hidden block z-[10] max-w-lg mx-auto pb-4 fixed bottom-0 left-1/2 -translate-x-1/2'>
              <Footer />
            </div>
            <div className="max-w-[1600px] w-full mx-auto xl:py-12 xl:pb-12 pb-24 h-[min(100vh, 500px)] xl:p-12 p-4  flex justify-between items-start xl:space-x-12 xl:space-y-0 space-y-4 xl:flex-row flex-col">
              <div className="rounded-3xl flex flex-col border-2 border-border dark:border-dark-border xl:h-full w-full bg-background dark:bg-dark-background xl:flex-1 p-8 xl:max-w-80 m-0">
                <div className="flex justify-between items-start space-x-4">
                  <div className="aspect-square w-24 rounded-xl bg-background dark:bg-dark-background overflow-hidden">
                    <img
                      src="profile.png"
                      alt=""
                      className="h-full w-full object-center object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-xl text-text dark:text-dark-text mt-2">Ishan Jarwal</h1>
                    <h2 className="text-sm text-text-muted dark:text-dark-text-muted mt-1">Full Stack Dev</h2>
                  </div>
                </div>
                <div className="mt-8">
                  <div>
                    <h3 className="text-text dark:text-dark-text uppercase font-bold">Bio</h3>
                    <p className="text-text dark:text-dark-text text-sm">
                      Teen full-stack developer | Passionate about tech | 🚀 Tech Enthusiast 💻 | building{" "}<a href="https://www.webify.co.in" target="_blank" className="text-pri">webify.co.in</a>
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="tel:+919116080979" className="shine flex justify-start items-start space-x-4 text-text dark:text-dark-text">
                    <span className="text-xl"><IoCallOutline /></span>
                    <span className="text-sm">+91 9116080979</span>
                  </a>
                  <a href="mailto:ishan.professional01@gmail.com" className="shine flex justify-start items-start space-x-4 text-text dark:text-dark-text mt-2">
                    <span className="text-xl"><IoMailOutline /></span>
                    <span className="text-sm">ishan.professional01@gmail.com</span>
                  </a>
                </div>
                <div className="mt-8">
                  <div className="flex justify-start items-center space-x-2 text-text dark:text-dark-text text-2xl">
                    {socialLinks.map((social, idx) =>
                      <a href={social.link} target="_blank" className="shine"><span>{social.icon}</span></a>
                    )}
                  </div>
                </div>
                <div className="mt-8 flex justify-between space-x-2">
                  <a href={"mailto:ishan.professional01@gmail.com"}
                    className="flex justify-center items-center space-x-2 w-full py-3 bg-pri text-text rounded-lg self-baseline outline-pri outline outline-1">
                    <span className="text-lg"><PiHandshake /></span>
                    <span className="text-sm font-bold">Hire Me</span>
                  </a>
                  <a
                    href="resume.pdf"
                    target="_blank"
                    className="flex justify-center items-center space-x-2 w-full py-3 text-pri rounded-lg self-baseline outline-pri outline outline-1">
                    <span className="text-lg"><MdOutlineFileDownload /></span>
                    <span className="text-sm font-bold">CV</span>
                  </a>
                </div>
              </div>
              <div id="pages" className="relative rounded-3xl border-2 border-border  dark:border-dark-border xl:h-full w-full bg-background dark:bg-dark-background xl:flex-1 xl:pt-20 overflow-hidden">
                <div className="xl:block hidden absolute top-0 right-0">
                  <Header />
                </div>
                <motion.div
                  key={pathname}
                  variants={fadeUp}
                  initial={"initial"}
                  animate={"animate"}
                  transition={{ type: "Inertia" }}
                  className="h-full overflow-y-auto py-8 xl:px-8 px-4 ">
                  {children}
                </motion.div>
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
