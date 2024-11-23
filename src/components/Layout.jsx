import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  const location = useLocation();

  // Rotas onde o layout não será aplicado
  const noLayoutRoutes = ["/"];

  // Verifica se a rota atual está nas rotas sem layout
  const isNoLayoutRoute = noLayoutRoutes.includes(location.pathname);

  // Renderiza apenas o conteúdo sem layout
  if (isNoLayoutRoute) {
    return <>{children}</>;
  }

  // Renderiza o layout padrão para todas as outras rotas
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <main className="flex-grow-1 py-4" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
