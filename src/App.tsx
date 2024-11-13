import { About } from "@/components/about";
import { Card } from "@/components/card";
import { Projects } from "@/components/projects";
import { motion } from "framer-motion";
import { Courses } from "./components/courses";
import { Technologies } from "./components/technologies";

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start lg:h-[1270px] p-2">
      <div className="flex h-full md:flex-row flex-col lg:flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="h-full"
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
          // className="flex-1"
        >
          <img
            src="https://media1.tenor.com/m/kxiro8Eecb8AAAAd/coding.gif"
            className="w-full lg:w-72 xl:w-96 h-full block rounded-lg shadow shadow-white hover:shadow-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-200"
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
        className="h-full w-96 md:w-full lg:w-fit"
      >
        <Card cardProjects>
          <Projects />
        </Card>
      </motion.div>

      <div className="flex h-full w-full flex-1 md:flex-row flex-col lg:flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.8,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex-1 lg:flex-none"
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
          className="h-full flex-1"
        >
          <Card>
            <Courses />
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
