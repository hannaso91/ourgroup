import MembersCard from "./MembersCard";
import "../styles/home.scss"


export default function Home({members}) {
    return(
        <section>
            <MembersCard memberCard={members} /> 
        </section>
    )
}