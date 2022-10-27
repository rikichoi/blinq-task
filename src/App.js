import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Header from "./components/menu/Header";
import Footer from "./components/menu/Footer";

function App() {
  return (
    // CREATE A HEADER COMPONENT
    // CREATE A SIGN UP COMPONENT
    // CREATE A FOOTER COMPONENT
    <div className="background">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
