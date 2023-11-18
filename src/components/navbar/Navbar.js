import "./navbarModule.css";

import LogoReduzida from '../../img/navbar/logo-reduzida.svg'
import FotoPerfil from '../../img/navbar/foto-perfil.svg'

export default function Navbar() {
  return (
    <nav className="navbar">
      <input type="checkbox" name="" id="menu-hamburguer" />
      <label className="menu-label" htmlFor="menu-hamburguer">
        <div className="menu">
          <span className="hamburguer" />
        </div>
      </label>
      <div className="modal-navbar">
        <div className="navbar-e" />
        <div className="navbar-d">
          <ul className="itens-menu">
            <li>
              <img className="logo-reduzida" src={LogoReduzida} alt=""/>
            </li>
            <li>
              <a className="logar item" href="pages/perfil.html">
                <img className="user" src={FotoPerfil} alt="" />
                <span>Maria do Nascimento</span>
              </a>
            </li>
            <li>
              <a className="item" href="#">
                Início
              </a>
            </li>
            <li>
              <a className="item" href="pages/pacotes.html">
                Pacotes
              </a>
            </li>
            <li>
              <a className="item" href="#">
                Convites
              </a>
            </li>
            <li>
              <a className="item" href="pages/sobre.html">
                Sobre nós
              </a>
            </li>
            <li>
              <a id="modo-daltonismo" className="item" href="#">
                Modo Daltonismo
              </a>
            </li>
            <li>
              <a className="item" href="#">
                Desconectar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
