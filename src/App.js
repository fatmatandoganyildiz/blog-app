import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Account from "./pages/Account";
import Health from "./pages/Health";
import LifeStyle from "./pages/LifeStyle";
import Travel from "./pages/Travel";
import ModalPage from "./pages/ModalPage";
import Article from "./pages/Article";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <AuthContextProvider>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route path="/health" element={<Health />} />
            <Route path="/lifestyle" element={<LifeStyle />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/modal" element={<ModalPage />} />
            <Route path="/article/:name" element={<Article />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
