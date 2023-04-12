import { Routes, Route } from "react-router-dom";
import Protected from "./auth/protected";
import Login from "./auth/login";
import Dashboard from "./mainApp/dashboard";
import { AuthProvider } from "./libs/context/authContext";
import { AppProvider } from "./libs/context/appContext";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Protected />}>
          <Route path="/*" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}
