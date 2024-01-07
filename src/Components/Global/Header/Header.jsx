// import useState
import { useState } from "react"

//import style
import style from "./Header.module.css"

// import images
import logo from "./../../../assets/logo.svg"

function Header(){
    const [initiHeader, setInitHeader] = useState("on")
    
    function openHeader(){
        console.log(initiHeader)

        if(initiHeader === "off"){
            setInitHeader("on")
        }else{
            setInitHeader("off")
        }

    }


    return(
        <header className={style.header}>
            <div className={style.container}>
            <div className={style.divImg}>
                <img src={logo} alt="imagem logo Compara Motos" />
            </div>
            <nav className={initiHeader === "off" ? `${style.navOn}` : `${style.nav}`}>
                <div className={style.divBtnFechar}>
                <button className={style.btnFechar} onClick={openHeader}>
                <span className="material-symbols-outlined">close</span>
                </button>
                </div>
                <div className={style.linksNav}> 
                    <a href="#">Lançamentos</a>
                    <a href="#">Tabela Fipe</a>
                    <a href="#">Notícias</a>
                </div>
                <div className={style.btnNav}>
                    <button className={style.btnEntrar}>
                        Entrar
                    </button>
                    <button className={style.btnCadastro}>
                        Cadastre-se
                    </button>
                </div>
            </nav>
            <button className={style.btnToggle} onClick={openHeader}>
            ☰
            </button>
            </div>
        </header>
    )
}
export default Header