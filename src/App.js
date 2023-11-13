import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Account from "./pages/Account";
import Health from "./pages/Health";
import LifeStyle from "./pages/LifeStyle";
import Travel from './pages/Travel';
import ModalPage from "./pages/ModalPage";
import Article from "./pages/Article";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/health" element={<Health />} />
          <Route path="/lifestyle" element={<LifeStyle />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/article/:name" element={<Article/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
