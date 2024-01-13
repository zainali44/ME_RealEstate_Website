// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropertyManagement from "./InvestwithME"; // Import the PropertyManagement component

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/management" component={PropertyManagement} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
