import { useEffect, useMemo, useState } from "react";

type Advice = {
  advice: string;
};

const App: React.FC = () => {
  const [conselho, setAdvice] = useState<Advice>();
  const [count, setCount] = useState<number>(0);

  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);

  // const potencia = useMemo(() => {
  //   const future = Date.now() + 1000;
  //   while (Date.now() < future) {}
  //   return numero1 ** numero2;
  // }, [numero1, numero2]);

  useEffect(() => {
    loadAdvice();
  }, []);

  const loadAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const slip = data.slip;
    setAdvice(slip);
  };

  const handleAdvice = () => {
    loadAdvice();
  };

  const Users = [
    {
      id: 1,
      name: "joao",
      age: 20,
    },
    {
      id: 2,
      name: "paulo",
      age: 34,
    },
  ];

  const [repositories, setRepositories] = useState(Users);

  const handleAddRepository = () => {
    setRepositories([
      ...repositories,
      {
        id: Math.floor(Math.random() * 10000),
        name: "Novo repo",
        age: Math.floor(Math.random() * 100),
      },
    ]);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-4 gap-2 sm:gap-3 lg:gap-4">
      <div
        id="testeApi"
        className="flex flex-col items-center gap-2 border rounded-md p-6"
      >
        <p>Teste com API</p>
        <p>{conselho?.advice}</p>
        <button
          className="bg-slate-600 cursor-pointer hover:bg-slate-400 hover:scale-105 rounded-md "
          onClick={handleAdvice}
        >
          Trocar conselho
        </button>
      </div>
      <div className="flex flex-col items-center border rounded-md p-6 gap-2">
        <p>contador com useState</p>
        <p>{count}</p>
        <div className="flex flex-row gap-2">
          <button
            className="rounded-full bg-red-400 w-8 h-8 cursor-pointer"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <button
            className="rounded-full bg-gray-400 w-12 h-8 cursor-pointer"
            onClick={() => setCount(0)}
          >
            zerar
          </button>
          <button
            className="rounded-full bg-green-400 w-8 h-8 cursor-pointer"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center border rounded-md p-6 gap-6">
        <p>Teste useMemo</p>
        <p>{/* {numero1}ˆ{numero2} = {potencia} */}</p>
        <div className="flex flex-row gap-6">
          <input
            className="border w-12 h-12 text-center"
            value={numero1}
            onChange={(e) => {
              setNumero1(+e.target.value);
            }}
            type="number"
          />
          <input
            className="border w-12 h-12 text-center"
            value={numero2}
            onChange={(e) => {
              setNumero2(+e.target.value);
            }}
            type="number"
          />
        </div>
      </div>

      <div className=" grid col-span-1 sm:col-span-2 lg:col-span-3 border rounded-md p-4 gap-2">
        <div className="grid grid-cols-1 p-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 lg:gap-3 2xl:gap-5">
          {repositories.map((repo) => {
            return (
              <div
                key={repo.id}
                className="flex flex-col gap-1 border rounded-md p-3 bg-slate-200"
              >
                <span>Id: {repo.id}</span>
                <span>Name: {repo.name}</span>
                <span>Age: {repo.age}</span>
              </div>
            );
          })}
        </div>
        <button
          className="bg-slate-400 rounded-md cursor-pointer p-2 w-[50%] sm:w-[40%] lg:w-[30%] 2xl:[20%] justify-self-center hover:bg-slate-500 transition ease-in-out delay-100"
          onClick={handleAddRepository}
        >
          Adcionar repositorio
        </button>
      </div>
    </div>
  );
};
export default App;
