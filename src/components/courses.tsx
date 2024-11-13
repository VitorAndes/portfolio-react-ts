import { DataCourses } from "@/data/dataCourses";
import { Separator } from "./ui/separator";

export function Courses() {
  return (
    <>
      <h1 className="font-bold text-xl text-white">Courses</h1>
      <Separator className="my-3" />
      <div className="flex flex-col gap-2">
        {DataCourses.map((courses, index) => {
          return (
            <div className="inline-flex flex-col" key={index}>
              <p className="text-sm">{courses.conclusion}</p>
              <h1 className="text-white text-lg font-semibold">
                {courses.name}
              </h1>
              <a
                href={courses.href}
                target="_blank"
                className="text-base hover:text-violet-600"
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
