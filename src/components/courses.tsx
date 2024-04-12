import { Separator } from "./ui/separator";
import { DataCourses } from "@/data/dataCourses";

export function Courses() {
  return (
    <>
      <div>
        <h1 className="font-bold text-base text-white">Courses</h1>
        <Separator className="my-2" />
        <div className="flex flex-col gap-3.5">
          {DataCourses.map((courses, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <p className="font-thin opacity-90">{courses.conclusion}</p>
                <h2 className="text-white/80 font-bold">{courses.name}</h2>
                <a href={courses.href} target="_blank" className="hover:text-black">{courses.description}</a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
