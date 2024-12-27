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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      if (newPost.title && newPost.body !== "") {
        const response = await postFetcher("/posts", newPost);
        if (response.status === 201) {
          setStatus(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-slate-100 gap-2 m-2 p-2 rounded-md shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
        <label htmlFor="name">Titulo do post</label>
        <input
          name="name"
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          placeholder=" "
          className={`p-2 w-64 border rounded-md focus:ring-2
            ${
              isSubmitted && newPost.title.trim() === ""
                ? "border-red-500 focus:outline-red-500"
                : "border-gray-500 focus:outline-blue-500"
            }`}
        />
        {isSubmitted && newPost.title.trim() === "" && (
          <span className="text-red-500">Preencha o formulario</span>
        )}
        <label htmlFor="email">Corpo do post</label>
        <input
          name="email"
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          className={`p-2 border w-64 rounded-md ${
            isSubmitted && newPost.body.trim() === ""
              ? "border-red-500 focus:outline-red-500"
              : "border-gray-500 focus:outline-blue-500"
          }`}
          defaultValue=""
        />
        {isSubmitted && newPost.title.trim() === "" && (
          <span className="text-red-500">Preencha o formulario</span>
        )}
        <input
          className="bg-red-300 rounded-md w-36 justify-self-end hover:bg-red-500"
          type="submit"
          value="Enviar post"
        />
        <button
          className="bg-red-300 rounded-md w-36 justify-self-end hover:bg-red-500"
          onClick={() => navigate("/")}
        >
          Cancelar
        </button>
      </form>
      {status && (
        <span className="text-green-600">Post enviado com sucesso</span>
      )}
    </div>
  );
};

export default addPost;
