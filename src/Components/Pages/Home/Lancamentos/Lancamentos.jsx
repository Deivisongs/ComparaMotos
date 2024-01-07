// import style
import style from "./Lancamentos.module.css"

// import componets
import CardLancamentos from "../../../Cards/CardLancamentos/CardLancamentos"

function Lancamentos(){
    return(
        <section className={style.section}>
            <div className={style.container}>
                <div className={style.text}>
                    <div className={style.title}>
                        <span class="material-symbols-outlined">rocket_launch</span>
                        <h1>Lançamentos</h1>
                    </div>
                    <div className={style.subtitle}>
                    <p>Últimos Lançamentos <strong>pra você</strong></p>
                    </div>
                </div>
                <div className={`${style.cardsLancamentos} dragscroll` }>
                    <CardLancamentos />
                    <CardLancamentos />
                    <CardLancamentos />
                    <CardLancamentos />
                </div>
            </div>
        </section>
    )
}
export default Lancamentos