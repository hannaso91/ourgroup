import { Link } from "react-router-dom";
import logo from '../pictures/DOMinationLogo.png'
import "../styles/layout.scss"

// Layout komponentet er et "skall" for hele appen. 
export default function Layout({children}) {
    return(
        <>
        <header>
            <div className="logo">
                {/* Logoen vår – klikker man på den, kommer man til startsiden. 
                Fant denne måten å gjøre det på her: https://stackoverflow.com/questions/43823289/how-to-import-image-svg-png-in-a-react-component
                importerte først logo i toppen her, for deretter å peke på en i src */}
                <Link to="/"><img src={logo} alt="Vår logo"/></Link>
            </div>
            <nav>
                <ul>
                    {/* Navigasjonsmeny med lenker til hvert medlem, her er det også slug som er likt slug i sanity */}
                    <li className="hjem"><Link to="/">Hjem</Link></li>
                    <li><Link to="member/hanna-hänel-sorum">Hanna</Link></li>
                    <li><Link to="member/signe-sofie-jansen">Signe</Link></li>
                    <li><Link to="member/jimmy-ostby">Jimmy</Link></li>
                    <li><Link to="member/oda-julsen">Oda</Link></li>
                </ul>
            </nav>
        </header>
        {/* Hovedinnholdet på siden. Children gjør det slik at alt rendres ut mellom her, slik at main alltid blir et foreldreelement */}
        <main>
            {children}
        </main>
        <footer>
            <p className="gruppenavn">Gruppe 13</p>
            <p>Semesterets vits:</p>
            <p>
                "Hvorfor ble foreleseren i programmering arrestert?
                Fordi han hadde for mange klasser uten innhold."
            </p>
        </footer>
        </>
    )
}