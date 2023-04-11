import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MenuBar from './components/MenuBar'
// import Products from './components/Products'
import Protected from "./auth/protected";
import Login from "./auth/login";
import Dashboard from "./mainApp/dashboard";
import { AuthProvider } from "./libs/context/authContext";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Protected />}>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path='/products' element={<Products/>} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}
