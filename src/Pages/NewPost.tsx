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
          setTimeout(() => {
            setStatus(false);
          }, 3000);
          setIsSubmitted(false);
          setNewPost({ title: "", body: "" });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-screen h-screen justify-center">
      <h1 className="text-xl my-2">Add new post</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 sm:gap-4 lg:gap-6 bg-slate-100 w-[90%] p-10 sm:w-[80%] sm:p-20 lg:w-[70%] lg:p-32 xl:w-[60%] 2xl:[50%] mx-auto 
        rounded-md shadow-md "
      >
        <label htmlFor="name">Titulo do post</label>
        <input
          name="name"
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          value={newPost.title}
          className={`p-2 w-64 border rounded-md focus:ring-2
            ${
              isSubmitted && newPost.title === ""
                ? "border-red-500 focus:outline-red-500"
                : "border-gray-500 focus:outline-blue-500"
            }`}
        />
        {isSubmitted && newPost.title === "" && (
          <span className="text-red-500">Preencha o formulario</span>
        )}
        <label htmlFor="email">Corpo do post</label>
        <input
          name="email"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          className={`p-2 border w-64 rounded-md shadow-md ${
            isSubmitted && newPost.body === ""
              ? "border-red-500 focus:outline-red-500"
              : "border-gray-500 focus:outline-blue-500"
          }`}
        />
        {isSubmitted && newPost.body === "" && (
          <span className="text-red-500">Preencha o formulario</span>
        )}
        <div className="flex flex-col gap-2 sm:gap-3 mt-2 sm:mt-4 lg:mt-6">
          <button
            className="bg-red-300 rounded-md w-36 justify-self-end hover:bg-red-500"
            type="submit"
          >
            Enviar post
          </button>
          <button
            className="bg-red-300 rounded-md w-36 justify-self-end hover:bg-red-500 "
            onClick={() => navigate("/")}
          >
            Cancelar
          </button>
        </div>
        {status && (
          <span className="text-green-600 my-2d">Post enviado com sucesso</span>
        )}
      </form>
    </div>
  );
};

export default addPost;
