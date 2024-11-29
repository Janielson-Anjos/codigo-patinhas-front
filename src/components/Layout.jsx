// import { useLocation } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";
// import { useEffect, useState } from "react";

// function Layout({ children }) {
//   const location = useLocation();
//   const [isLoginPage, setIsLoginPage] = useState();

//   useEffect(() => {
//     if(location.pathname === "/login") {
//       setIsLoginPage(true)
//     } else {
//       setIsLoginPage(false)
//     }
//   }, [location])

//   // Rotas onde o layout não será aplicado
//   const noLayoutRoutes = ["/"] || ["/login"];

//   // Verifica se a rota atual está nas rotas sem layout
//   const isNoLayoutRoute = noLayoutRoutes.includes(location.pathname);

//   // Renderiza apenas o conteúdo sem layout
//   if (isNoLayoutRoute) {
//     return <>{children}</>;
//   }

//   if (setIsLoginPage){
//     return <>{children}</>;
//   }

//   // Renderiza o layout padrão para todas as outras rotas
//   return (
//     <div className="d-flex flex-column vh-100">
//       {!isLoginPage && <Header />}
//       <main className="flex-grow-1 py-4" style={{ backgroundColor: "#f8f9fa" }}>
//         <div className="container">
//           {children}
//         </div>
//       </main>
//       {!isLoginPage && <Footer />}
//     </div>
//   );
// }

// export default Layout;


import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function Layout({ children }) {
  const location = useLocation();
  const [isLoginPage, setIsLoginPage] = useState(false);

  useEffect(() => {
    if (location.pathname === "/login") {
      setIsLoginPage(true);
    } else {
      setIsLoginPage(false);
    }
  }, [location]);

  // Rotas onde o layout não será aplicado
  const noLayoutRoutes = ["/login", "/"];

  // Verifica se a rota atual está nas rotas sem layout
  const isNoLayoutRoute = noLayoutRoutes.includes(location.pathname);

  // Renderiza apenas o conteúdo sem layout nas rotas específicas
  if (isNoLayoutRoute) {
    return <>{children}</>;
  }

  // Renderiza o layout com Header e Footer para as outras rotas
  return (
    <div className="d-flex flex-column vh-100">
      {!isLoginPage && <Header />}
      <main className="flex-grow-1 py-4" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          {children}
        </div>
      </main>
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default Layout;
