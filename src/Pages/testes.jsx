// import { useEffect, useReducer, useState } from "react";
// import basePostUrl from "./componentsPage/AxiosConfig";

// //CONSELHOS

// type Advice = {
//   advice: string;
// };

// //USUARIOS

// const Users = [
//   {
//     id: 1,
//     name: "joao",
//     age: 20,
//     favorite: false,
//   },
//   {
//     id: 2,
//     name: "paulo",
//     age: 34,
//     favorite: false,
//   },
// ];

// //LOCATIONS

// interface locations {
//   coords: {
//     latitude: number | null;
//     longitude: number | null;
//   };
// }

// //Reducer Teste

// interface CounterState {
//   counter: number;
// }

// interface ActionType {
//   type: "increment" | "decrement" | "erase";
// }

// const reducerfn = (stateTeste: CounterState, action: ActionType) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...stateTeste,
//         counter: stateTeste.counter + 1,
//       };
//     case "decrement":
//       return {
//         ...stateTeste,
//         counter: stateTeste.counter - 1,
//       };
//     case "erase":
//       return {
//         ...stateTeste,
//         counter: (stateTeste.counter = 0),
//       };
//     default:
//       return stateTeste;
//   }
// };

// // REDUCER TASKS

// interface TasksProps {
//   id: number;
//   name: string;
//   date: string;
//   isCompleted: boolean;
// }

// interface TasksState {
//   tasks: TasksProps[];
// }

// interface TaskAction {
//   type: "add-task" | "toggle-task";
//   payload: string | number;
// }

// const reducerTK = (state: TasksState, action: TaskAction) => {
//   switch (action.type) {
//     case "add-task":
//       return {
//         tasks: [
//           ...state.tasks,
//           {
//             id: Math.floor(Math.random() * 10000),
//             name: action.payload as string,
//             date: new Date().toLocaleDateString(),
//             isCompleted: false,
//           },
//         ],
//       };
//     case "toggle-task":
//       return {
//         ...state.tasks,
//         tasks: state.tasks.map((task, index) => {
//           return index == (action.payload as number)
//             ? { ...task, isCompleted: !task.isCompleted }
//             : task;
//         }),
//       };
//     default:
//       return state;
//   }
// };

// //AXIOS

// interface PostType {
//   title: string;
//   id: number;
//   body: string;
//   userId: number;
// }

// const App: React.FC = () => {
//   const [conselho, setAdvice] = useState<Advice>();
//   const [count, setCount] = useState<number>(0);

//   const [numero1, setNumero1] = useState(0);
//   const [numero2, setNumero2] = useState(0);

//   // const potencia = useMemo(() => {
//   //   const future = Date.now() + 1000;
//   //   while (Date.now() < future) {}
//   //   return numero1 ** numero2;
//   // }, [numero1, numero2]);

//   //-----API CONSELHO

//   useEffect(() => {
//     loadAdvice();
//   }, []);

//   const loadAdvice = async () => {
//     const response = await fetch("https://api.adviceslip.com/advice");
//     const data = await response.json();
//     const slip = data.slip;
//     setAdvice(slip);
//   };

//   const handleAdvice = () => {
//     loadAdvice();
//   };

//   //----USUARIOS

//   const [usuarios, setUsuarios] = useState(Users);

//   const handleAddRepository = () => {
//     setUsuarios([
//       ...usuarios,
//       {
//         id: Math.floor(Math.random() * 10000),
//         name: "Novo user",
//         age: Math.floor(Math.random() * 100),
//         favorite: false,
//       },
//     ]);
//   };

//   const favoriteUser = (id: Number) => {
//     const newFavUser = usuarios.map((user) => {
//       return user.id == id ? { ...user, favorite: !user.favorite } : user;
//     });
//     setUsuarios(newFavUser);
//   };

//   //----LOCATIONS-------

//   const [location, setLocation] = useState<locations["coords"]>({
//     latitude: 0,
//     longitude: 0,
//   });

//   useEffect(() => {
//     navigator.geolocation.watchPosition(handleLocations);
//   });

//   const handleLocations = ({ coords }: locations) => {
//     const { latitude, longitude } = coords;
//     setLocation({ latitude, longitude });
//   };

//   //----REDUCER

//   const [stateTeste, dispatchTeste] = useReducer(reducerfn, { counter: 0 });

//   //-----REDUCER COM STATE ----- LISTA DE TAREFAS

//   const [state, dispatch] = useReducer(reducerTK, { tasks: [] });

//   const [inputValue, setInputValue] = useState("");

//   //-------AXIOS------------

