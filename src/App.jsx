import React from "react";
import ReactPage from "./pages/ReactPage/ReactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ReactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
