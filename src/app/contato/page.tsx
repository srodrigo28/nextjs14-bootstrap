import Header from "../components/header/page"
import styles from "./../page.module.css"

export default function Contato(){
    return(
        <div className={styles.container}>
            <Header />
            <h1>Hey, Contato</h1>
        </div>
    )
}