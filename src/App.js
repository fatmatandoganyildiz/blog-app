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
import Write from "./admin/Write";
import Footer from "./components/Footer";
import Help from '../src/footerComponents/Help';
import Status from '../src/footerComponents/Status';
import About from '../src/footerComponents/About';
import Careers from '../src/footerComponents/Careers';
import Blog from '../src/footerComponents/Blog';
import Privacy from '../src/footerComponents/Privacy';
import Terms from '../src/footerComponents/Terms';
import Teams from '../src/footerComponents/Teams';

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
            <Route
              path="/write"
              element={
                <ProtectedRoute>
                  <Write />
                </ProtectedRoute>
              }
            />
            <Route path="/health" element={<Health />} />
            <Route path="/lifestyle" element={<LifeStyle />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/modal" element={<ModalPage />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/help" element={<Help />} />
            <Route path="/status" element={<Status />} />  
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/teams" element={<Teams />} />
          </Routes>
        </AuthContextProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
