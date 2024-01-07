import Header from "../components/header/page"
import styles from "./../page.module.css"

export default function Login(){
    return(
        <div className={styles.container}>
            <Header />
            <h1>Hey, Login</h1>
        </div>
    )
}