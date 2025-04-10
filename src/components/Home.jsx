import Logg from "./Logg";
import MembersCard from "./MembersCard";
import "../styles/home.scss"

// Tar imot props som ble sendt fra app
export default function Home({members, logg }) {
    return(
        // Henter inn det som ligger i komponentene Memberscard og Logg, sender også med props som ble sendt fra app slik at vi får brukt det
        <section>
            <h1>Gruppemedlemmer</h1> 
                <MembersCard memberCard={members}/>
                <Logg  logg={logg} /> 
        </section>
    )
}