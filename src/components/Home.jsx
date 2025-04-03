import MembersCard from "./MembersCard";


export default function Home({members}) {
    return(
        <section>
            <h1>Gruppemedlemmer</h1> {/*Denne må gjøres dynamisk basert på brukerinput*/}
            <MembersCard memberCard={members} /> 
        </section>
    )
    
}