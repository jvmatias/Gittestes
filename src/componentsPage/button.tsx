const MyButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="bg-slate-400 border rounded-md my-2 hover:bg-slate-200 hover:scale-105 cursor-pointer transition ease-in-out delay-200"
      onClick={onClick}
    >
      clique aqui para um conselho
    </button>
  );
};

export default MyButton;
