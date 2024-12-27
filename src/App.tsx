import { useState } from "react";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import { putFetcher } from "./componentsPage/putAxios";
import basePostUrl from "./componentsPage/AxiosConfig";

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
  const [screenY, setScreenY] = useState(0);
  const [editPost, setEditPost] = useState({
    id: 0,
    title: "",
    body: "",
    userId: 1,
  });
  const [editSucess, setEditSucess] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deletePostId, setDeletePostId] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const editPostModal = async (id: number) => {
    data?.map((post) => {
      if (post.id === id)
        setEditPost({
          title: post.title,
          body: post.body,
          id: post.id,
          userId: 1,
        });
    });
  };

  const putPost = async () => {
    setIsSubmitted(true);
    try {
      if (editPost.title && editPost.body !== "") {
        const response = await putFetcher(`/posts/${editPost.id}`, editPost);
        if (response.status === 200) {
          setEditSucess(true);
          setTimeout(() => {
            setEditSucess(false);
            setOpenModal(false);
          }, 2000);
          setIsSubmitted(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async (id: number) => {
    try {
      const response = await basePostUrl.delete(`/posts/${id}`);
      if (response.status === 200) {
        setEditSucess(true);
        setTimeout(() => {
          setEditSucess(false);
          setDeleteModal(false);
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const pickClick = (e: any) => {
    if (e.target.value === "editarpost") {
      e.pageY > 2000 ? setScreenY(e.pageY / 1.1) : setScreenY(e.pageY);
    }
  };
  return (
    <div className="grid grid-cols-1 scroll-smooth">
      <div
        className={`flex justify-between m-2
        ${openModal || deleteModal ? "blur-sm" : "blur-none"}`}
      >
        <h1 className="text-xl">Blog Post</h1>
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
              value={editPost.title}
              onChange={(e) =>
                setEditPost({ ...editPost, title: e.target.value })
              }
              className={`bg-slate-400 p-2 border h-20 rounded-md
                ${
                  isSubmitted && editPost.title === ""
                    ? "border-red-500 focus:outline-red-500"
                    : "border-gray-500 focus:outline-blue-500"
                }`}
            />
            {isSubmitted && editPost.title === "" && (
              <span className="text-red-500">Preencha o formulario</span>
            )}
            <label className="text-white" htmlFor="email">
              Corpo do post
            </label>
            <textarea
              name="email"
              value={editPost.body}
              onChange={(e) =>
                setEditPost({ ...editPost, body: e.target.value })
              }
              className={`bg-slate-400 p-2 border h-20 rounded-md 
                ${
                  isSubmitted && editPost.body == ""
                    ? "border-red-500 focus:outline-red-500"
                    : "border-gray-500 focus:outline-blue-500"
                }`}
            />
            {isSubmitted && editPost.body === "" && (
              <span className="text-red-500">Preencha o formulario</span>
            )}
            {editSucess && (
              <p className="text-green-400">Post alterado com sucesso</p>
            )}
            <div className="flex gap-2 my-3">
              <button
                className="bg-red-300 rounded-md w-24"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Cancelar
              </button>
              <button
                className="bg-red-300 rounded-md w-24
             "
                onClick={() => putPost()}
              >
                Enviar
              </button>
            </div>
          </div>
        )}

        {deleteModal && (
          <div
            className={`absolute -translate-y-2/4
          right-1/2 translate-x-2/4 bg-slate-500 w-[300px] h-[280px] sm:w-[550px] sm:justify-center sm:pl-20 sm:h-[350px] z-10 rounded-md flex flex-col p-3 gap-10 shadow-2xl drop-shadow-xl`}
            style={{
              top: `${screenY}px`,
            }}
          >
            <h2 className="text-white">Deletar Post</h2>
            <p className="text-white">
              Você tem certeza que deseja deletar esse post?
            </p>
            {editSucess && (
              <p className="text-green-400">Post deletado com sucesso</p>
            )}
            <div className="flex gap-2 my-3">
              <button
                className="bg-red-300 rounded-md w-24 hover:bg-red-500"
                onClick={() => setDeleteModal(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-red-300 rounded-md w-24 hover:bg-red-500
             "
                onClick={() => deletePost(deletePostId)}
              >
                Deletar
              </button>
            </div>
          </div>
        )}

        {data?.slice(0, 16).map((post) => {
          return (
            <div
              className={`relative grid p-[inherit] gap-[inherit] bg-slate-100 rounded-md shadow-md
                ${openModal || deleteModal ? "blur-sm" : "blur-none"}`}
              key={post.id}
            >
              <h2 className="text-xl first-letter:uppercase"> {post.title}</h2>
              <p className="first-letter:uppercase"> {post.body}</p>
              <div className="flex gap-2 justify-self-end">
                <button
                  className="bg-red-300 rounded-md h-9 w-24 justify-self-end hover:bg-red-500 shadow-md"
                  value="editarpost"
                  onClick={() => {
                    setDeletePostId(post.id);
                    setDeleteModal(true);
                  }}
                >
                  Deletar
                </button>
                <button
                  className="bg-red-300 rounded-md h-9 w-24 justify-self-end hover:bg-red-500 shadow-md"
                  value="editarpost"
                  onClick={() => {
                    editPostModal(post.id);
                    setOpenModal(true);
                  }}
                >
                  Editar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
