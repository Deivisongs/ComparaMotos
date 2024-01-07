// import style
import style from "./CardLancamentos.module.css"

// import image
import tag from "../../../assets/tag.png"
import moto from "../../../assets/mt-03.webp"

function CardLancamentos(){
    return(
        <div className={style.card}>
            <img src={tag} alt="" />
            <div className={style.divImg}>
                <img src={moto} alt="" />
            </div>
            <div className={style.divTitle}>
                <h3>Honda CB300 </h3>
            </div>
            <div className={style.divConsumo}>
                <p>Consumo Médio</p>
                <p className={style.pKms}><strong>34km/L</strong></p>
            </div>
            <button>
                Comparar
            </button>
        </div>
    )
}
export default CardLancamentos