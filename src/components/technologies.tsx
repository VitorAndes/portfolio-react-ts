import { DataTechnologies } from "@/data/dataTechnologies";
import { Separator } from "@/components/ui/separator";

export function Technologies() {
  return (
    <>
      <div>
        <h1 className="font-bold font-base text-white">Technologies</h1>
        <Separator className="my-2" />
        <div className="flex justify-between flex-wrap">
          {DataTechnologies.map((Technologies, index) => {
            return (
              <div
                className="flex flex-col gap-1.5 my-3 items-center"
                key={index}
              >
                <img
                  src={Technologies.icon}
                  width={45}
                  height={45}
                  className="rounded-full"
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
