// import style
import style from "./SectionComparador.module.css"

// import Components
import FormCompara from "../../../Cards/FormCompara/FormCompara"

function SectionComparador(){
    return(
        <section className={style.section}>
            <div className={style.container}>
                <h2>COMPARA<strong>MOTOS</strong></h2>

                <div className={style.divCompara}>
                    <FormCompara />
                    <FormCompara />
                    
                </div>
            </div>
        </section>

    )
}
export default SectionComparador