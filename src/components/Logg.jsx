export default function Logg({ loggTask, logg, setLogg }) {
    return (
        <>
            <h2>Gruppelogg</h2>
            {logg.map((log) => (
                <article key={log._id}>
                    <p>{log.personName.name}</p>
                    <p>{log.task}</p>
                    <p>{new Date (log.date).toDateString()}</p>
                    <p>{log.timeused}</p>
                </article>
            ))}
        </>
    );
}
