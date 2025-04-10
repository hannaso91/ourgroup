import "../styles/logg.scss"

export default function Logg({  logg }) {
    return (
         <>
         <h2 id="gruppeoverskrift">Gruppelogg</h2>
        <div className="loggcontainer">
            {logg.map((log) => (
                <article className="loggforinger"key={log._id}>
                    <p id="fatname">{log.personName.name}</p>
                    <p>{log.task}</p>
                    <p id="fatdate">{new Date(log.date).toLocaleDateString("no-NO", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric"
                        })}
                    </p>
                    <p>{log.timeused}</p>
                </article>
            ))}
        </div>
        </>
    );
}

// Etter en prat med Ann-Charlott for å få hjelp med å vise dato riktig og denne siden her https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString fikk vi skrevet det ut på en norsk måte
