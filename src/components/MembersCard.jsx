import { Link } from "react-router-dom";
import "../styles/home.scss";

export default function MembersCard({ memberCard }) {
  return (
    <div className="members-wrapper">
      {/* Ann-Charlott gjorde dette i en forelesning, gjør derfor det samme.
          Her sjekker vi om memberCard finnes før vi prøver å mappe det ut */}
      {memberCard?.map((member) => (
        // Hvert medlem får sin egen <Link> som leder til en egen side basert på slug.
        // Legger rundt alt slik at bruker kan trykke hvor som helst og likevel komme dit
        <Link key={member._id} to={`/member/${member.slug}`}>
          <article className="member-card">
            <img
              // Bruker ? for å unngå feil dersom bildet mangler
              src={member.image?.asset?.url}
              alt={`Bilde av ${member.name}`}
            />
            <p id="fetnavn">{member.name}</p>
            <p>{member.email}</p>
          </article>
        </Link>
      ))}
    </div>
  );
}
