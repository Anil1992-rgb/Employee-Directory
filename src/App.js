import React from 'react';
import './App.css';
import Table from "./components/Table"
import Header from "./components/Header"
import Search from "./components/Search"

function App() {
  return (
    <div className="App">
    <Header/>
    <Search/>
    <Table/>
    </div>
  );
}

export default App;
