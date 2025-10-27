import Image from "next/image";
import { LayoutContent, LayoutDesktop } from "./layout/layout-content";
import { ArrowDownWideNarrow } from "lucide-react";

const Benefits = () => {
  return (
    <LayoutDesktop className="mt-48 flex justify-center mb-48">
      <LayoutContent className="w-7xl">
        <div className="bg-zinc-100 w-full h-[500px] rounded-[96px] flex items-center justify-around p-12">
          <div className="flex flex-col gap-4 justify-start">
            <h1 className="font-bold text-4xl max-w-[300px]">
              Fique por dentro de nossos serviços
            </h1>
            <Image src="/video.png" width={300} height={200} alt="video" />
          </div>
          <div className="grid grid-cols-2 grid-rows-2">
            <div className="flex flex-col gap-1 p-8 w-[200px] mb-16 bg-linear-to-r from-primary-green to-secondary-blue rounded-4xl">
              <div className="flex justify-center items-center rounded-full w-12 h-12 bg-white">
                <ArrowDownWideNarrow className="text-primary-green" />
              </div>
              <p className="max-w-[100px] text-white">Redução de retrabalho e falhas na gestão</p>
            </div>

            <div className="flex flex-col gap-1 mt-16 p-3 w-[250px]">
              <div className="flex justify-center items-center rounded-full w-12 h-12 bg-white">
                <ArrowDownWideNarrow className="text-primary-green" />
              </div>
              <p className="max-w-[100px]">Redução de retrabalho e falhas na gestão</p>
            </div>

            <div className="flex flex-col gap-1 p-3 w-[250px]">
              <div className="flex justify-center items-center rounded-full w-12 h-12 bg-white">
                <ArrowDownWideNarrow className="text-primary-green" />
              </div>
              <p className="max-w-[100px]">Redução de retrabalho e falhas na gestão</p>
            </div>

            <div className="flex flex-col gap-1 p-3 w-[250px]">
              <div className="flex justify-center items-center rounded-full w-12 h-12 bg-white">
                <ArrowDownWideNarrow className="text-primary-green" />
              </div>
              <p className="max-w-[100px]">Redução de retrabalho e falhas na gestão</p>
            </div>
          </div>
        </div>
      </LayoutContent>
    </LayoutDesktop>
  );
};

export default Benefits;
