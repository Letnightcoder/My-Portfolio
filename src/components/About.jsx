import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import logo from "../assets/picture.png";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src={logo}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p
              className="text-lg text-gray-700 mb-8"
              variants={fadeInUp}
            >
              Hi, I'm Kallol Nath, a passionate frontend developer who loves
              building modern, user-friendly web applications. I specialize in
              Html, Css, ReactJS, JavaScript, TailwindCSS, and Git, Redux
              Toolkit, Framer Motion and API integrations. and I enjoy turning creative ideas
              into interactive, responsive websites.
            </motion.p>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
