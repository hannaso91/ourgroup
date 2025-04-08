import { Link } from "react-router-dom";
import logo from '../pictures/DOMinationLogo.png'
import "../styles/layout.scss"
export default function Layout({children}) {
    return(
        <>
        <header>
            <div className="logo">
            <Link to="/"><img src={logo} alt="Vår logo"/></Link>

            </div>
            <nav>
                <ul>
                    <li className="hjem"><Link to="/">Hjem</Link></li>
                    <li><Link to="member/hanna-hänel-sorum">Hanna</Link></li>
                    <li><Link to="member/signe-sofie-jansen">Signe</Link></li>
                    <li><Link to="member/jimmy-ostby">Jimmy</Link></li>
                    <li><Link to="member/oda-julsen">Oda</Link></li>
                    
                    
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <p>Gruppe 13</p>
            <p>Hvorfor ble foreleseren i programmering arrestert?
Fordi han hadde for mange klasser uten innhold.</p>
        </footer>
        </>
    )
}