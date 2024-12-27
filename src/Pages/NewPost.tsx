import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postFetcher } from "../componentsPage/postSWR";

interface PostType {
  title: string;
  body: string;
}

const addPost: React.FC = () => {
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState<PostType>({
    title: "",
    body: "",
  });
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (newPost.title || newPost.body !== "") {
        const response = await postFetcher("/posts", newPost);

        if (response.status === 201) {
          setStatus(true);
          setError(false);
        }

        console.log(response);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 m-2">
        <label htmlFor="name">Titulo do post</label>
        <input
          name="name"
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          className="p-2 border w-64 rounded-md"
        />
        <label htmlFor="email">Corpo do post</label>
        <input
          name="email"
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          className="p-2 border w-64 rounded-md"
          defaultValue=""
        />
        <input
          className="bg-red-300 rounded-md w-36 justify-self-end"
          type="submit"
          value="Enviar post"
        />
        <button
          className="bg-red-300 rounded-md w-36 justify-self-end"
          onClick={() => navigate("/")}
        >
          Cancelar
        </button>
      </form>
      {status && (
        <span className="text-green-600">Post enviado com sucesso</span>
      )}
      {error && <span className="text-red-600">Erro</span>}
    </div>
  );
};

export default addPost;
