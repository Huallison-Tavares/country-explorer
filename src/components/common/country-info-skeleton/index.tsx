export const CountryInfoSkeleton = () => {
  return (
    <div className="fixed flex flex-col gap-4 justify-center items-center text-center p-4 top-6 right-6 w-96 bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl border border-white/20 overflow-hidden animate-pulse">
      
      {/* Esqueleto da Bandeira */}
      <div className="w-full h-48 bg-gray-200 rounded-2xl" />

      {/* Esqueleto do Título e Subtítulo */}
      <div className="flex flex-col gap-2 w-full items-center">
        <div className="h-8 bg-gray-200 rounded-full w-3/4" />
        <div className="h-4 bg-gray-200 rounded-full w-1/2 opacity-60" />
      </div>

      {/* Esqueleto do Grid de InfoBoxes */}
      <div className="flex flex-wrap justify-center items-center w-full">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-1/2 p-2">
            <div className="flex gap-3 items-start p-3 h-20 rounded-2xl bg-gray-50/50 border border-gray-100/50">
              <div className="w-10 h-10 bg-gray-200 rounded-xl shrink-0" />
              <div className="flex flex-col gap-2 w-full mt-1">
                <div className="h-3 bg-gray-200 rounded-full w-1/2" />
                <div className="h-4 bg-gray-200 rounded-full w-full" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Esqueleto do Rodapé (Brasão e Botão) */}
      <div className="flex justify-around w-full items-center pt-2">
        <div className="w-16 h-16 bg-gray-200 rounded-full" />
        <div className="w-32 h-12 bg-gray-200 rounded-lg" />
      </div>
    </div>
  );
};