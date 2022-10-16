
import "./Header.css";

const Header = () => {
    return ( 
        <header>
              <img className="logo" src="../../image/logo-vittude.svg" alt="logo"></img> 
           <nav>
              <ul>
                <li>Como funciona</li>
                <li>Para você</li>
                <li>Para psicólogos</li>
                <li>Para empresas</li>
                <li>Blog</li>
              </ul>
           <div className="visitante">
            <a> Olá, Visitantes!</a>
           </div>
           </nav> 
       
        </header>
     );
};
 
export default Header;
  