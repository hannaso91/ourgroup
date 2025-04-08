import Logg from "./Logg";
import MembersCard from "./MembersCard";
import "../styles/home.scss"


export default function Home({members, logg }) {
    return(
        <section>
            <h1>Gruppemedlemmer</h1> {/*Denne må gjøres dynamisk basert på brukerinput*/}
            <MembersCard memberCard={members}/>
            <Logg  logg={logg} /> 
        </section>
    )
}