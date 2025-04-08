import { Link } from "react-router-dom";
import "../styles/layout.scss"
export default function Layout({children}) {
    return(
        <>
        <header>
        <p className="logo">LOGO HER</p> 
            <nav>
                <ul>
                    <li className="hjem"><Link to="/">Hjem</Link></li>
                    <li><Link to="member/jimmy-ostby">Jimmy</Link></li>
                    <li><Link to="member/oda-julsen">Oda</Link></li>
                    <li><Link to="member/signe-sofie-jansen">Signe</Link></li>
                    <li><Link to="member/hanna-hänel-sorum">Hanna</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <p>Grupper 13</p>
        </footer>
        </>
    )
}