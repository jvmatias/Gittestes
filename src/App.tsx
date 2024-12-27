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
  const [screenY, setScreenY] = useState(0);

  const editPost = (id: number) => {
    const postMap = data?.map((post) => {
      if (post.id === id) setPost(post.title), setBody(post.body);
    });
    return postMap;
  };

  const pickClick = (e: any) => {
    console.log(e);
    if (e.target.value === "editarpost") {
      e.pageY > 2000 ? setScreenY(e.pageY / 1.1) : setScreenY(e.pageY);
    }
  };
  return (
    <div className="grid grid-cols-1">
      <div className="flex justify-between m-2">
        <h2>Blog Post</h2>
        <button
          className="bg-red-300 rounded-md w-32 hover:bg-red-400 cursor-pointer  shadow-md"
          onClick={() => navigate("/addPost")}
        >
          Add New Post
        </button>
      </div>
      <div
        onClick={(e) => pickClick(e)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 gap-2 sm:p-3 sm:gap-3 lg:p-4 lg:gap-4 xl:p-5 xl:gap-5"
      >
        {openModal && (
          <div
            className={`absolute -translate-y-2/4
          right-1/2 translate-x-2/4 bg-slate-500 w-[300px] -h-[300px] sm:w-[550px] min-h-[350px] z-10 rounded-md flex flex-col p-3 gap-3 shadow-2xl drop-shadow-xl`}
            style={{
              top: `${screenY}px`,
            }}
          >
            <p className="text-white">Editar usuario</p>
            <label className="text-white" htmlFor="name">
              Titulo do post
            </label>
            <textarea
              name="name"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              className="bg-slate-400 p-2 border h-20 rounded-md"
            />
            <label className="text-white" htmlFor="email">
              Corpo do post
            </label>
            <textarea
              name="email"
              value={body}
              onChange={(e) => setBody(e.target.value)}
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
        {data?.slice(0, 16).map((post) => {
          return (
            <div
              className={`relative grid p-[inherit] gap-[inherit] bg-slate-100 rounded-md shadow-md
                ${openModal ? "blur-sm" : "blur-none"}`}
              key={post.id}
            >
              <h2 className="text-xl first-letter:uppercase"> {post.title}</h2>
              <p className="first-letter:uppercase"> {post.body}</p>
              <button
                className="bg-red-300 rounded-md h-9 w-24 justify-self-end hover:bg-red-500 shadow-md"
                value="editarpost"
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
