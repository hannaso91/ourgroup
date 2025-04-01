import { Link } from "react-router-dom";

export default function Layout({children}) {
    return(
        <>
        <header>
            <nav>
                <p>Gruppe 13 - Team DOMination</p> 
                <ul>
                    <li><Link to="/">Hjem</Link></li>
                    <li><Link to="Jimmy">Jimmy</Link></li>
                    <li><Link to="Oda">Oda</Link></li>
                    <li><Link to="Signe">Signe</Link></li>
                    <li><Link to="Hanna">Hanna</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <p>Her kommer det litt info</p>
        </footer>
        </>
    )
}