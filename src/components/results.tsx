import { LayoutContent } from "./layout/layout-content";
import ResultItem from "./resultItem";

const Results = () => {
  return (
    <div className="flex flex-col items-center mt-48 space-y-16">
      <h1 className="text-4xl font-semibold">Resultados</h1>
      <LayoutContent className="flex items-center justify-around w-full">
        <ResultItem value="500M" description={"Em\nresultados"} />
        <div className="h-12 w-[2px] bg-primary-green"></div>
        <ResultItem value="100" description={"Mercados\natendidos"} />
        <div className="h-12 w-[2px] bg-primary-green"></div>
        <ResultItem value="14" description={"Empresas no\necossistema"} />
        <div className="h-12 w-[2px] bg-primary-green"></div>
        <ResultItem value="30" description={"Especialistas no\nsetor"} />
      </LayoutContent>
    </div>
  );
};

export default Results;
