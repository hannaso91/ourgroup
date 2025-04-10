import { Link } from "react-router-dom";

export default function MembersCard({ memberCard }) {
  return (
    <>
      {/*Ann-Charlott gjorde dette i en forelesning, gjør derfor det samme
      her sjekker vi om at det membercard finnes før vi prøver å mappe det ut*/}
      {memberCard?.map((member) => (
         // Hvert medlem får sin egen <Link> som leder til en egen side basert på slug, legger rundt alt slik at bruker kan trykke hvor som helst og likevel komme dit
        <Link key={member._id} to={`/member/${member.slug}`}>
          <article className="member-card">
            <img
            //Bruker ? inni her for å unngå feil ved mounting dersom det mangler bilde
              src={member.image?.asset?.url}
              alt={`Bilde av ${member.name}`}
            />
            <p id="fetnavn">{member.name}</p>
            <p>{member.email}</p>
          </article>
        </Link>
      ))}
    </>
  );
}


  