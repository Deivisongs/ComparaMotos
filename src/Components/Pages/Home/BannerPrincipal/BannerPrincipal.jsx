// import style
import style from "./BannerPrincipal.module.css"

function BannerPrincipal(){
    return(
        <section className={style.section}>
            <div className={style.container}>
                <h1>Encontrar Moto</h1>
                <p>Te ajudamos na escolha do seu sonho</p>
                <button className={style.btnEncontre}>
                    Encontre <strong>Agora...</strong>
                </button>

            </div>
        </section>
    )
}
export default BannerPrincipal