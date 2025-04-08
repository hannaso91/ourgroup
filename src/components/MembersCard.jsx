import { Link } from "react-router-dom";

export default function MembersCard({ memberCard }) {
  return (
    <>
      {memberCard?.map((member) => (
        <Link key={member._id} to={`/member/${member.slug}`}>
          <article className="member-card">
            <img
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


  