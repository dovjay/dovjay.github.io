import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot/Chatbot';

import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;