import { useEffect, useState } from "react";

type Advice = {
  advice: string;
};

const App: React.FC = () => {
  const [conselho, setAdvice] = useState<Advice>();

  useEffect(() => {
    loadAdvice();
  }, []);

  const loadAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const slip = data.slip;
    console.log("troca de estado");
    setAdvice(slip);
  };

  const handleAdvice = () => {
    loadAdvice();
  };

  return (
    <div
      id="testeApi"
      className="flex flex-col justify-center gap-2 border rounded-md m-4 p-6 max-w-[45%]"
    >
      <p>{conselho?.advice}</p>
      <button
        className="bg-slate-600 cursor-pointer hover:bg-slate-400 hover:scale-105 rounded-md "
        onClick={handleAdvice}
      >
        Trocar conselho
      </button>
    </div>
  );
};
export default App;
