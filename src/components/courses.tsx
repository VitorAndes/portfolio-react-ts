import { DataCourses } from "@/data/dataCourses";
import { Separator } from "./ui/separator";

export function Courses() {
  return (
    <>
      <h1 className="font-bold text-xl text-white">Courses</h1>
      <Separator className="my-3" />
      <div className="flex space-y-4 flex-col gap-2">
        {DataCourses.map((courses) => {
          return (
            <div className="inline-flex flex-col" key={courses.name}>
              <p className="text-sm">{courses.conclusion}</p>
              <h1 className="text-white text-lg font-semibold">
                {courses.name}
              </h1>
              <a
                href={courses.href}
                target="_blank"
                className="text-base text-slate-300 hover:text-violet-600"
                rel="noreferrer"
              >
                {courses.description}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
