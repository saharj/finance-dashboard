// import { useState } from 'react'
import { Route, Routes, BrowserRouter } from "react-router";
import Nav from './components/Nav';
import './App.css';
import Transactions from './pages/Transactions';
import Dashboard from "./pages/Dashboard";

function App() {


  return (
    <>
      <div className="flex flex-row h-full">
        <BrowserRouter>
          <Nav />
          <div className="w-full p-6">
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
            </Routes>
          </div>
        </BrowserRouter>
        {/* <Tile>
          <Transactions />
        </Tile> */}
      </div>
      {/* <mainComponent>
        <tabs></tabs>
        <Card></Card>
      </mainComponent> */}

    </>
  )
}

export default App;
