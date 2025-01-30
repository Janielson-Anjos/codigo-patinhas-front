import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Layout from "./components/Layout";
import UsuariosLista from "./pages/UsuariosLista";
import UsuariosForm from "./pages/UsuarioForm";
import HomeAdmin from "./pages/HomeAdmin";
import LandingPage from "./pages/LandingPage";
import LoginLandingPage from "./pages/Login";
import HomeUsuario from "./pages/HomeUsuario";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
// import AuthProvider from "./contexts/AuthContext";
import PetsListaAdmin from "./pages/ListaPetsAdmin";
import PetsForm from "./pages/PetForm";
import AdocaoAdmin from "./pages/AdocaoForm";
import MeusPets from "./pages/MeusPets";

function App() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginLandingPage />} />
          <Route path="/cadastro" element={<LoginLandingPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="admin">
                <HomeAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute requiredRole="user">
                <HomeUsuario />
              </ProtectedRoute>
            }
          />
          <Route
            path="/meus-pets"
            element={
              <ProtectedRoute requiredRole="user">
                <MeusPets />
              </ProtectedRoute>
            }
          />
          <Route
            path="/usuarios-list"
            element={
              <ProtectedRoute requiredRole="admin">
                <UsuariosLista />
              </ProtectedRoute>
            }
          />
          <Route
            path="/usuarios-form"
            element={
              <ProtectedRoute requiredRole="admin">
                <UsuariosForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pets-list"
            element={
              <ProtectedRoute requiredRole="admin">
                <PetsListaAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pets-form"
            element={
              <ProtectedRoute requiredRole="admin">
                <PetsForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pets-form/:id"
            element={
              <ProtectedRoute requiredRole="admin">
                <PetsForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/usuarios-form/:id"
            element={
              <ProtectedRoute requiredRole="admin">
                <UsuariosForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adocao-form"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdocaoAdmin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