//   const [posts, setPost] = useState<PostType[]>([]);
//   const [titleValue, setTitleValue] = useState("");
//   const [bodyValue, setBodyValue] = useState("");

//   useEffect(() => {
//     basePostUrl
//       .get("/posts/")
//       .then((response) => {
//         const data = response.data.slice(95, 105);
//         setPost(data);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   const sendNewPost = async (e: React.FormEvent<HTMLElement>) => {
//     e.preventDefault();

//     try {
//       const response = await basePostUrl.post("/posts", {
//         body: bodyValue,
//         title: titleValue,
//         userId: 1,
//       });
//       if (response.status === 201) {
//         console.log("post criado com sucesso");

//         setTitleValue("");
//         setBodyValue("");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 m-4 gap-2 sm:gap-3 lg:gap-4">
//       <div
//         id="testeApi"
//         className="flex flex-col items-center gap-2 border rounded-md p-6"
//       >
//         <p>Teste com API</p>
//         <p>{conselho?.advice}</p>
//         <button
//           className="bg-slate-600 cursor-pointer hover:bg-slate-400 hover:scale-105 rounded-md "
//           onClick={handleAdvice}
//         >
//           Trocar conselho
//         </button>
//       </div>
//       <div className="flex flex-col items-center border rounded-md p-6 gap-2">
//         <p>contador com useState</p>
//         <p>{count}</p>
//         <div className="flex flex-row gap-2">
//           <button
//             className="rounded-full bg-red-400 w-8 h-8 cursor-pointer"
//             onClick={() => setCount(count - 1)}
//           >
//             -
//           </button>
//           <button
//             className="rounded-full bg-gray-400 w-12 h-8 cursor-pointer"
//             onClick={() => setCount(0)}
//           >
//             zerar
//           </button>
//           <button
//             className="rounded-full bg-green-400 w-8 h-8 cursor-pointer"
//             onClick={() => setCount(count + 1)}
//           >
//             +
//           </button>
//         </div>
//       </div>
//       <div className="flex flex-col items-center border rounded-md p-6 gap-6">
//         <p>Teste useMemo</p>
//         <p>{/* {numero1}ˆ{numero2} = {potencia} */}</p>
//         <div className="flex flex-row gap-6">
//           <input
//             className="border w-12 h-12 text-center"
//             value={numero1}
//             onChange={(e) => {
//               setNumero1(+e.target.value);
//             }}
//             type="number"
//           />
//           <input
//             className="border w-12 h-12 text-center"
//             value={numero2}
//             onChange={(e) => {
//               setNumero2(+e.target.value);
//             }}
//             type="number"
//           />
//         </div>
//       </div>

//       <div className="flex flex-col items-center border rounded-md p-6 gap-6">
//         <p>Buscar cordenadas</p>
//         <span>Latidude: {location.latitude}</span>
//         <span>Longitude: {location.longitude}</span>
//       </div>

//       <div className="flex flex-col items-center border rounded-md p-6 gap-6">
//         <p>contador com reducer</p>
//         <p>{stateTeste.counter}</p>
//         <div className="flex flex-row gap-2">
//           <button
//             className="rounded-full bg-red-400 w-8 h-8 cursor-pointer"
//             onClick={() => dispatchTeste({ type: "decrement" })}
//           >
//             -
//           </button>
//           <button
//             className="rounded-full bg-gray-400 w-12 h-8 cursor-pointer"
//             onClick={() => dispatchTeste({ type: "erase" })}
//           >
//             zerar
//           </button>
//           <button
//             className="rounded-full bg-green-400 w-8 h-8 cursor-pointer"
//             onClick={() => dispatchTeste({ type: "increment" })}
//           >
//             +
//           </button>
//         </div>
//       </div>

//       <div className=" grid col-span-1 sm:col-span-2 lg:col-span-3 2xl:col-span-4 border rounded-md p-4 gap-2">
//         <div className="grid grid-cols-1 p-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 lg:gap-3 2xl:gap-5">
//           <p className="col-span-1 sm:col-span-2 lg:col-span-3 2xl:col-span-4 justify-self-center">
//             quantidade de favoritos:
//             {usuarios.filter((repo) => repo.favorite).length}
//           </p>
//           {usuarios.map((repo) => {
//             return (
//               <div
//                 key={repo.id}
//                 className="flex flex-col gap-1 border rounded-md p-3 bg-slate-200"
//               >
//                 <span>Id: {repo.id}</span>
//                 <span>Name: {repo.name}</span>
//                 <span>Age: {repo.age}</span>
//                 <div className="flex self-end items-center gap-3">
//                   {repo.favorite && (
//                     <span className="bg-blue-300 rounded-md p-1 min-w-20">
//                       favoritado
//                     </span>
//                   )}
//                   <button
//                     onClick={() => favoriteUser(repo.id)}
//                     className="bg-red-300 rounded-md cursor-pointer p-1 hover:bg-red-400 transition ease-in-out delay-100 self-end min-w-20"
//                   >
//                     Favoritar
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <button
//           className="bg-slate-400 rounded-md cursor-pointer p-2 w-[50%] sm:w-[40%] lg:w-[30%] 2xl:[20%] justify-self-center hover:bg-slate-500 transition ease-in-out delay-100"
//           onClick={handleAddRepository}
//         >
//           Adcionar repositorio
//         </button>
//       </div>

