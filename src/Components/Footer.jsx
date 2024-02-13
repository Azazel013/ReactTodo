import styles from './Footer.module.css'
export default function Footer({count,total}){
    return(
        <div className={styles.footer}>
         <span className={styles.item}>Completed Tasks:{count}</span>
         <span className={styles.item}>Total Tasks:{total}</span>
        </div>
    )
}