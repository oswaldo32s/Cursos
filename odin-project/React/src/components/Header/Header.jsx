import styles from './header.module.css'
import { navData } from './headerData'

function Header() {
    function handleThemeClick() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
        prefersDark.matches ? document.body.classList.toggle('light') : document.body.classList.toggle('dark')
      }

    return (
        <header className={styles.mainHeader}>
            <section>
                <span className={styles.logoText}>OG Dev</span>
            </section>
            <nav className={styles.headerNav}>
                <button className={styles.themeBtn} onClick={handleThemeClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.themeSVG}><path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.3 17.7-1.4 1.4"/><path d="m19.1 4.9-1.4 1.4"/></svg>
                </button>
                <ul className={styles.headerUl}>
                    {navData.map(obj => {
                        return (
                            <li key={obj.id} className={styles.headerLi}>{obj.name}</li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}   

export default Header