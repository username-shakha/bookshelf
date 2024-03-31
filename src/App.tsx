import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, LoginPage, NotFoundPage, RegisterPage } from "@/pages";
import Layout from "./layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="root" />} />
        <Route path="/root" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
