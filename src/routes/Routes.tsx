import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import AddPost from "../Pages/NewPost";

const RoutesNav: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addPost" element={<AddPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesNav;
