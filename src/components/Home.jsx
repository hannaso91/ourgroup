import Logg from "./Logg";
import MembersCard from "./MembersCard";


export default function Home({members, loggTask, logg, setLogg}) {
    return(
        <section>
            <h1>Gruppemedlemmer</h1> {/*Denne må gjøres dynamisk basert på brukerinput*/}
            <MembersCard memberCard={members}/>
            <Logg loggTask={loggTask} logg={logg} setLogg={setLogg}/> 
        </section>
    )
    
}