import { useState } from "react";
import MyButton from "./componentsPage/button";

type Advice = {
  advice: string;
};

const App: React.FC = () => {
  const [conselho, setAdvice] = useState<Advice>();

  const loadAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const slip = data.slip;

    setAdvice(slip);
  };

  return (
    <div id="testeApi">
      <MyButton onClick={loadAdvice} />
      <div className="border rounded-md m-4 p-2 max-w-[45%]">
        <p className="">{conselho?.advice}</p>
      </div>
    </div>
  );
};
export default App;
