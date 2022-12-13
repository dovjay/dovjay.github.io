import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot/Chatbot';

import { ChatbotContext } from "./components/Chatbot/ChatbotContext";

import Home from "./routes/Home";
import About from "./routes/About";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setActiveWindow = (window) => {
      this.setState({ activeWindow: window });
    };

    this.state = {
        activeWindow: '',
        setWindow: this.setActiveWindow
    };
  }

  render() {
    return (
      <>
        <ChatbotContext.Provider value={this.state}>
          <Navbar />
          <Chatbot />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </ChatbotContext.Provider>
      </>
    );
  }
}

export default App;