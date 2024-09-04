import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoListState from "./context/TodoListState";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <TodoListState>
      <div className="d-flex flex-column flex-lg-row">
        <div className="flex-grow-1">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </TodoListState>
  );
};
export default App;
