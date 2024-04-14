import { Separator } from "./ui/separator";
import { DataCourses } from "@/data/dataCourses";

export function Courses() {
  return (
    <>
      <div className="h-[408px]">
        <h1 className="font-bold text-lg text-white">Courses</h1>
        <Separator className="my-3" />
        <div className="flex flex-col gap-3.5">
          {DataCourses.map((courses, index) => {
            return (
              <div className="inline-flex flex-col" key={index}>
                <p>{courses.conclusion}</p>
                <h1 className="text-white font-semibold">{courses.name}</h1>
                <a
                  href={courses.href}
                  target="_blank"
                  className="hover:text-violet-600"
                >
                  {courses.description}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
