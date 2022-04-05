import './App.css';
import  {Route, Routes} from "react-router-dom";
import MainPage from "./notice/MainPage";

function App() {
  return (
        <Routes>
            <Route path="/" element={<MainPage/>}></Route>
        </Routes>
  );
}

export default App;
