export default function MembersCard({ memberCard }) {
    return (
      <>
        {memberCard?.map((member) => (
          <article key={member._id}>
            <img src={member.image.asset.url} alt="bilde av gruppemedlem"/>
            <p>{member.name}</p>
            <p>{member.email}</p>
          </article>
        ))}
      </>
    );
  }
  