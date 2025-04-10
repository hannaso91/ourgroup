import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMemberData } from "../sanity/memberServices"
import "../styles/member.scss"
import "../styles/logg2.scss"
import { getLoggBySlug } from "../sanity/logg"

export default function MemberLayout(){
    //Bruker states for å lagre informasjon om medlemmet og de filtrerte loggene til hver enkelt
    const [member, setMember] = useState()
    const [personLogg, setPersonLogg] = useState([])

    // Denne henter slugmember fra URL. den lagrer slugen som kommer i URL her.
    const {slugmember} = useParams()


    console.log("Slug som kommer fra URL", slugmember)
    
     // Funksjon for å hente medlemsdata og lagre i state
    const memberPage = async() => {
        const data = await fetchMemberData(slugmember)
        setMember(data) 
    }

    console.log(member)


    // Funksjon som henter både den filtrerte medlemsdataen og den tilhørende loggen til dette medlemmet
    const getPersonLogg = async() => {
        const data = await getLoggBySlug(slugmember)
        setPersonLogg(data)
      }

    // useEffect kjører når komponenten vises første gang, eller når slugmember endrer seg. Endrer slug i URL seg kjører useEffect på nytt
    // Hadde vi ikke lagt slugmember inn i firkantparantesen her ville ikke dette skjedd hver gang url forandrer seg. Bedre kontroll slik
    // Legger også inn en sjekk her, den ble lagt inn for å vite at useEffect kjører selvom det ikke er noe i slugmember. 
    useEffect(()=>{
        if(!slugmember) {
            console.log("Slugmember finnes ikke")
            return;
        }
        memberPage()
        getPersonLogg()
    },[slugmember])

    return (
        <>
            {/* Hvis det finnes noe i member usestaten skal den vise informasjonen */}
            {member ? (
                <>
            <section className="bildetekst">
                <article>
                    <img src={member.image?.asset?.url} alt="bilde av gruppemedlem"/>
                    <h2 key={member._id}>{member.name}</h2>
                    <p><b>Alder:</b>{member.age}</p>
                    <p><b>Mail:</b>{member.email}</p>
                </article>
                <article className="mengdetekst">
                    <p>{member.description}</p>
                </article>
            </section>
            
            </>
        
            ) : (
                //måtte legge inn en else ellers fikk vi feil, valgte derfor å legge ved en beskjed som dette
                <p>Forsøker å finne medlem.</p>
            )}
            {/* Dette under kunne nok vært gjort til et eget komponent, det ble tenkt på litt sent men tas med videre */}
            <div className="loggsection" >
            {personLogg.map(log => (
                <article key={log._id}>
                    <p>Utført av: {log.personName.name}</p>
                    <p>{log.task}</p>
                    {/*etter en lengre tur på kontoret til Ann-Charlott for å fikse på hvordan dato skrives ut,
                    så kom vi frem til dette. Vi fikk også tipset om å lese på https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
                    Disse to tilsammen resulterte i det under her*/}
                    <p>{new Date(log.date).toLocaleDateString("no-NO", {
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
       
    )
}