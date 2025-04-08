import "../styles/home.scss"
/*Her skal Oda jobbe"*/

export default function MembersCard({ memberCard }) {
    return (
      <>
        {memberCard?.map((member) => (
          <article className="forsidegruppe" key={member._id}>
            <img src={member.image.asset.url} alt="bilde av gruppemedlem"/>
            <p id="fetnavn">{member.name}</p>
            <p>{member.email}</p>
          </article>
        ))}
      </>
    );
  }
  