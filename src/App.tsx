import { useState } from "react";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";

interface UserType {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const App: React.FC = () => {
  const navigate = useNavigate();
  const { data } = useSWR<UserType[]>("/posts");
  const [openModal, setOpenModal] = useState(false);
  const [post, setPost] = useState("");
  const [body, setBody] = useState("");

  const editPost = (id: number) => {
    const postMap = data?.map((post) => {
      if (post.id === id) setPost(post.title), setBody(post.body);
    });
    return postMap;
  };

  return (
    <div className="grid">
      <div className="flex justify-between m-2">
        <h2>Blog Post</h2>
        <button
          className="bg-red-300 rounded-md w-32 hover:bg-red-400 cursor-pointer "
          onClick={() => navigate("/addPost")}
        >
          Add New Post
        </button>
      </div>
      <div>
        {openModal && (
          <div
            className="absolute top-1/2 -translate-y-2/4
          right-1/2 translate-x-2/4 bg-slate-500 w-[300px] min-h-[300px] z-10 rounded-md flex flex-col p-3 gap-3 "
          >
            <p>Editar usuario</p>
            <label htmlFor="name">Titulo do post</label>
            <textarea
              name="name"
              value={post}
              className="bg-slate-400 p-2 border h-20 rounded-md"
            />
            <label htmlFor="email">Corpo do post</label>
            <textarea
              name="email"
              value={body}
              className="bg-slate-400 p-2 border h-20 rounded-md"
            />

            <div className="flex gap-2 my-3">
              <button
                className="bg-red-300 rounded-md w-24"
                onClick={() => {
                  setOpenModal(false);
                  setPost("");
                  setBody("");
                }}
              >
                Cancelar
              </button>
              <button className="bg-red-300 rounded-md w-24 ">Enviar</button>
            </div>
          </div>
        )}
        {data?.slice(0, 5).map((post) => {
          return (
            <div
              className="relative grid grid-cols-1 bg-slate-200 m-2 p-2 rounded-md"
              key={post.id}
            >
              <span>Titulo: {post.title}</span>
              <span>email: {post.body}</span>
              <button
                className="bg-red-300 rounded-md w-36 justify-self-end"
                onClick={() => {
                  editPost(post.id);
                  setOpenModal(true);
                }}
              >
                Editar post
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
