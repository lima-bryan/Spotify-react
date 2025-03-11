import React from "react";
import './header.css'
import smallRight from '../assets/Icons/small-right.png';
import smallLeft from '../assets/Icons/small-left.png';
import search from '../assets/Icons/search.png';


const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="" />  //adicionando a imagem da seta pra esquerda
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="" />   //adicionando a imagem da seta pra direita
                </button>
            </div>
            <div className="header__search">
                <img src={search} alt="" />
                <input id="search-input" maxlength="800" autocorrect="off" autocapitalize="off" spellcheck="false"
                    placeholder="O que você quer ouvir?" value="" />
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
}
export default Header