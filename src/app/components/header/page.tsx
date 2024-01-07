import Link from "next/link"
import styles from "./header.module.css"

export default function Header(){
    return(
        <div className={styles.header}>

            <div  className={styles.logo}>
              Logo
            </div>
            <div  className={styles.menu}>
              <p><Link href="/">Home</Link></p>
              <p><Link href="/login">Login</Link></p>
              <p><Link href="/contato">Contato</Link></p>
            </div>
            
        </div>
    )
}