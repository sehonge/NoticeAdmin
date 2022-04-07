import './App.css';
import  {Route, Routes} from "react-router-dom";
import MainPage from "./notice/MainPage";
import AddNotice from "./notice/AddNotice";

function App() {
  return (
        <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="/add" element={<AddNotice/>}></Route>
        </Routes>
  );
}

export default App;
