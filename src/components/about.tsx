import { Suspense } from "react";
import { DataLinks } from "../data/dataLinks";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "./ui/skeleton";

export function About() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Suspense fallback={<Skeleton className="w-32 h-32 rounded-full" />}>
          <img
            src="https://github.com/vitorandes.png"
            alt="foto de Vitor Andes"
            className="w-32 h-32 rounded-full shadow shadow-[#EEE4B1]"
          />
        </Suspense>
        <h1 className="text-base font-bold mt-4 text-white">Vitor Andes</h1>
      </div>
      <div className="mt-6">
        <h2 className="text-base font-bold text-white">About</h2>
        <Separator className="my-2" />
        <p className="text-sm font-thin">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sint
          sit iure vitae voluptates sed doloribus autem fuga, quisquam possimus
          non! Quidem consectetur nesciunt exercitationem. Ullam eum
          exercitationem harum eius.
        </p>
      </div>
      <div className="flex gap-2 mt-6">
        {DataLinks.map((link) => {
          const LinkIcon = link.icon;
          return (
            <a
              className="text-white hover:text-violet-600 hover:scale-105 transition-all rounded-md p-1.5"
              href={link.href}
              key={link.id}
            >
              <LinkIcon size={24} />
            </a>
          );
        })}
      </div>
    </>
  );
}
