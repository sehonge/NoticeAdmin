import './App.css';
import  {Route, Routes} from "react-router-dom";
import MainPage from "./notice/MainPage";
import AddNotice from "./notice/AddNotice";
import NoticePage from "./notice/NoticePage";

function App() {
  return (
        <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="/add" element={<AddNotice/>}></Route>
            <Route path="/:id" element={<NoticePage/>}></Route>
        </Routes>
  );
}

export default App;
