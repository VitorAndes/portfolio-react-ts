import { Separator } from "@/components/ui/separator";
import { DataLinks } from "../data/dataLinks";

export function About() {
  return (
    <div className="h-[452px]">
      <div className="flex flex-col items-center">
        <img
          src="https://github.com/vitorandes.png"
          alt="foto de Vitor Andes"
          className="w-32 h-32 rounded-full shadow shadow-slate-200"
        />
        <h1 className="text-xl font-bold mt-2 text-white">Vitor Andes</h1>
      </div>
      <div className="mt-2">
        <h2 className="text-lg font-bold text-white">About</h2>
        <Separator className="my-2" />
        <p className="text-sm leading-snug tracking-wide">
        Sou Vitor andes dos santos, um Desenvolvedor com experiência em web, especializado em front-end. Com um histórico sólido em <strong className="">Html, css, javascript, typescript, react, node e Java</strong>.Meu objetivo é continuar crescendo na área de Desenvolvimento web, aplicando minhas habilidades para criar soluções inovadoras.
        </p>
      </div>
      <div className="flex gap-2 mt-2">
        {DataLinks.map((link, index) => {
          const LinkIcon = link.icon;
          return (
            <a
              className="text-white hover:text-violet-600 hover:scale-105 transition-all rounded-md mt-2"
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
