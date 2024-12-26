import useSWR from "swr";
import { fetcher } from "./componentsPage/SWR";

interface UserType {
  id: number;
  name: string;
  username: string;
  phone: string;
}

const App = () => {
  const { data } = useSWR<UserType>("users", fetcher);

  console.log(data);

  return (
    <div>
      <h2>Hello world</h2>
      <p>testando vi</p>
      <p>commit</p>
      <p>a</p>
      <p>2</p>
      <p>s</p>
      <p>2</p>
    </div>
  );
};

export default App;
