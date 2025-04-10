import "../styles/logg.scss";

export default function Logg({ logg }) {
  return (
    <section>
      {/* Overskrift for logg */}
      <h2 id="gruppeoverskrift">Gruppelogg</h2>

      {/* Mapper ut hver loggoppføring */}
      <div className="loggcontainer">
        {logg.map((log) => (
          <article className="loggforinger" key={log._id}>
            <p id="fatname">{log.personName.name}</p>
            <p>{log.task}</p>

            {/* Viser datoen på norsk format, kilde for dette ligger i memberscard komponentet */}
            <p id="fatdate">
              {new Date(log.date).toLocaleDateString("no-NO", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
              })}
            </p>

            <p>{log.timeused}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