//       <div className="grid col-span-1 sm:col-span-2 lg:col-span-3 2xl:col-span-4 p-4 gap-2 border rounded-md">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 p-1">
//           <p className="justify-self-center col-span-1 sm:col-span-2 lg:col-span-3 2xl:col-span-4">
//             Minhas tarefas
//           </p>
//           {state.tasks.map((task) => {
//             return (
//               <div
//                 className="flex flex-col bg-slate-200 border rounded-md p-3 gap-1"
//                 key={task.id}
//               >
//                 <span>Name: {task.name}</span>
//                 <span>Dia: {task.date}</span>

//                 <button
//                   onClick={() =>
//                     dispatch({ type: "add-task", payload: inputValue })
//                   }
//                   className="bg-red-300 rounded-md cursor-pointer p-1 hover:bg-red-400 transition ease-in-out delay-100 self-end min-w-20"
//                 >
//                   Finalizar
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 p-1 gap-2">
//           <div className="grid col-span-1">
//             <label htmlFor="inputTask">Insira uma nova tarefa</label>
//             <input
//               name="inputTask"
//               className="border rounded-md h-10 p-2"
//               type="text"
//               value={inputValue}
//               placeholder="Ex. Estudar"
//               onChange={(e) => setInputValue(e.target.value)}
//             />
//           </div>
//           <button
//             className="bg-slate-400 rounded-md cursor-pointer p-1 w-[60%] h-10 sm:w-[50%] lg:w-[40%] 2xl:[30%] self-end hover:bg-slate-500 transition ease-in-out delay-100"
//             onClick={() => {
//               dispatch({ type: "add-task", payload: inputValue });
//               setInputValue("");
//             }}
//           >
//             Adicionar tarefas
//           </button>
//         </div>
//       </div>
//       <div className=" grid col-span-1 sm:col-span-2 lg:col-span-3 2xl:col-span-4 border rounded-md p-4 gap-2">
//         <div className="grid grid-cols-1 p-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 lg:gap-3 2xl:gap-5">
//           <p className="col-span-1 sm:col-span-2 lg:col-span-3 2xl:col-span-4 justify-self-center">
//             Posts
//           </p>
//           {posts.map((post) => {
//             return (
//               <div
//                 key={post.id}
//                 className="flex flex-col gap-1 border rounded-md p-3 bg-slate-200"
//               >
//                 <h1 className="text-lg">{post.title}</h1>
//                 <p className="first-letter:pl-1">{post.body}</p>

//                 <button className="bg-red-300 rounded-md cursor-pointer p-1 hover:bg-red-400 transition ease-in-out delay-100 self-end min-w-20">
//                   Editar Post
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 p-1 gap-2">
//           <form className="flex flex-col gap-2" onSubmit={sendNewPost}>
//             <h3 className="my-3">Insira um novo post</h3>
//             <label htmlFor="inputTitle">Insira um titulo</label>
//             <input
//               name="inputTitle"
//               className="border rounded-md h-10 p-2"
//               type="text"
//               value={titleValue}
//               onChange={(e) => setTitleValue(e.target.value)}
//             />
//             <label htmlFor="inputBody">Insira uma descricao</label>
//             <textarea
//               name="inputTitle"
//               className="border rounded-md h-10 p-2"
//               value={bodyValue}
//               onChange={(e) => setBodyValue(e.target.value)}
//             />
//             <input
//               className="bg-slate-400 rounded-md cursor-pointer p-1 w-[60%] h-10 sm:w-[50%] lg:w-[40%] 2xl:[30%] hover:bg-slate-500 transition ease-in-out delay-100"
//               type="submit"
//               value="Adicionar post"
//             />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default App;


//segundo commit aq

//quinto commit 


//sexto commit

// oitavo commit