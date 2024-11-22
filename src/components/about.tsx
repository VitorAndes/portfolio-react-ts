import { Separator } from "@/components/ui/separator";
import { DataLinks } from "../data/dataLinks";

export function About() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-2 items-center">
        <img
          src="https://github.com/vitorandes.png"
          alt="foto de Vitor Andes"
          className="w-40 h-40 rounded-lg shadow shadow-slate-200"
        />
      </div>
      <div className="mt-2">
        <h2 className="text-lg font-semibold text-white">About</h2>
        <Separator className="my-2" />
        <p className="text-sm lg:text-base lg:leading-relaxed">
          Sou Vitor andes dos santos, um Desenvolvedor especializado em
          front-end. Com um histórico sólido em{" "}
          <strong className="text-violet-500 font-bold">
            React, Typescript, Angular, vue.js e node
          </strong>
          .Meu objetivo é continuar crescendo na área de Desenvolvimento web,
          aplicando minhas habilidades para criar soluções inovadoras.
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
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              rel="noreferrer"
            >
              <LinkIcon size={24} />
            </a>
          );
        })}
      </div>
    </>
  );
}
