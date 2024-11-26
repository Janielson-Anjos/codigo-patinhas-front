import React from "react";
import "./FooterLandingPage.css";
import instagram from "../../assets/image/instagram.png";
import facebook from "../../assets/image/facebook.png";
import twitter from "../../assets/image/twitter.png";
import logo from "../../assets/image/logo.png";
import { Link } from "react-scroll";

// function FooterLandingPage() {
//   return (
//     <footer className="footer-landing">
//       <div className="footer-container">
//         <div className="footer-brand">
//           <img src={logo} alt="logo" />
//           <button className="footer-contact-btn">Entre em contato</button>
//           {/* <p>Email: codigopatinhas@gmail.com</p>
//           <p>Telefone: 73 9 9999-9999</p>
//           <p>Endereço: Rua dos Pets, nº 123, Petland</p> */}
//         </div>
//         <div className="footer-newsletter">
//           {/* <h3>Inscreva-se no Newsletter</h3>
//           <form>
//             <input
//               type="email"
//               placeholder="Email"
//               className="footer-input"
//               required
//             />
//             <button type="submit" className="footer-newsletter-btn">
//               Inscreva-se no Newsletter
//             </button>
//           </form> */}
//           <p>Email: codigopatinhas@gmail.com</p>
//           <p>Telefone: 73 9 9999-9999</p>
//           <p>Endereço: Rua dos Pets, nº 123, Petland</p>
//         </div>
//         <div className="footer-links">
//           <h3>Links úteis</h3>
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">Sobre</a></li>
//             <li><a href="#services">Serviços</a></li>
//             <li><a href="#app">Nosso App</a></li>
//           </ul>
//           <div className="footer-social">
//             <a href="#instagram" aria-label="Instagram"><img src={instagram} alt="" /></a>
//             <a href="#facebook" aria-label="Facebook"><img src={facebook} alt="" /></a>
//             <a href="#twitter" aria-label="Twitter"><img src={twitter} alt="" /></a>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>© 2024 Código Patinhas. Todos os direitos reservados.</p>
//         <p>
//           <a href="#privacy">Política de Privacidade</a> |{" "}
//           <a href="#cookies">Política de Cookies</a>
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default FooterLandingPage;

function FooterLandingPage() {
  return (
    <footer className="footer-landing">
      <div className="footer-nav">
        <div className="footer-brand">
          <img src={logo} alt="logo" />
        </div>
        <ul
          className="footer-links"
          style={{
            display: "flex",
            listStyle: "none",
            gap: "25px",
            cursor: "pointer",
          }}
        >
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="tips" smooth={true} duration={500}>
              Dicas
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="feedback" smooth={true} duration={500}>
              Feedback
            </Link>
          </li>
        </ul>
        <div className="footer-social">
          <a href="#instagram" aria-label="Instagram">
            <img src={instagram} alt="" />
          </a>
          <a href="#facebook" aria-label="Facebook">
            <img src={facebook} alt="" />
          </a>
          <a href="#twitter" aria-label="Twitter">
            <img src={twitter} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-informacoes">
        <div className="footer-informações-contatos">
          <p>Entre em contato:</p>
          <ul>
            <li>Email: codigopatinhas@email.com</li>
            <li>Telefone: 81 9 9999-9999</li>
            <li>Endereço: Rua dos Pets, nº 123, Petland</li>
          </ul>
        </div>
        <div className="footer-informações-last-cta">
          <h2>
            Adote pets e salve vidas.
          </h2>
          <a href="#acessar" className="hero-button">
            Adote Agora
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2024 Código Patinhas. Todos os direitos reservados.</p>
        <p>
          <a href="#privacy">Política de Privacidade</a> |{" "}
          <a href="#cookies">Política de Cookies</a>
        </p>
      </div>
    </footer>
  );
}

export default FooterLandingPage;
