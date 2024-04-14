import { Card } from "@/components/card";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Technologies } from "./components/technologies";
import { Courses } from "./components/courses";

export default function App() {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex flex-col items-center gap-6">
        <Card>
          <About />
        </Card>
        <img
          src="https://media1.tenor.com/m/kxiro8Eecb8AAAAd/coding.gif"
          className="w-80 h-[259px] rounded-lg shadow shadow-violet-200 hover:shadow-violet-600 hover:shadow-lg hover:scale-105 transition-all duration-200"
        />
      </div>
      <Card cardProjcts>
        <Projects />
      </Card>

      <div className="flex flex-col gap-6">
        <Card>
          <Technologies />
        </Card>
        <Card>
          <Courses />
        </Card>
      </div>
    </div>
  );
}
