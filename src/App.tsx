import { Card } from "@/components/card";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Technologies } from "./components/technologies";
import { Courses } from "./components/courses";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="flex flex-col lg:grid-flow-col lg:grid xl:flex-row xl:items-start gap-6  items-center">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Card>
            <About />
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img
            src="https://media1.tenor.com/m/kxiro8Eecb8AAAAd/coding.gif"
            className="w-72 xl:w-90 h-[259px] rounded-lg shadow shadow-white hover:shadow-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-200"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Card cardProjcts>
          <Projects />
        </Card>
      </motion.div>

      <div className="flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.8,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Card>
            <Technologies />
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Card>
            <Courses />
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
