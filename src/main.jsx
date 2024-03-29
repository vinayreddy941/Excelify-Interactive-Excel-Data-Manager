
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import UploadPage from "./Uploads";

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/Uploads" element={<UploadPage />} />
      
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
