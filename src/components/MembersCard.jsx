import { Link } from "react-router-dom";

export default function MembersCard({ memberCard }) {
    return (
      <>
        {memberCard?.map((member) => (
          <article className="forsidegruppe" key={member._id}>
            <img src={member.image.asset.url} alt="bilde av gruppemedlem"/>
            <p id="fetnavn">{member.name}</p>
  return (
    <>
      {memberCard?.map((member) => (
        <Link
          key={member._id}
          to={`/member/${member.slug}`}
        >
          <article className="member-card">
            <img src={member.image?.asset?.url} alt={`Bilde av ${member.name}`} />
            <p>{member.name}</p>
            <p>{member.email}</p>
          </article>
        </Link>
      ))}
    </>
  );
}

  