import { DataLinks } from "../data/dataLinks";
import { Separator } from "@/components/ui/separator";

export function About() {
  return (
    <div className="h-[452px]">
      <div className="flex flex-col items-center">
        <img
          src="https://github.com/vitorandes.png"
          alt="foto de Vitor Andes"
          className="w-32 h-32 rounded-full shadow shadow-[#EEE4B1]"
        />
        <h1 className="text-xl font-bold mt-4 text-white">Vitor Andes</h1>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-bold text-white">About</h2>
        <Separator className="my-2" />
        <p className="text-sm ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sint
          sit iure vitae voluptates sed doloribus autem fuga, quisquam possimus
          non! Quidem consectetur nesciunt exercitationem. Ullam eum
          exercitationem harum eius.
        </p>
      </div>
      <div className="flex gap-2 mt-6">
        {DataLinks.map((link, index) => {
          const LinkIcon = link.icon;
          return (
            <a
              className="text-white hover:text-violet-600 hover:scale-105 transition-all rounded-md p-1.5"
              href={link.href}
              target="_blank"
              key={index}
            >
              <LinkIcon size={24}/>
            </a>
          );
        })}
      </div>
    </div>
  );
}
