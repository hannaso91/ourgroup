import Logg from "./Logg";
import MembersCard from "./MembersCard";


export default function Home({members, logg }) {
    return(
        <>
        <section className="containergruppe">
            <h1>Gruppemedlemmer</h1> 
                <MembersCard memberCard={members}/> 
                <Logg  logg={logg} />
        </section>
    </>
    )
}