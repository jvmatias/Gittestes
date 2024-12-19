import { ReactNode, useState } from "react";
import MyButton from "./componentsPage/button";

type TitleProps = {
  children: ReactNode;
  size?: "small" | "large";
  color?: string;
};

const Title = ({ children, size, color }: TitleProps) => {
  return (
    <p
      style={{
        fontSize: size == `small` ? `1.5rem` : "3rem",
        color: color,
      }}
    >
      {children}
    </p>
  );
};

const App = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Title size="small" color="red">
        Hello World
      </Title>

      <MyButton count={count} onClick={handleClick} />
    </div>
  );
};
export default App;
