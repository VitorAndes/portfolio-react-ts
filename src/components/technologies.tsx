import { DataTechnologies } from "@/data/dataTechnologies";
import { Separator } from "@/components/ui/separator";

export function Technologies() {
  return (
    <>
      <div className="h-60">
        <h1 className="font-bold text-lg text-white">Technologies</h1>
        <Separator className="my-3" />
        <div className="grid grid-cols-3 gap-x-9">
          {DataTechnologies.map((Technologies, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-2 my-3 items-center justify-center "
              >
                <img
                  src={Technologies.icon}
                  width={45}
                  height={45}
                  className="rounded-full hover:shadow-lg hover:shadow-violet-600 hover:scale-105 transition-all"
                  
                />
                <p>{Technologies.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
