import { useState } from "react";
import useSWR from "swr";

interface UserType {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const App = () => {
  const { data, mutate } = useSWR<UserType[]>("/posts");
  const [titulo, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div>
      <h2>Hello world</h2>
      <div>
        {data?.slice(0, 5).map((post) => {
          return (
            <div
              className="grid grid-cols-1 bg-slate-200 m-2 p-2 rounded-md"
              key={post.id}
            >
              <span>Titulo: {post.title}</span>
              <span>Body: {post.body}</span>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="title">Insiria um titulo</label>
        <input
          className="border rounded-md"
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Insiria um body</label>
        <input
          className="border rounded-md"
          type="text"
          name="body"
          onChange={(e) => setBody(e.target.value)}
        />
        <button className="border bg-slate-500 w-44 p-3 rounded-md">
          Enviar novo post
        </button>
      </div>
    </div>
  );
};

export default App;
