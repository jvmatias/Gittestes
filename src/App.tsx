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

  return <div></div>;
};

export default App;
