import { Separator } from "@/components/ui/separator";
import { DataTechnologies } from "@/data/dataTechnologies";

export function Technologies() {
  return (
    <>
      <h1 className="font-bold text-xl text-white">Technologies</h1>
      <Separator className="my-3" />
      <div className="grid grid-cols-3 gap-6">
        {DataTechnologies.map((Technologies, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 my-3 items-center justify-center "
            >
              <img
                src={Technologies.icon}
                width={70}
                height={70}
                className="rounded-sm hover:shadow-lg hover:shadow-violet-600 hover:scale-105 transition-all"
              />
              {/* <p>{Technologies.name}</p> */}
            </div>
          );
        })}
      </div>
    </>
  );
}
