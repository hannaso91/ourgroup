export default function Logg({  logg }) {
    return (
        <>
            <h2>Gruppelogg</h2>
            {logg.map((log) => (
                <article key={log._id}>
                    <p>{log.personName.name}</p>
                    <p>{log.task}</p>
                    <p>{new Date(log.date).toLocaleDateString("no-NO", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric"
                        })}
                    </p>
                    <p>{log.timeused}</p>
                </article>
            ))}
        </>
    );
}

// Etter en prat med Ann-Charlott for å få hjelp med å vise dato riktig og denne siden her https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString fikk vi skrevet det ut på en norsk måte
