import './App.css';
import  {Route, Routes} from "react-router-dom";
import MainPage from "./notice/MainPage";
import AddNotice from "./notice/AddNotice";
import NoticePage from "./notice/NoticePage";
import InitialPage from "./notice/InitialPage";
import RegisterPage from "./notice/RegisterPage";
import ChangePasswordPage from "./notice/ChangePasswordPage";

function App() {
  return (
        <Routes>
            <Route path="/login" element={<InitialPage/>}></Route>
            <Route path="/register" element={<RegisterPage/>}></Route>
            <Route path="/changePassword" element={<ChangePasswordPage/>}></Route>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="/add" element={<AddNotice/>}></Route>
            <Route path="/:id" element={<NoticePage/>}></Route>
        </Routes>
  );
}

export default App;
