import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
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
import Help from "./components/Footer-Components/footerComponents/Help";
import Contact from "../src/components/Footer-Components/footerComponents/Contact";
import About from "../src/components/Footer-Components/footerComponents/About";
import Careers from "../src/components/Footer-Components/footerComponents/Careers/Careers";
import Terms from "../src/components/Footer-Components/footerComponents/Terms";
import Teams from "../src/components/Footer-Components/footerComponents/Teams";
import MyPosts from "./admin/MyPosts";
import AuthorPage from "./pages/AuthorPage";
// import FooterRoutes from "./components/Footer-Components/FooterRoutes";

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
              path="/myposts"
              element={
                <ProtectedRoute>
                  <MyPosts />
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/authorPage/:id" element={<AuthorPage />} />
            {/* <Route path="/footer/*" element={<FooterRoutes/>}/> */}
          </Routes>
        </AuthContextProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
