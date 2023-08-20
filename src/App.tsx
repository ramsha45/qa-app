import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

function App() {
  const theme = createTheme()
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
