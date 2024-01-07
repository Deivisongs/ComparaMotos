// import style
import style from "./FormCompara.module.css"

// import Imagens
import Moto from "../../../assets/mt-03.webp"

function FormCompara(){
    return(
        <div className={style.card}>
            <div className={style.divImg}>
            <img src={Moto} alt="" />
            </div>
            <div className={style.form}>
                <div className={style.itens}>
                    <div className={style.select}>
                    <select name="marca" id="marca">
                        <option value="0">Marca...</option>
                        <option value="1">Honda</option>
                        <option value="2">Yamaha...</option>
                        <option value="3">Shineray</option>
                        <option value="4">Suzuki</option>
                        <option value="5">Dafra</option>
                    </select>
                    </div>
                    <div className={style.select}>
                    <select name="modelo" id="modelo">
                        <option value="0">Modelo...</option>
                        <option value="1">Honda</option>
                        <option value="2">Yamaha...</option>
                        <option value="3">Shineray</option>
                        <option value="4">Suzuki</option>
                        <option value="5">Dafra</option>
                    </select>
                    </div>
                </div>
                <div className={style.itens}>
                    <div className={style.select}>
                    <select name="ano" id="ano">
                        <option value="0">Ano...</option>
                        <option value="1">Honda</option>
                        <option value="2">Yamaha...</option>
                        <option value="3">Shineray</option>
                        <option value="4">Suzuki</option>
                        <option value="5">Dafra</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormCompara