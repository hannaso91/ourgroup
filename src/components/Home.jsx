import MembersCard from "./MembersCard";
import "../styles/home.scss"


export default function Home({members}) {
    return(
        <section>
            <h1 id="overskrift">Gruppemedlemmer</h1> {/*Denne må gjøres dynamisk basert på brukerinput*/}
            <MembersCard memberCard={members} /> 
        </section>
    )
}